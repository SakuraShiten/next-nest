import React, {useMemo} from 'react';
import {PageElementsControllerGetQueryResponse, pageElementsGetQueryKey, usePageElementsDelete} from "@repo/api";
import {mutatePositive} from "@/features/shared/query/mutatePositive";
import ButtonDelete from "@/features/shared/ui/button/ButtonDelete";

type PageElementDeleteProps = {
    pageId: number;
    elementId: number;
}

export default function PageElementDelete({pageId, elementId}: PageElementDeleteProps) {
    const queryKey = useMemo(() => pageElementsGetQueryKey(pageId), [])
    const {mutate} = usePageElementsDelete(
        pageId, elementId, mutatePositive({
            queryKey, onUpdate: (olds: PageElementsControllerGetQueryResponse) =>
                olds.filter(el => el.id !== elementId)
        })
    )

    return <ButtonDelete onMouseDown={(e) => {
        e.stopPropagation()
        mutate(undefined as never)
    }}/>
}

