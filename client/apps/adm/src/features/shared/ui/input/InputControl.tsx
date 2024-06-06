import React from "react";
import type {ControllerProps} from "react-hook-form";
import {Controller, useFormContext} from "react-hook-form";
import {Input} from "@repo/ui/components/input";

type InputControlProps = {
    name: ControllerProps['name'],
    rules?: ControllerProps['rules'],
} & Omit<React.ComponentProps<typeof Input>, 'name'>

export default function InputControl({name, rules, ...props}: InputControlProps) {
    const {control} = useFormContext()

    return <Controller
        control={control}
        name={name}
        rules={rules}
        render={(
            {
                field: {name, ref, onBlur, onChange, value, disabled},
                fieldState: {error}
            }) => <div className={'w-full'}>
            <Input
                {...props}
                name={name}
                ref={ref}
                onBlur={onBlur}
                onChange={onChange}
                value={value || ''}
                disabled={disabled}
            />
            {error?.message && <p className={'text-gray-600 text-sm'}>{error.message}</p>}
        </div>}
    />
}