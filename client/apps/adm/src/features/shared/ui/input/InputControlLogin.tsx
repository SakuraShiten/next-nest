import InputControl from "@/features/shared/ui/input/InputControl";

function InputControlLogin() {
    return (
        <InputControl
            name={'login'}
            rules={{required: true}}
            placeholder={'Логин'}
            autoComplete={'username'}
        />
    );
}

export default InputControlLogin;