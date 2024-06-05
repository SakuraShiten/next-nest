import type {QueryKey, Updater, dataTagSymbol} from "@repo/api/react-query";
import {useQueryClient} from "@repo/api/react-query";

type NoInfer<T> = [T][T extends any ? 0 : never];
type Infer<T = any> = any

type MutatePositiveProps<TQueryKey, TElements, TData> = {
    queryKey: TQueryKey,
    onUpdate: (old: Infer<TData>, data: TData) => Infer<TElements>
}

export const mutatePositive = <TQueryKey extends QueryKey, TElements, TData>(
    {
        queryKey,
        onUpdate
    }: MutatePositiveProps<TQueryKey, TElements, TData>
) => {
    const queryClient = useQueryClient()

    const onSettled = () => {
        queryClient.invalidateQueries({queryKey}).then()
    }

    const onMutate = async (data: TData) => {
        await queryClient.cancelQueries({queryKey})
        const previous = queryClient.getQueryData(queryKey)
        queryClient.setQueryData(queryKey, (old) => onUpdate(old, data))
        return {previous}
    }

    const onError = (_err: unknown, _data: unknown, context: unknown) => {
        const prev = context as { previous: NoInfer<TElements> }
        queryClient.setQueryData(queryKey, prev?.previous)
    }

    return {mutation: {onMutate, onSettled, onError}}
}


// import type {QueryKey, Updater, dataTagSymbol} from "@repo/api/react-query";
// import {useQueryClient} from "@repo/api/react-query";
//
// type NoInfer<T> = [T][T extends any ? 0 : never];
// type Infer<T = any> = any
//
// type MutatePositiveProps<TQueryKey, TElements, TData> = {
//     queryKey: TQueryKey,
//     onUpdate: (old: Infer<TData>, data: TData) => Infer<TElements>
// }
//
// export const mutatePositive = <TQueryKey extends QueryKey, TElements, TData>(
//     {
//         queryKey,
//         onUpdate
//     }: MutatePositiveProps<TQueryKey, TElements, TData>
// ) => {
//     const queryClient = useQueryClient()
//
//     const onSettled = () => {
//         queryClient.invalidateQueries({queryKey}).then()
//     }
//
//     const onMutate = async (data: TData) => {
//         await queryClient.cancelQueries({queryKey})
//         const previous = queryClient.getQueryData(queryKey)
//         queryClient.setQueryData(queryKey, (old) => onUpdate(old, data))
//         return {previous}
//     }
//
//     const onError = (_err: unknown, _data: unknown, context: unknown) => {
//         const prev = context as { previous: NoInfer<TElements> }
//         queryClient.setQueryData(queryKey, prev?.previous)
//     }
//
//     return {mutation: {onMutate, onSettled, onError}}
// }
//
