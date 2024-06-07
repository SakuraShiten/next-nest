'use client'

import {useUsersAuth} from "@repo/api";
import {useRouter} from "next/navigation";
import {setToken} from "@/features/auth/shared/actions";
import FormMutation from "@/features/shared/ui/form/FormMutation";
import {loginSchema} from "@/features/auth/login/domain/LoginDomain";
import InputControlLogin from "@/features/shared/ui/input/InputControlLogin";
import InputControlPassword from "@/features/shared/ui/input/InputControlPassword";

export default function LoginForm() {
    const {push} = useRouter()
    const {mutate, error, isPending} = useUsersAuth({
        mutation: {
            onSuccess: async ({token}) => {
                await setToken(token)
                push('/')
            }
        }
    })

    return <FormMutation
        schema={loginSchema}
        mutate={mutate}
        error={error?.message}
        isPending={isPending}
        btnText={'Войти'}
    >
        <InputControlLogin/>
        <InputControlPassword/>
    </FormMutation>
}

