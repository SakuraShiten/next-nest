'use client'

import React from 'react';
import {usePagesMyGet} from "@repo/api";
import PageItem from "@/features/main/ui/PageItem";

const PageList = () => {
    const {data} = usePagesMyGet()

    return <>
        {data?.map(page => <PageItem id={page.id} key={page.id}/>)}
    </>
}

export default PageList