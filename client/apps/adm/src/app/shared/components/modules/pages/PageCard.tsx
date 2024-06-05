'use client'

import {PagesControllerMyGetQueryResponse, pagesMyGetQueryKey, usePagesGet, usePagesRemove} from "@repo/api";
import UIFlexRow from "../../../../../features/shared/ui/flex/UIFlexRow";
import {Button} from "@ui/components/ui/button";
import {useMemo} from "react";
import PageCardChangeStatus from "./PageCardChangeStatus";
import Link from "next/link";
import {mutatePositive} from "../../../mutatePositive";
import {Skeleton} from "@ui/components/ui/skeleton";

type PageCardProps = {
    id: number
    onRemove?: () => void
}

function PageCard({id, onRemove}: PageCardProps) {
    const {data, isSuccess, isLoading} = usePagesGet(id)
    const queryKey = useMemo(() => pagesMyGetQueryKey(), [])

    const {mutate, isPending} = usePagesRemove(id, mutatePositive({
            queryKey, onUpdate: (olds: PagesControllerMyGetQueryResponse) => olds?.filter((page) => page.id !== id)
        }),
    )

    const removeHandler = () => {
        mutate(undefined as never)
        onRemove?.()
    }

    if (isLoading) return <Skeleton className={'h-20 w-36'}/>
    if (!isSuccess) return null
    return <UIFlexRow>
        <Link
            href={`/pages/${data.id}`}
        >
            <p>{data.id}</p>
            <p>{data.url}</p>
            <p>{data.title}</p>
        </Link>

        <Button
            disabled={isPending}
            onClick={() => removeHandler()}
        >X</Button>

        <PageCardChangeStatus page={data}/>
    </UIFlexRow>
}

export default PageCard