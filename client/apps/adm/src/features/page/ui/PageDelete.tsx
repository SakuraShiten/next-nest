'use client'

import React, {useMemo} from 'react';
import {PagesControllerMyGetQueryResponse, pagesMyGetQueryKey, usePagesRemove} from "@repo/api";
import {mutatePositive} from "@/features/shared/query/mutatePositive";
import ButtonDelete from "@/features/shared/ui/button/ButtonDelete";
import {useAlert} from "@/features/shared/ui/hook/useAlert";

type DeletePageProps = {
    id: number;
    onRemove?: () => void;
}

export default function PageDelete({id, onRemove}: DeletePageProps) {
    const queryKey = useMemo(() => pagesMyGetQueryKey(), [])
    const {mutate} = usePagesRemove(id, mutatePositive({
            queryKey, onUpdate: (olds: PagesControllerMyGetQueryResponse) => olds?.filter((page) => page.id !== id)
        })
    )
    const handlerDelete = () => {
        mutate(undefined as never)
        onRemove?.()
    }
    const {alert} = useAlert(handlerDelete)

    return <ButtonDelete onClick={alert}>Удалить</ButtonDelete>
}