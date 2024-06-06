'use client'

import React, {useMemo} from 'react';
import {PagesControllerGetQueryResponse, pagesGetQueryKey, usePagesUpdate} from "@repo/api";
import {mutatePositive} from "@/features/shared/query/mutatePositive";
import {Button} from "@repo/ui/components/button";

const UpdateStatusPage = ({page}: { page: PagesControllerGetQueryResponse }) => {
    const queryKey = useMemo(() => pagesGetQueryKey(page.id), [])

    const {mutate, isPending} = usePagesUpdate(page.id, mutatePositive({
        queryKey, onUpdate: (old, data) => ({...old, isPublished: data.isPublished})
    }))

    return <Button
        disabled={isPending}
        onClick={() => mutate({
            ...page, isPublished: !page.isPublished
        })}
    >{page.isPublished ? "Д" : "Н"}</Button>
}

export default UpdateStatusPage