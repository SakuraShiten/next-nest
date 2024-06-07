'use client'

import {Button} from "@repo/ui/components/button";
import {Drawer, DrawerContent, DrawerHeader, DrawerTitle} from "@repo/ui/components/drawer";
import React from "react";
import {useQuery, useQueryClient} from "@repo/api/react-query"

const queryKey = ['state', 'alertDelete']

const useQueryAlert = () => useQuery<{ show: boolean, onDelete: (() => void) | null }>({
    queryKey: queryKey,
    retry: false,
    initialData: {
        show: false,
        onDelete: null
    },
    retryOnMount: false,
    retryDelay: 0,
    gcTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false
})

export const useAlert = (onDelete: () => void) => {
    const queryClient = useQueryClient()
    const alert = () => queryClient.setQueryData(queryKey, {
        show: true, onDelete
    })
    return {alert}
}

export function AlertDrawer() {
    const {data} = useQueryAlert()
    const queryClient = useQueryClient()

    const handleOpenChange = (show: boolean) => queryClient.setQueryData(queryKey, {...data, show})

    const handleDelete = () => {
        if (data.onDelete) data.onDelete()
        queryClient.setQueryData(queryKey, {show: false, onDelete: null})
    }

    return <Drawer open={data.show} onOpenChange={handleOpenChange}>
        <DrawerContent>
            <DrawerHeader>
                <DrawerTitle>Уверены?</DrawerTitle>
            </DrawerHeader>
            <Button
                onClick={handleDelete}
                variant={'destructive'}
                className={'m-3'}
            >Подтвердить</Button>
        </DrawerContent>
    </Drawer>
}