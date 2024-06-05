import client from "./../../tanstack-query-client";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { PagesControllerFindOneQueryResponse, PagesControllerFindOnePathParams, PagesControllerFindOne400 } from "../models/PagesControllerFindOne";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type PagesFindOneClient = typeof client<PagesControllerFindOneQueryResponse, PagesControllerFindOne400, never>;
type PagesFindOne = {
    data: PagesControllerFindOneQueryResponse;
    error: PagesControllerFindOne400;
    request: never;
    pathParams: PagesControllerFindOnePathParams;
    queryParams: never;
    headerParams: never;
    response: PagesControllerFindOneQueryResponse;
    client: {
        parameters: Partial<Parameters<PagesFindOneClient>[0]>;
        return: Awaited<ReturnType<PagesFindOneClient>>;
    };
};
export const pagesFindOneQueryKey = (userLogin: PagesControllerFindOnePathParams["userLogin"], pageUrl: PagesControllerFindOnePathParams["pageUrl"]) => [{ url: "/api/pages/:userLogin/:pageUrl", params: { userLogin: userLogin, pageUrl: pageUrl } }] as const;
export type PagesFindOneQueryKey = ReturnType<typeof pagesFindOneQueryKey>;
export function pagesFindOneQueryOptions(userLogin: PagesControllerFindOnePathParams["userLogin"], pageUrl: PagesControllerFindOnePathParams["pageUrl"], options: PagesFindOne["client"]["parameters"] = {}) {
    const queryKey = pagesFindOneQueryKey(userLogin, pageUrl);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<PagesFindOne["data"], PagesFindOne["error"]>({
                method: "get",
                url: `/api/pages/${userLogin}/${pageUrl}`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @link /api/pages/:userLogin/:pageUrl
 */
export function usePagesFindOne<TData = PagesFindOne["response"], TQueryData = PagesFindOne["response"], TQueryKey extends QueryKey = PagesFindOneQueryKey>(userLogin: PagesControllerFindOnePathParams["userLogin"], pageUrl: PagesControllerFindOnePathParams["pageUrl"], options: {
    query?: Partial<QueryObserverOptions<PagesFindOne["response"], PagesFindOne["error"], TData, TQueryData, TQueryKey>>;
    client?: PagesFindOne["client"]["parameters"];
} = {}): UseQueryResult<TData, PagesFindOne["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? pagesFindOneQueryKey(userLogin, pageUrl);
    const query = useQuery({
        ...pagesFindOneQueryOptions(userLogin, pageUrl, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, PagesFindOne["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const pagesFindOneSuspenseQueryKey = (userLogin: PagesControllerFindOnePathParams["userLogin"], pageUrl: PagesControllerFindOnePathParams["pageUrl"]) => [{ url: "/api/pages/:userLogin/:pageUrl", params: { userLogin: userLogin, pageUrl: pageUrl } }] as const;
export type PagesFindOneSuspenseQueryKey = ReturnType<typeof pagesFindOneSuspenseQueryKey>;
export function pagesFindOneSuspenseQueryOptions(userLogin: PagesControllerFindOnePathParams["userLogin"], pageUrl: PagesControllerFindOnePathParams["pageUrl"], options: PagesFindOne["client"]["parameters"] = {}) {
    const queryKey = pagesFindOneSuspenseQueryKey(userLogin, pageUrl);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<PagesFindOne["data"], PagesFindOne["error"]>({
                method: "get",
                url: `/api/pages/${userLogin}/${pageUrl}`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @link /api/pages/:userLogin/:pageUrl
 */
export function usePagesFindOneSuspense<TData = PagesFindOne["response"], TQueryKey extends QueryKey = PagesFindOneSuspenseQueryKey>(userLogin: PagesControllerFindOnePathParams["userLogin"], pageUrl: PagesControllerFindOnePathParams["pageUrl"], options: {
    query?: Partial<UseSuspenseQueryOptions<PagesFindOne["response"], PagesFindOne["error"], TData, TQueryKey>>;
    client?: PagesFindOne["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, PagesFindOne["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? pagesFindOneSuspenseQueryKey(userLogin, pageUrl);
    const query = useSuspenseQuery({
        ...pagesFindOneSuspenseQueryOptions(userLogin, pageUrl, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, PagesFindOne["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}