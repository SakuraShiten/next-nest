import client from "./../../tanstack-query-client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { PagesControllerMyGetQueryResponse, PagesControllerMyGet400 } from "../models/PagesControllerMyGet";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type PagesMyGetClient = typeof client<PagesControllerMyGetQueryResponse, PagesControllerMyGet400, never>;
type PagesMyGet = {
    data: PagesControllerMyGetQueryResponse;
    error: PagesControllerMyGet400;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: PagesControllerMyGetQueryResponse;
    client: {
        parameters: Partial<Parameters<PagesMyGetClient>[0]>;
        return: Awaited<ReturnType<PagesMyGetClient>>;
    };
};
export const pagesMyGetQueryKey = () => [{ url: "/api/pages/my" }] as const;
export type PagesMyGetQueryKey = ReturnType<typeof pagesMyGetQueryKey>;
export function pagesMyGetQueryOptions(options: PagesMyGet["client"]["parameters"] = {}) {
    const queryKey = pagesMyGetQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<PagesMyGet["data"], PagesMyGet["error"]>({
                method: "get",
                url: `/api/pages/my`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @link /api/pages/my
 */
export function usePagesMyGet<TData = PagesMyGet["response"], TQueryData = PagesMyGet["response"], TQueryKey extends QueryKey = PagesMyGetQueryKey>(options: {
    query?: Partial<QueryObserverOptions<PagesMyGet["response"], PagesMyGet["error"], TData, TQueryData, TQueryKey>>;
    client?: PagesMyGet["client"]["parameters"];
} = {}): UseQueryResult<TData, PagesMyGet["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? pagesMyGetQueryKey();
    const query = useQuery({
        ...pagesMyGetQueryOptions(clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, PagesMyGet["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const pagesMyGetSuspenseQueryKey = () => [{ url: "/api/pages/my" }] as const;
export type PagesMyGetSuspenseQueryKey = ReturnType<typeof pagesMyGetSuspenseQueryKey>;
export function pagesMyGetSuspenseQueryOptions(options: PagesMyGet["client"]["parameters"] = {}) {
    const queryKey = pagesMyGetSuspenseQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<PagesMyGet["data"], PagesMyGet["error"]>({
                method: "get",
                url: `/api/pages/my`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @link /api/pages/my
 */
export function usePagesMyGetSuspense<TData = PagesMyGet["response"], TQueryKey extends QueryKey = PagesMyGetSuspenseQueryKey>(options: {
    query?: Partial<UseSuspenseQueryOptions<PagesMyGet["response"], PagesMyGet["error"], TData, TQueryKey>>;
    client?: PagesMyGet["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, PagesMyGet["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? pagesMyGetSuspenseQueryKey();
    const query = useSuspenseQuery({
        ...pagesMyGetSuspenseQueryOptions(clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, PagesMyGet["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}