import {FieldValues, FormProvider, useForm} from "react-hook-form";
import React from "react";
import {zodResolver} from "@hookform/resolvers/zod";
import {ZodType} from "zod";
import UIForm from "@/features/shared/ui/flex/UIForm";
import ButtonSubmit from "@/features/shared/ui/button/ButtonSubmit";
import TextError from "@/features/shared/ui/text/TextError";

type FormMutation<TData> = {
    schema?: ZodType,
    children?: React.ReactNode,
    btnText?: string,
    error?: string,
    isPending?: boolean,
    mutate: (data: TData) => void,
}

export default function FormMutation<
    TData extends FieldValues
>(
    {error, schema, mutate, isPending, btnText, children}: FormMutation<TData>
) {
    const methods = useForm<TData>({
        resolver: schema ? zodResolver(schema) : undefined,
    })

    return <FormProvider {...methods}>
        <UIForm
            className={'mb-10'}
            onSubmit={methods.handleSubmit((data: TData) => mutate(data))}
        >
            {children}
            <ButtonSubmit disabled={isPending}>{btnText || 'Отправить'}</ButtonSubmit>
            <TextError message={error}/>
        </UIForm>
    </FormProvider>
}