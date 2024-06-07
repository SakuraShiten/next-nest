'use client'

import React from 'react';
import {usePagesMyGet} from "@repo/api";
import PageItem from "@/features/page/ui/PageItem";
import PageSkeleton from "@/features/page/ui/PageSkeleton";

export default function PageList() {
    const {data, isLoading, isSuccess} = usePagesMyGet()

    if (isLoading) return <PageSkeleton/>
    if (!isSuccess) return null
    return <>
        {data.map(page => <PageItem id={page.id} key={page.id}/>)}
    </>
}