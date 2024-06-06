import React, {useMemo} from 'react';
import {Button} from "@repo/ui/components/button";
import {PageElementsControllerGetQueryResponse, pageElementsGetQueryKey, usePageElementsDelete} from "@repo/api";
import {mutatePositive} from "@/features/shared/query/mutatePositive";

type PageElementDeleteProps = {
    pageId: number;
    elementId: number;
}

const PageElementDelete = ({pageId, elementId}: PageElementDeleteProps) => {
    const queryKey = useMemo(() => pageElementsGetQueryKey(pageId), [])
    const {mutate} = usePageElementsDelete(
        pageId, elementId, mutatePositive({
            queryKey, onUpdate: (olds: PageElementsControllerGetQueryResponse) =>
                olds.filter(el => el.id !== elementId)
        })
    )

    return <Button
        onMouseDown={(e) => {
            e.stopPropagation()
            mutate(undefined as never)
        }}
    >
        x
    </Button>
}

export default PageElementDelete