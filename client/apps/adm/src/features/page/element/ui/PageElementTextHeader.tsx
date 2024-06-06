'use client'

import React, {useMemo, useState} from 'react';
import {FormProvider, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {pageElementHeaderSchema} from "@/features/page/element/domain/ElementDomain";
import {PageElementsControllerGetQueryResponse, pageElementsGetQueryKey, usePageElementsCreate} from "@repo/api";
import {mutatePositive} from "@/features/shared/query/mutatePositive";
import UIDrawer from "@/features/shared/ui/drawer/UIDrawer";
import UIForm from "@/features/shared/ui/flex/UIForm";
import InputControl from "@/features/shared/ui/input/InputControl";
import ButtonSubmit from "@/features/shared/ui/button/ButtonSubmit";

const PageElementTextHeader = ({pageId}: { pageId: number }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const methods = useForm<{ header: string }>({
        defaultValues: {header: ''}, resolver: zodResolver(pageElementHeaderSchema)
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
                onSubmit={methods.handleSubmit(({header}: { header: string }) => {
                    setIsDrawerOpen(false)
                    mutate({type: 'header', header})
                    methods.reset()
                })}
            >
                <InputControl name={'header'} placeholder={'header'}/>
                <ButtonSubmit disabled={isPending}>{'Создать'}</ButtonSubmit>
            </UIForm>
        </FormProvider>
    </UIDrawer>
}

export default PageElementTextHeader