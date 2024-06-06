import InputControl from "./InputControl";

export default function InputControlPassword() {
    return <InputControl
        name={'password'}
        rules={{required: true}}
        placeholder={'Пароль'}
        type={'password'}
        autoComplete={'current-password'}
    />
}