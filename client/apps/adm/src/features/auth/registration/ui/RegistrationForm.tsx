'use client'

import React from 'react';
import {useUsersRegistration} from "@repo/api";
import {useRouter} from "next/navigation";
import {setToken} from "@/features/auth/shared/actions";
import FormMutation from "@/features/shared/ui/form/FormMutation";
import {registrationSchema} from "@/features/auth/registration/domain/RegistrationDomain";
import InputControlLogin from "@/features/shared/ui/input/InputControlLogin";
import InputControlPassword from "@/features/shared/ui/input/InputControlPassword";

export default function RegistrationForm() {
    const {push} = useRouter()
    const {mutate, error, isPending} = useUsersRegistration({
        mutation:{
            onSuccess: async ({token}) => {
                await setToken(token)
                push('/')
            }
        }
    })

    return <FormMutation
        mutate={mutate}
        isPending={isPending}
        error={error?.message}
        schema={registrationSchema}
        btnText={'Зарегистрироваться'}
    >
        <InputControlLogin/>
        <InputControlPassword/>
    </FormMutation>
}

