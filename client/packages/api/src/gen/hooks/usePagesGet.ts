import client from "./../../tanstack-query-client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { PagesControllerGetQueryResponse, PagesControllerGetPathParams, PagesControllerGet400 } from "../models/PagesControllerGet";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type PagesGetClient = typeof client<PagesControllerGetQueryResponse, PagesControllerGet400, never>;
type PagesGet = {
    data: PagesControllerGetQueryResponse;
    error: PagesControllerGet400;
    request: never;
    pathParams: PagesControllerGetPathParams;
    queryParams: never;
    headerParams: never;
    response: PagesControllerGetQueryResponse;
    client: {
        parameters: Partial<Parameters<PagesGetClient>[0]>;
        return: Awaited<ReturnType<PagesGetClient>>;
    };
};
export const pagesGetQueryKey = (id: PagesControllerGetPathParams["id"]) => [{ url: "/api/pages/:id", params: { id: id } }] as const;
export type PagesGetQueryKey = ReturnType<typeof pagesGetQueryKey>;
export function pagesGetQueryOptions(id: PagesControllerGetPathParams["id"], options: PagesGet["client"]["parameters"] = {}) {
    const queryKey = pagesGetQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<PagesGet["data"], PagesGet["error"]>({
                method: "get",
                url: `/api/pages/${id}`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @link /api/pages/:id
 */
export function usePagesGet<TData = PagesGet["response"], TQueryData = PagesGet["response"], TQueryKey extends QueryKey = PagesGetQueryKey>(id: PagesControllerGetPathParams["id"], options: {
    query?: Partial<QueryObserverOptions<PagesGet["response"], PagesGet["error"], TData, TQueryData, TQueryKey>>;
    client?: PagesGet["client"]["parameters"];
} = {}): UseQueryResult<TData, PagesGet["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? pagesGetQueryKey(id);
    const query = useQuery({
        ...pagesGetQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, PagesGet["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const pagesGetSuspenseQueryKey = (id: PagesControllerGetPathParams["id"]) => [{ url: "/api/pages/:id", params: { id: id } }] as const;
export type PagesGetSuspenseQueryKey = ReturnType<typeof pagesGetSuspenseQueryKey>;
export function pagesGetSuspenseQueryOptions(id: PagesControllerGetPathParams["id"], options: PagesGet["client"]["parameters"] = {}) {
    const queryKey = pagesGetSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<PagesGet["data"], PagesGet["error"]>({
                method: "get",
                url: `/api/pages/${id}`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @link /api/pages/:id
 */
export function usePagesGetSuspense<TData = PagesGet["response"], TQueryKey extends QueryKey = PagesGetSuspenseQueryKey>(id: PagesControllerGetPathParams["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<PagesGet["response"], PagesGet["error"], TData, TQueryKey>>;
    client?: PagesGet["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, PagesGet["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? pagesGetSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...pagesGetSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, PagesGet["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}