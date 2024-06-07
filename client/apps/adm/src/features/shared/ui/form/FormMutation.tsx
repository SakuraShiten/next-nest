'use client'

import {FieldValues, FormProvider, useForm} from "react-hook-form";
import React from "react";
import {zodResolver} from "@hookform/resolvers/zod";
import {ZodType} from "zod";
import {UseMutationOptions, UseMutationResult} from "@repo/api/react-query"
import UIForm from "@/features/shared/ui/flex/UIForm";
import ButtonSubmit from "@/features/shared/ui/button/ButtonSubmit";
import TextError from "@/features/shared/ui/text/TextError";

type HookOptionsProps<TData, TError, TResult> = {
    mutation?: UseMutationOptions<TResult, TError, TData>
}

type HookFunction<TData, TError, TResult, TId> =
    | ((id: TId, options?: HookOptionsProps<TData, TError, TResult>) => UseMutationResult<TResult, TError, TData>)
    | ((options?: HookOptionsProps<TData, TError, TResult>) => UseMutationResult<TResult, TError, TData>);

type FormMutation<TData, TError, TResult, TId> = {
    schema?: ZodType,
    id?: TId,
    hook: HookFunction<TData, TError, TResult, TId>,
    hookOptions?: UseMutationOptions<TResult, TError, TData>,
    children?: React.ReactNode,
    btnText?: string
}

export default function FormMutation<
    TData extends FieldValues,
    TError extends { statusCode: number; message: string },
    TResult,
    TId
>(
    {hook, id, hookOptions, schema, btnText, children}: FormMutation<
        TData, TError, TResult, TId
    >
) {
    const methods = useForm<TData>({
        resolver: schema ? zodResolver(schema) : undefined,
    })
    const {mutate, error, isPending} = typeof id !== 'undefined'
        ? (hook as (id: TId, options?: HookOptionsProps<TData, TError, TResult>) => UseMutationResult<TResult, TError, TData>)(id, {mutation: {...hookOptions}})
        : (hook as (options?: HookOptionsProps<TData, TError, TResult>) => UseMutationResult<TResult, TError, TData>)({mutation: {...hookOptions}})

    return <FormProvider {...methods}>
        <UIForm
            className={'mb-10'}
            onSubmit={methods.handleSubmit((data: TData) => mutate(data))}
        >
            {children}
            <ButtonSubmit disabled={isPending}>{btnText || 'Отправить'}</ButtonSubmit>
            <TextError message={error?.message}/>
        </UIForm>
    </FormProvider>
}