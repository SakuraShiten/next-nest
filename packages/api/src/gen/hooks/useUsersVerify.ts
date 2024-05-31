import client from "./../../tanstack-query-client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { UsersControllerVerifyQueryResponse, UsersControllerVerifyQueryParams, UsersControllerVerify400 } from "../models/UsersControllerVerify";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type UsersVerifyClient = typeof client<UsersControllerVerifyQueryResponse, UsersControllerVerify400, never>;
type UsersVerify = {
    data: UsersControllerVerifyQueryResponse;
    error: UsersControllerVerify400;
    request: never;
    pathParams: never;
    queryParams: UsersControllerVerifyQueryParams;
    headerParams: never;
    response: UsersControllerVerifyQueryResponse;
    client: {
        parameters: Partial<Parameters<UsersVerifyClient>[0]>;
        return: Awaited<ReturnType<UsersVerifyClient>>;
    };
};
export const usersVerifyQueryKey = (params?: UsersVerify["queryParams"]) => [{ url: "/api/users/verify" }, ...(params ? [params] : [])] as const;
export type UsersVerifyQueryKey = ReturnType<typeof usersVerifyQueryKey>;
export function usersVerifyQueryOptions(params?: UsersVerify["queryParams"], options: UsersVerify["client"]["parameters"] = {}) {
    const queryKey = usersVerifyQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<UsersVerify["data"], UsersVerify["error"]>({
                method: "get",
                url: `/api/users/verify`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @link /api/users/verify
 */
export function useUsersVerify<TData = UsersVerify["response"], TQueryData = UsersVerify["response"], TQueryKey extends QueryKey = UsersVerifyQueryKey>(params?: UsersVerify["queryParams"], options: {
    query?: Partial<QueryObserverOptions<UsersVerify["response"], UsersVerify["error"], TData, TQueryData, TQueryKey>>;
    client?: UsersVerify["client"]["parameters"];
} = {}): UseQueryResult<TData, UsersVerify["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? usersVerifyQueryKey(params);
    const query = useQuery({
        ...usersVerifyQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, UsersVerify["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const usersVerifySuspenseQueryKey = (params?: UsersVerify["queryParams"]) => [{ url: "/api/users/verify" }, ...(params ? [params] : [])] as const;
export type UsersVerifySuspenseQueryKey = ReturnType<typeof usersVerifySuspenseQueryKey>;
export function usersVerifySuspenseQueryOptions(params?: UsersVerify["queryParams"], options: UsersVerify["client"]["parameters"] = {}) {
    const queryKey = usersVerifySuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<UsersVerify["data"], UsersVerify["error"]>({
                method: "get",
                url: `/api/users/verify`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @link /api/users/verify
 */
export function useUsersVerifySuspense<TData = UsersVerify["response"], TQueryKey extends QueryKey = UsersVerifySuspenseQueryKey>(params?: UsersVerify["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<UsersVerify["response"], UsersVerify["error"], TData, TQueryKey>>;
    client?: UsersVerify["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, UsersVerify["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? usersVerifySuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...usersVerifySuspenseQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, UsersVerify["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}