import React, {useMemo} from 'react';
import {Button} from "@ui/components/ui/button";
import {PageElementsControllerGetQueryResponse, pageElementsGetQueryKey, usePageElementsDelete} from "@repo/api";
import {mutatePositive} from "../../../mutatePositive";

type ElementCardProps = {
    element: PageElementsControllerGetQueryResponse[0],
    pageId: number
}

function ElementCard({element, pageId}: ElementCardProps) {
    const queryKey = useMemo(() => pageElementsGetQueryKey(pageId), [])
    const {mutate} = usePageElementsDelete(
        pageId, element.id, mutatePositive({
            queryKey, onUpdate: (olds: PageElementsControllerGetQueryResponse) =>
                olds.filter(el => el.id !== element.id)
        })
    )

    return (
        <div
            className={'p-4 bg-white border-2 rounded-xl m-4'}
        >
            <p>{element.id}</p>
            <p>{element.type}</p>
            <p>{element.position}</p>
            <p>{element?.text?.text}</p>
            <p>{element?.header?.header}</p>
            <p>{element.createAt}</p>

            <Button
                onMouseDown={(e) => {
                    e.stopPropagation()
                    mutate(undefined as never)
                }}
            >
                x
            </Button>
        </div>
    )
}

export default ElementCard;