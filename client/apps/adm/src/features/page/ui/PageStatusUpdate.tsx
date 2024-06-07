'use client'

import React, {useMemo} from 'react';
import {PagesControllerGetQueryResponse, pagesGetQueryKey, usePagesUpdate} from "@repo/api";
import {mutatePositive} from "@/features/shared/query/mutatePositive";
import {Switch} from "@repo/ui/components/switch";
import {Label} from "@repo/ui/components/label";
import UIFlexRow from "@/features/shared/ui/flex/UIFlexRow";

export default function PageStatusUpdate({page}: { page: PagesControllerGetQueryResponse }) {
    const queryKey = useMemo(() => pagesGetQueryKey(page.id), [])

    const {mutate} = usePagesUpdate(page.id, mutatePositive({
        queryKey, onUpdate: (old, data) => ({...old, isPublished: data.isPublished})
    }))

    const handleUpdate = () => mutate({...page, isPublished: !page.isPublished})

    return <UIFlexRow className={'w-auto items-center'}>
        <Label htmlFor={'is-page-publish'}>Активна</Label>
        <Switch
            checked={page.isPublished}
            onCheckedChange={handleUpdate}
            id={'is-page-publish'}
        />
    </UIFlexRow>
}