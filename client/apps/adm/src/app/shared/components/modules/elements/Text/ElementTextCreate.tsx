import {FormProvider, useForm} from "react-hook-form";
import {PageElementsControllerGetQueryResponse, pageElementsGetQueryKey, usePageElementsCreate} from "@repo/api";
import React, {useMemo, useState} from "react";
import UIForm from "../../../../../../features/shared/ui/flex/UIForm";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {mutatePositive} from "@/features/shared/query/mutatePositive";
import {Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger} from "@repo/ui/components/drawer";
import {Button} from "@repo/ui/components/button";
import InputControl from "@/features/shared/ui/input/InputControl";
import ButtonSubmit from "@/features/shared/ui/button/ButtonSubmit";

type ElementTextCreateProps = {
    pageId: number
}

const schema = z.object({
    text: z.string().min(1, 'Необходимо ввести текст')
})

function ElementTextCreate({pageId}: ElementTextCreateProps) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const methods = useForm<{ text: string }>({
        defaultValues: {text: ''}, resolver: zodResolver(schema)
    })

    const queryKey = useMemo(() => pageElementsGetQueryKey(pageId), [])
    const {mutate, isPending} = usePageElementsCreate(pageId, mutatePositive({
        queryKey, onUpdate: (olds: PageElementsControllerGetQueryResponse, data) => [
            ...olds, {id: Date.now(), ...data}
        ]
    }))

    return (
        <Drawer onOpenChange={setIsDrawerOpen} open={isDrawerOpen}>
            <Button asChild={true}><DrawerTrigger>+</DrawerTrigger></Button>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>+++</DrawerTitle>
                </DrawerHeader>
                <FormProvider {...methods}>
                    <UIForm
                        onSubmit={methods.handleSubmit(({text}: { text: string }) => {
                            setIsDrawerOpen(false)
                            mutate({type: 'text', text})
                            methods.reset()
                        })}
                    >
                        <InputControl name={'text'} placeholder={'text'}/>
                        <ButtonSubmit disabled={isPending}>{'Создать'}</ButtonSubmit>
                    </UIForm>
                </FormProvider>
            </DrawerContent>
        </Drawer>
    )
}

export default ElementTextCreate;