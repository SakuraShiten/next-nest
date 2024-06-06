'use client'

import React, {useMemo} from 'react';
import {PagesControllerMyGetQueryResponse, pagesMyGetQueryKey, usePagesRemove} from "@repo/api";
import {mutatePositive} from "@/features/shared/query/mutatePositive";
import {Button} from "@repo/ui/components/button";

type DeletePageProps = {
    id: number;
    onRemove?: () => void;
}

const DeletePage = ({id, onRemove}: DeletePageProps) => {
    const queryKey = useMemo(() => pagesMyGetQueryKey(), [])
    const {mutate, isPending} = usePagesRemove(id, mutatePositive({
            queryKey, onUpdate: (olds: PagesControllerMyGetQueryResponse) => olds?.filter((page) => page.id !== id)
        })
    )

    const removeHandler = () => {
        mutate(undefined as never)
        onRemove?.()
    }

    return <Button
        disabled={isPending}
        onClick={() => removeHandler()}
    >X</Button>
}

export default DeletePage