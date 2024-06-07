'use client'

import React from 'react';
import {usePagesGet, useUsersMe} from "@repo/api";
import Link from "next/link";
import UIFlexRow from "@/features/shared/ui/flex/UIFlexRow";
import PageStatusUpdate from "@/features/page/ui/PageStatusUpdate";
import PageDelete from "@/features/page/ui/PageDelete";
import {useRouter} from "next/navigation";
import {ISOToDate} from "@/features/shared/lib/date/ISOToDate";
import UITextLight from "@/features/shared/ui/text/UITextLight";
import UIFlexCol from "@/features/shared/ui/flex/UIFlexCol";
import PageSkeleton from "@/features/page/ui/PageSkeleton";

type PageItemProps = {
    id: number;
}

export default function PageItem({id}: PageItemProps) {
    const {data, isSuccess, isLoading} = usePagesGet(id)
    const {data: me} = useUsersMe()
    const {push} = useRouter()

    const handleRemove = () => {
        push('/')
    }

    if (isLoading) return <PageSkeleton/>
    if (!isSuccess) return null
    return <UIFlexCol className={'border rounded-xl p-3'}>
        <Link
            href={`/pages/${data.id}`}
            className={'flex-shrink-0 w-full'}
        >
            <UIFlexRow className={'justify-between'}>
                <UITextLight>Страница</UITextLight>
                <UITextLight>{ISOToDate(data.createAt)}</UITextLight>
            </UIFlexRow>

            <p>{data.title}</p>
        </Link>

        <UIFlexRow className={'justify-between items-center'}>
            <PageDelete id={data.id} onRemove={handleRemove}/>
            <PageStatusUpdate page={data}/>
        </UIFlexRow>
    </UIFlexCol>
}