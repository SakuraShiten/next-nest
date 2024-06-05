import {useUsersAuth} from "@repo/api";
import InputControlLogin from "../../../../app/shared/components/widgets/inputs/InputControlLogin";
import InputControlPassword from "../../../../app/shared/components/widgets/inputs/InputControlPassword";
import FormMutation from "../../../../app/shared/components/widgets/form/FormMutation";
import {loginSchema} from "../domain/LoginDomain";
import {setToken} from "../../action";
import {useRouter} from "next/navigation";

const LoginForm = () => {
    const {push} = useRouter()
    const onSuccess = async (token: string) => {
        await setToken(token)
        push('/')
    }
    return (
        <div>
            <FormMutation
                hook={useUsersAuth}
                schema={loginSchema}
                btnText={'Войти'}
                hookOptions={{
                    onSuccess: ({token}) => onSuccess(token)
                }}
            >
                <InputControlLogin/>
                <InputControlPassword/>
            </FormMutation>
        </div>
    )
};

export default LoginForm;