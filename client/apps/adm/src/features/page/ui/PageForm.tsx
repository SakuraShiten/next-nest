'use client'

import React, {useState} from 'react';
import {pagesMyGetQueryKey, usePagesCreate} from "@repo/api";
import {useQueryClient} from "@repo/api/react-query";
import {Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger} from "@repo/ui/components/drawer";
import {Button} from "@repo/ui/components/button";
import FormMutation from "@/features/shared/ui/form/FormMutation";
import InputControl from "@/features/shared/ui/input/InputControl";
import {pageSchema} from "@/features/page/domain/PageDomain";
import UIDrawer from "@/features/shared/ui/drawer/UIDrawer";

export default function PageForm() {
    const queryClient = useQueryClient()
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    return <UIDrawer
        text={'+++'}
        isOpen={isDrawerOpen}
        setIsOpen={setIsDrawerOpen}
    >
        <FormMutation
            hook={usePagesCreate}
            btnText={'+'}
            schema={pageSchema}
            hookOptions={{
                onSuccess: () => {
                    setIsDrawerOpen(false)
                    queryClient.invalidateQueries({queryKey: pagesMyGetQueryKey()}).then()
                }
            }}
        >
            <InputControl name={'title'} placeholder={'title'}/>
            <InputControl name={'url'} placeholder={'url'}/>
        </FormMutation>
    </UIDrawer>
}