import client from "./../../tanstack-query-client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { UsersControllerMeQueryResponse, UsersControllerMe400 } from "../models/UsersControllerMe";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type UsersMeClient = typeof client<UsersControllerMeQueryResponse, UsersControllerMe400, never>;
type UsersMe = {
    data: UsersControllerMeQueryResponse;
    error: UsersControllerMe400;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: UsersControllerMeQueryResponse;
    client: {
        parameters: Partial<Parameters<UsersMeClient>[0]>;
        return: Awaited<ReturnType<UsersMeClient>>;
    };
};
export const usersMeQueryKey = () => [{ url: "/api/users/me" }] as const;
export type UsersMeQueryKey = ReturnType<typeof usersMeQueryKey>;
export function usersMeQueryOptions(options: UsersMe["client"]["parameters"] = {}) {
    const queryKey = usersMeQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<UsersMe["data"], UsersMe["error"]>({
                method: "get",
                url: `/api/users/me`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @link /api/users/me
 */
export function useUsersMe<TData = UsersMe["response"], TQueryData = UsersMe["response"], TQueryKey extends QueryKey = UsersMeQueryKey>(options: {
    query?: Partial<QueryObserverOptions<UsersMe["response"], UsersMe["error"], TData, TQueryData, TQueryKey>>;
    client?: UsersMe["client"]["parameters"];
} = {}): UseQueryResult<TData, UsersMe["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? usersMeQueryKey();
    const query = useQuery({
        ...usersMeQueryOptions(clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, UsersMe["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const usersMeSuspenseQueryKey = () => [{ url: "/api/users/me" }] as const;
export type UsersMeSuspenseQueryKey = ReturnType<typeof usersMeSuspenseQueryKey>;
export function usersMeSuspenseQueryOptions(options: UsersMe["client"]["parameters"] = {}) {
    const queryKey = usersMeSuspenseQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<UsersMe["data"], UsersMe["error"]>({
                method: "get",
                url: `/api/users/me`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @link /api/users/me
 */
export function useUsersMeSuspense<TData = UsersMe["response"], TQueryKey extends QueryKey = UsersMeSuspenseQueryKey>(options: {
    query?: Partial<UseSuspenseQueryOptions<UsersMe["response"], UsersMe["error"], TData, TQueryKey>>;
    client?: UsersMe["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, UsersMe["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? usersMeSuspenseQueryKey();
    const query = useSuspenseQuery({
        ...usersMeSuspenseQueryOptions(clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, UsersMe["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}