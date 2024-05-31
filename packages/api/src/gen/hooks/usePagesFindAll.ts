import client from "./../../tanstack-query-client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { PagesControllerFindAllQueryResponse, PagesControllerFindAllQueryParams, PagesControllerFindAll400 } from "../models/PagesControllerFindAll";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type PagesFindAllClient = typeof client<PagesControllerFindAllQueryResponse, PagesControllerFindAll400, never>;
type PagesFindAll = {
    data: PagesControllerFindAllQueryResponse;
    error: PagesControllerFindAll400;
    request: never;
    pathParams: never;
    queryParams: PagesControllerFindAllQueryParams;
    headerParams: never;
    response: PagesControllerFindAllQueryResponse;
    client: {
        parameters: Partial<Parameters<PagesFindAllClient>[0]>;
        return: Awaited<ReturnType<PagesFindAllClient>>;
    };
};
export const pagesFindAllQueryKey = (params?: PagesFindAll["queryParams"]) => [{ url: "/api/pages" }, ...(params ? [params] : [])] as const;
export type PagesFindAllQueryKey = ReturnType<typeof pagesFindAllQueryKey>;
export function pagesFindAllQueryOptions(params?: PagesFindAll["queryParams"], options: PagesFindAll["client"]["parameters"] = {}) {
    const queryKey = pagesFindAllQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<PagesFindAll["data"], PagesFindAll["error"]>({
                method: "get",
                url: `/api/pages`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @link /api/pages
 */
export function usePagesFindAll<TData = PagesFindAll["response"], TQueryData = PagesFindAll["response"], TQueryKey extends QueryKey = PagesFindAllQueryKey>(params?: PagesFindAll["queryParams"], options: {
    query?: Partial<QueryObserverOptions<PagesFindAll["response"], PagesFindAll["error"], TData, TQueryData, TQueryKey>>;
    client?: PagesFindAll["client"]["parameters"];
} = {}): UseQueryResult<TData, PagesFindAll["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? pagesFindAllQueryKey(params);
    const query = useQuery({
        ...pagesFindAllQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, PagesFindAll["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const pagesFindAllSuspenseQueryKey = (params?: PagesFindAll["queryParams"]) => [{ url: "/api/pages" }, ...(params ? [params] : [])] as const;
export type PagesFindAllSuspenseQueryKey = ReturnType<typeof pagesFindAllSuspenseQueryKey>;
export function pagesFindAllSuspenseQueryOptions(params?: PagesFindAll["queryParams"], options: PagesFindAll["client"]["parameters"] = {}) {
    const queryKey = pagesFindAllSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<PagesFindAll["data"], PagesFindAll["error"]>({
                method: "get",
                url: `/api/pages`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @link /api/pages
 */
export function usePagesFindAllSuspense<TData = PagesFindAll["response"], TQueryKey extends QueryKey = PagesFindAllSuspenseQueryKey>(params?: PagesFindAll["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<PagesFindAll["response"], PagesFindAll["error"], TData, TQueryKey>>;
    client?: PagesFindAll["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, PagesFindAll["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? pagesFindAllSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...pagesFindAllSuspenseQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, PagesFindAll["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}