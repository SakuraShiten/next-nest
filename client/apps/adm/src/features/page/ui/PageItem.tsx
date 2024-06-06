'use client'

import React from 'react';
import {usePagesGet} from "@repo/api";
import Link from "next/link";
import {Skeleton} from "@repo/ui/components/skeleton";
import UIFlexRow from "@/features/shared/ui/flex/UIFlexRow";
import PageStatusUpdate from "@/features/page/ui/PageStatusUpdate";
import PageDelete from "@/features/page/ui/PageDelete";
import {useRouter} from "next/navigation";

type PageItemProps = {
    id: number;
}

const PageItem = ({id}: PageItemProps) => {
    const {data, isSuccess, isLoading} = usePagesGet(id)
    const {push} = useRouter()

    const handleRemove = () => {
        push('/')
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

        <PageDelete id={data.id} onRemove={handleRemove}/>

        <PageStatusUpdate page={data}/>
    </UIFlexRow>
}

export default PageItem