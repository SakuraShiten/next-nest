'use client'

import React, {useMemo} from 'react';
import {PagesControllerGetQueryResponse, pagesGetQueryKey, usePagesUpdate} from "@repo/api";
import {mutatePositive} from "@/features/shared/query/mutatePositive";
import {Button} from "@repo/ui/components/button";

export default function PageStatusUpdate({page}: { page: PagesControllerGetQueryResponse }) {
    const queryKey = useMemo(() => pagesGetQueryKey(page.id), [])

    const {mutate, isPending} = usePagesUpdate(page.id, mutatePositive({
        queryKey, onUpdate: (old, data) => ({...old, isPublished: data.isPublished})
    }))

    const handleUpdate = () => mutate({...page, isPublished: !page.isPublished})

    return <Button
        disabled={isPending}
        variant={'outline'}
        onClick={handleUpdate}
    >{page.isPublished ? 'Активен' : 'Не активен'}</Button>
}