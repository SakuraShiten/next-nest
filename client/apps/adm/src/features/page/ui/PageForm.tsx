'use client'

import React, {useMemo, useState} from 'react';
import {pagesMyGetQueryKey, usePagesCreate} from "@repo/api";
import {useQueryClient} from "@repo/api/react-query";
import FormMutation from "@/features/shared/ui/form/FormMutation";
import InputControl from "@/features/shared/ui/input/InputControl";
import {pageSchema} from "@/features/page/domain/PageDomain";
import UIDrawer from "@/features/shared/ui/drawer/UIDrawer";

export default function PageForm() {
    const queryClient = useQueryClient()
    const queryKey = useMemo(() => pagesMyGetQueryKey(), [])
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const {mutate, isPending, error} = usePagesCreate({
        mutation: {
            onSuccess: () => {
                setIsDrawerOpen(false)
                queryClient.invalidateQueries({queryKey}).then()
            }
        }
    })

    return <UIDrawer
        text={'Добавить страницу'}
        title={'Добавление страницы'}
        isOpen={isDrawerOpen}
        setIsOpen={setIsDrawerOpen}
    >
        <FormMutation
            isPending={isPending}
            error={error?.message}
            mutate={mutate}
            btnText={'Добавить'}
            schema={pageSchema}
        >
            <InputControl name={'title'} placeholder={'Название'}/>
        </FormMutation>
    </UIDrawer>
}