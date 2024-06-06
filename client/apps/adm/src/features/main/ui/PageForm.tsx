'use client'

import React, {useState} from 'react';
import {pagesMyGetQueryKey, usePagesCreate} from "@repo/api";
import {useQueryClient} from "@repo/api/react-query";
import {Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger} from "@repo/ui/components/drawer";
import {Button} from "@repo/ui/components/button";
import FormMutation from "@/features/shared/ui/form/FormMutation";
import {pageSchema} from "@/features/main/domain/MainDomain";
import InputControl from "@/features/shared/ui/input/InputControl";

const PageForm = () => {
    const queryClient = useQueryClient()
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    return <Drawer onOpenChange={setIsDrawerOpen} open={isDrawerOpen}>
        <Button asChild={true}><DrawerTrigger>+</DrawerTrigger></Button>
        <DrawerContent>
            <DrawerHeader>
                <DrawerTitle>+++</DrawerTitle>
            </DrawerHeader>
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
        </DrawerContent>
    </Drawer>
}

export default PageForm