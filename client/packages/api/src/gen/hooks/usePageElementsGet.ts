import client from "./../../tanstack-query-client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { PageElementsControllerGetQueryResponse, PageElementsControllerGetPathParams, PageElementsControllerGet400 } from "../models/PageElementsControllerGet";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type PageElementsGetClient = typeof client<PageElementsControllerGetQueryResponse, PageElementsControllerGet400, never>;
type PageElementsGet = {
    data: PageElementsControllerGetQueryResponse;
    error: PageElementsControllerGet400;
    request: never;
    pathParams: PageElementsControllerGetPathParams;
    queryParams: never;
    headerParams: never;
    response: PageElementsControllerGetQueryResponse;
    client: {
        parameters: Partial<Parameters<PageElementsGetClient>[0]>;
        return: Awaited<ReturnType<PageElementsGetClient>>;
    };
};
export const pageElementsGetQueryKey = (pageId: PageElementsControllerGetPathParams["pageId"]) => [{ url: "/api/pages/:pageId/elements", params: { pageId: pageId } }] as const;
export type PageElementsGetQueryKey = ReturnType<typeof pageElementsGetQueryKey>;
export function pageElementsGetQueryOptions(pageId: PageElementsControllerGetPathParams["pageId"], options: PageElementsGet["client"]["parameters"] = {}) {
    const queryKey = pageElementsGetQueryKey(pageId);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<PageElementsGet["data"], PageElementsGet["error"]>({
                method: "get",
                url: `/api/pages/${pageId}/elements`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @link /api/pages/:pageId/elements
 */
export function usePageElementsGet<TData = PageElementsGet["response"], TQueryData = PageElementsGet["response"], TQueryKey extends QueryKey = PageElementsGetQueryKey>(pageId: PageElementsControllerGetPathParams["pageId"], options: {
    query?: Partial<QueryObserverOptions<PageElementsGet["response"], PageElementsGet["error"], TData, TQueryData, TQueryKey>>;
    client?: PageElementsGet["client"]["parameters"];
} = {}): UseQueryResult<TData, PageElementsGet["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? pageElementsGetQueryKey(pageId);
    const query = useQuery({
        ...pageElementsGetQueryOptions(pageId, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, PageElementsGet["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const pageElementsGetSuspenseQueryKey = (pageId: PageElementsControllerGetPathParams["pageId"]) => [{ url: "/api/pages/:pageId/elements", params: { pageId: pageId } }] as const;
export type PageElementsGetSuspenseQueryKey = ReturnType<typeof pageElementsGetSuspenseQueryKey>;
export function pageElementsGetSuspenseQueryOptions(pageId: PageElementsControllerGetPathParams["pageId"], options: PageElementsGet["client"]["parameters"] = {}) {
    const queryKey = pageElementsGetSuspenseQueryKey(pageId);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<PageElementsGet["data"], PageElementsGet["error"]>({
                method: "get",
                url: `/api/pages/${pageId}/elements`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @link /api/pages/:pageId/elements
 */
export function usePageElementsGetSuspense<TData = PageElementsGet["response"], TQueryKey extends QueryKey = PageElementsGetSuspenseQueryKey>(pageId: PageElementsControllerGetPathParams["pageId"], options: {
    query?: Partial<UseSuspenseQueryOptions<PageElementsGet["response"], PageElementsGet["error"], TData, TQueryKey>>;
    client?: PageElementsGet["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, PageElementsGet["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? pageElementsGetSuspenseQueryKey(pageId);
    const query = useSuspenseQuery({
        ...pageElementsGetSuspenseQueryOptions(pageId, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, PageElementsGet["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}