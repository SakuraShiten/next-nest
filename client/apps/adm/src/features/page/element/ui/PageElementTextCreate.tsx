'use client'

import React, {useMemo, useState} from 'react';
import {FormProvider, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {PageElementsControllerGetQueryResponse, pageElementsGetQueryKey, usePageElementsCreate} from "@repo/api";
import {mutatePositive} from "@/features/shared/query/mutatePositive";
import UIForm from "@/features/shared/ui/flex/UIForm";
import InputControl from "@/features/shared/ui/input/InputControl";
import ButtonSubmit from "@/features/shared/ui/button/ButtonSubmit";
import {pageElementTextSchema} from "@/features/page/element/domain/ElementDomain";
import UIDrawer from "@/features/shared/ui/drawer/UIDrawer";

const PageElementTextCreate = ({pageId}: {pageId:number}) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const methods = useForm<{ text: string }>({
        defaultValues: {text: ''}, resolver: zodResolver(pageElementTextSchema)
    })

    const queryKey = useMemo(() => pageElementsGetQueryKey(pageId), [])
    const {mutate, isPending} = usePageElementsCreate(pageId, mutatePositive({
        queryKey, onUpdate: (olds: PageElementsControllerGetQueryResponse, data) => [
            ...olds, {id: Date.now(), ...data}
        ]
    }))

    return <UIDrawer
        text={'+'}
        isOpen={isDrawerOpen}
        setIsOpen={setIsDrawerOpen}
    >
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
    </UIDrawer>
}

export default PageElementTextCreate