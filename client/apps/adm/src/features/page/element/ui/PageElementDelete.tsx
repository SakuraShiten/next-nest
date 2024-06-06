import React, {useMemo} from 'react';
import {Button} from "@repo/ui/components/button";
import {PageElementsControllerGetQueryResponse, pageElementsGetQueryKey, usePageElementsDelete} from "@repo/api";
import {mutatePositive} from "@/features/shared/query/mutatePositive";

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

    return <Button
        className={'px-0'}
        size={'sm'}
        variant={'ghost'}
        onMouseDown={(e) => {
            e.stopPropagation()
            mutate(undefined as never)
        }}
    >
        Удалить
    </Button>
}

