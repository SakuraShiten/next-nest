'use client'

import React from 'react';
import {usePagesGet} from "@repo/api";
import Link from "next/link";
import {Skeleton} from "@repo/ui/components/skeleton";
import UIFlexRow from "@/features/shared/ui/flex/UIFlexRow";
import DeletePage from "@/features/main/ui/DeletePage";
import UpdateStatusPage from "@/features/main/ui/UpdateStatusPage";

type PageItemProps = {
    id: number;
    onRemove?: () => void;
}

const PageItem = ({id, onRemove}: PageItemProps) => {
    const {data, isSuccess, isLoading} = usePagesGet(id)

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

        <DeletePage id={data.id} onRemove={onRemove}/>

        <UpdateStatusPage page={data}/>
    </UIFlexRow>
}

export default PageItem