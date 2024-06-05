'use client'

import UIFlexCol from "../../features/shared/ui/flex/UIFlexCol";
import {pagesMyGetQueryKey, usePagesCreate, usePagesMyGet} from "@repo/api";
import PageCard from "../shared/components/modules/pages/PageCard";
import {Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger} from "@ui/components/ui/drawer";
import {Button} from "@ui/components/ui/button";
import FormMutation from "../shared/components/widgets/form/FormMutation";
import InputControl from "../shared/components/widgets/inputs/InputControl";
import {z} from "zod";
import {useState} from "react";
import {useQueryClient} from "@repo/api/react-query";

export default function Page() {
    const queryClient = useQueryClient()
    const {data} = usePagesMyGet()
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    return (
        <UIFlexCol>
            <Drawer onOpenChange={setIsDrawerOpen} open={isDrawerOpen}>
                <Button asChild={true}><DrawerTrigger>+</DrawerTrigger></Button>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>+++</DrawerTitle>
                    </DrawerHeader>
                    <FormMutation
                        hook={usePagesCreate}
                        btnText={'+'}
                        schema={z.object({
                            title: z.string(),
                            url: z.string()
                        })}
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
            {data?.map(page => <PageCard id={page.id} key={page.id}/>)}
        </UIFlexCol>
    )
}
