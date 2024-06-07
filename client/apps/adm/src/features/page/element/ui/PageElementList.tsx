'use client'

import React, {useEffect, useMemo} from 'react';
import {
    PageElementsControllerGetQueryResponse,
    PageElementsControllerUpdatePositionMutationRequest,
    pageElementsGetQueryKey,
    usePageElementsGet,
    usePageElementsUpdatePosition
} from "@repo/api";
import {mutatePositive} from "@/features/shared/query/mutatePositive";
import DndSortList from "@/features/shared/ui/dnd/DndSortList";
import PageElementItem from "@/features/page/element/ui/PageElementItem";
import {Skeleton} from "@repo/ui/components/skeleton";
import UIFlexCol from "@/features/shared/ui/flex/UIFlexCol";

export default function PageElementList({pageId}: { pageId: number }) {
    const {data, isSuccess, isLoading} = usePageElementsGet(pageId)
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

    if (isLoading) return <UIFlexCol>
        <Skeleton className={'h-28'}/>
        <Skeleton className={'h-28'}/>
    </UIFlexCol>
    if (!isSuccess) return null
    return <DndSortList
        items={elements}
        onDragEnd={onDragEnd}
    >
        {item => <PageElementItem
            pageId={pageId}
            element={item}
            key={item.id}
        />}
    </DndSortList>
}

