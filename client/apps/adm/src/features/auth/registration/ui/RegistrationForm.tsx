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
    const onSuccess = async (token: string) => {
        await setToken(token)
        push('/')
    }

    return <FormMutation
        hook={useUsersRegistration}
        schema={registrationSchema}
        btnText={'Зарегистрироваться'}
        hookOptions={{
            onSuccess: ({token}) => onSuccess(token)
        }}
    >
        <InputControlLogin/>
        <InputControlPassword/>
    </FormMutation>
}

