'use client'

import {useUsersRegistration} from "@repo/api";
// import {UserAuthSchema} from "../../../shared/shemas/users";
import InputControlLogin from "../../../shared/components/widgets/inputs/InputControlLogin";
import InputControlPassword from "../../../shared/components/widgets/inputs/InputControlPassword";
import FormMutation from "../../../shared/components/widgets/form/FormMutation";
import {useRouter} from "next/navigation";
import {setToken} from "../actions";
import {UsersCreateSchema} from "@repo/zod";

function Page() {
    const {push} = useRouter()

    const onSuccess = async (token: string) => {
        await setToken(token)
        push('/')
    }

    return (
        <FormMutation
            hook={useUsersRegistration}
            schema={UsersCreateSchema}
            btnText={'Зарегистрироваться'}
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