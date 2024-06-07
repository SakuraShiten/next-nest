'use client'

import React from 'react';
import {usePagesGet} from "@repo/api";
import Link from "next/link";
import {Skeleton} from "@repo/ui/components/skeleton";
import UIFlexRow from "@/features/shared/ui/flex/UIFlexRow";
import PageStatusUpdate from "@/features/page/ui/PageStatusUpdate";
import PageDelete from "@/features/page/ui/PageDelete";
import {useRouter} from "next/navigation";
import {ISOToDate} from "@/features/shared/lib/date/ISOToDate";
import UITextLight from "@/features/shared/ui/text/UITextLight";
import UIFlexCol from "@/features/shared/ui/flex/UIFlexCol";

type PageItemProps = {
    id: number;
}

export default function PageItem({id}: PageItemProps) {
    const {data, isSuccess, isLoading} = usePagesGet(id)
    const {push} = useRouter()

    const handleRemove = () => {
        push('/')
    }

    if (isLoading) return <Skeleton className={'h-20 w-36'}/>
    if (!isSuccess) return null
    return <UIFlexCol className={'border rounded-xl p-3'}>
        <Link
            href={`/pages/${data.id}`}
            className={'w-2/3 flex-shrink-0'}
        >
            <UITextLight>Страница</UITextLight>
            <p>{data.url}</p>
            <p>{data.title}</p>
            <UITextLight>{ISOToDate(data.createAt)}</UITextLight>
        </Link>

        <UIFlexRow className={'justify-between items-center'}>
            <PageDelete id={data.id} onRemove={handleRemove}/>
            <PageStatusUpdate page={data}/>
        </UIFlexRow>
    </UIFlexCol>
}