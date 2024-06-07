'use client'

import React, {useMemo} from 'react';
import {PagesControllerMyGetQueryResponse, pagesMyGetQueryKey, usePagesRemove} from "@repo/api";
import {mutatePositive} from "@/features/shared/query/mutatePositive";
import {Button} from "@repo/ui/components/button";
import ButtonDelete from "@/features/shared/ui/button/ButtonDelete";

type DeletePageProps = {
    id: number;
    onRemove?: () => void;
}

export default function PageDelete({id, onRemove}: DeletePageProps) {
    const queryKey = useMemo(() => pagesMyGetQueryKey(), [])
    const {mutate, isPending} = usePagesRemove(id, mutatePositive({
            queryKey, onUpdate: (olds: PagesControllerMyGetQueryResponse) => olds?.filter((page) => page.id !== id)
        })
    )

    const removeHandler = () => {
        mutate(undefined as never)
        onRemove?.()
    }

    return <ButtonDelete onClick={removeHandler} disabled={isPending}/>
}