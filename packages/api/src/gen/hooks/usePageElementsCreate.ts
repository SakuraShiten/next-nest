import client from "./../../tanstack-query-client";
import { useMutation } from "@tanstack/react-query";
import type { PageElementsControllerCreateMutationRequest, PageElementsControllerCreateMutationResponse, PageElementsControllerCreatePathParams, PageElementsControllerCreate400 } from "../models/PageElementsControllerCreate";
import type { UseMutationOptions } from "@tanstack/react-query";

 type PageElementsCreateClient = typeof client<PageElementsControllerCreateMutationResponse, PageElementsControllerCreate400, PageElementsControllerCreateMutationRequest>;
type PageElementsCreate = {
    data: PageElementsControllerCreateMutationResponse;
    error: PageElementsControllerCreate400;
    request: PageElementsControllerCreateMutationRequest;
    pathParams: PageElementsControllerCreatePathParams;
    queryParams: never;
    headerParams: never;
    response: PageElementsControllerCreateMutationResponse;
    client: {
        parameters: Partial<Parameters<PageElementsCreateClient>[0]>;
        return: Awaited<ReturnType<PageElementsCreateClient>>;
    };
};
/**
 * @link /api/pages/:pageId/elements
 */
export function usePageElementsCreate(pageId: PageElementsControllerCreatePathParams["pageId"], options: {
    mutation?: UseMutationOptions<PageElementsCreate["response"], PageElementsCreate["error"], PageElementsCreate["request"]>;
    client?: PageElementsCreate["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<PageElementsCreate["data"], PageElementsCreate["error"], PageElementsCreate["request"]>({
                method: "post",
                url: `/api/pages/${pageId}/elements`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}