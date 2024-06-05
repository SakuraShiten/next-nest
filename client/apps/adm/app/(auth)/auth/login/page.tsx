'use client'

import {useUsersAuth} from "@repo/api";
import {useRouter} from "next/navigation";
import {setToken} from "../actions";
import FormMutation from "../../../shared/components/widgets/form/FormMutation";
import InputControlLogin from "../../../shared/components/widgets/inputs/InputControlLogin";
import InputControlPassword from "../../../shared/components/widgets/inputs/InputControlPassword";
import {UserAuthSchema} from "../../../shared/shemas/users";

function Page() {
    const {push} = useRouter()

    const onSuccess = async (token: string) => {
        await setToken(token)
        push('/')
    }

    return (
        <FormMutation
            hook={useUsersAuth}
            schema={UserAuthSchema}
            btnText={'Войти'}
            hookOptions={{
                onSuccess: ({token}) => onSuccess(token)
            }}
        >
            <InputControlLogin/>
            <InputControlPassword/>
        </FormMutation>
    )
}

export default Page