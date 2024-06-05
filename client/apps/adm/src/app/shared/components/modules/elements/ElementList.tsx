import {
    PageElementsControllerGetQueryResponse,
    PageElementsControllerUpdatePositionMutationRequest,
    pageElementsGetQueryKey,
    usePageElementsGet,
    usePageElementsUpdatePosition
} from "@repo/api";
import React, {useEffect, useMemo} from "react";
import {mutatePositive} from "../../../mutatePositive";
import ElementCard from "./ElementCard";
import DndSortList from "../../widgets/dnd/sort/DndSortList";

function ElementList({pageId}: { pageId: number }) {
    const {data, isSuccess} = usePageElementsGet(pageId)
    const [elements, setElements] = React.useState<PageElementsControllerGetQueryResponse>([])
    const queryKey = useMemo(() => pageElementsGetQueryKey(pageId), [pageId])

    useEffect(() => {
        if (isSuccess) setElements(data)
    }, [data, isSuccess])

    const onUpdate = (
        old: PageElementsControllerGetQueryResponse,
        data: PageElementsControllerUpdatePositionMutationRequest
    ) => data.map(id => old.find(e => e.id === id)!)

    const {mutate} = usePageElementsUpdatePosition(pageId, {
        mutation: {
            ...mutatePositive({queryKey, onUpdate}).mutation,
            onMutate: undefined
        }
    })

    const onDragEnd = (items: PageElementsControllerGetQueryResponse) => {
        setElements(items)
        mutate(items.map(el => el.id))
    }

    if (!isSuccess) return <></>
    return <DndSortList
        items={elements}
        onDragEnd={onDragEnd}
    >
        {item => <ElementCard
            pageId={pageId}
            element={item}
            key={item.id}
        />}
    </DndSortList>
}

export default ElementList;