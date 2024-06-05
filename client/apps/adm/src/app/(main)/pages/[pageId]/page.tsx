'use client'

import {pageElementsGetQueryKey, usePageElementsCreate} from "@repo/api";
import PageCard from "../../../shared/components/modules/pages/PageCard";
import {useRouter} from "next/navigation";
import {Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger} from "@ui/components/ui/drawer";
import {Button} from "@ui/components/ui/button";
import FormMutation from "../../../shared/components/widgets/form/FormMutation";
import {z} from "zod";
import InputControl from "../../../shared/components/widgets/inputs/InputControl";
import {useQueryClient} from "@repo/api/react-query";
import {useState} from "react";
import ElementTextCreate from "../../../shared/components/modules/elements/Text/ElementTextCreate";
import ElementList from "../../../shared/components/modules/elements/ElementList";

function Page({params: {pageId}}: { params: { pageId: string } }) {
    const queryClient = useQueryClient()
    const [isDrawerOpenHeader, setIsDrawerOpenHeader] = useState(false)
    const {push} = useRouter()

    return (
        <div>
            <PageCard
                id={Number(pageId)}
                onRemove={() => {
                    push('/')
                }}
            />
            <br/>

            <ElementTextCreate pageId={Number(pageId)}/>

            <Drawer onOpenChange={setIsDrawerOpenHeader} open={isDrawerOpenHeader}>
                <Button asChild={true}><DrawerTrigger>+</DrawerTrigger></Button>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>+++</DrawerTitle>
                    </DrawerHeader>
                    <FormMutation
                        hook={usePageElementsCreate}
                        id={Number(pageId)}
                        btnText={'+'}
                        schema={z.object({
                            type: z.string(),
                            header: z.string(),
                        })}
                        hookOptions={{
                            onSuccess: () => {
                                setIsDrawerOpenHeader(false)
                                queryClient.invalidateQueries({queryKey: pageElementsGetQueryKey(Number(pageId))}).then()
                            }
                        }}
                    >
                        <InputControl name={'type'} placeholder={'type'}/>
                        <InputControl name={'header'} placeholder={'text'}/>
                    </FormMutation>
                </DrawerContent>
            </Drawer>

            <ElementList pageId={Number(pageId)}/>
        </div>
    )
}

export default Page