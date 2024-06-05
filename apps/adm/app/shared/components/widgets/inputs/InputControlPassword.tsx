import InputControl from "./InputControl";

function InputControlPassword() {
    return (
        <InputControl
            name={'password'}
            rules={{required: true}}
            placeholder={'Пароль'}
            type={'password'}
            autoComplete={'current-password'}
        />
    );
}

export default InputControlPassword