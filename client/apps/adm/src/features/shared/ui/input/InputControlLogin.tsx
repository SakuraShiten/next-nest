import InputControl from "@/features/shared/ui/input/InputControl";

export default function InputControlLogin() {
    return <InputControl
        name={'login'}
        rules={{required: true}}
        placeholder={'Логин'}
        autoComplete={'username'}
    />
}