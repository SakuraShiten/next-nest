import client from "./../../tanstack-query-client";
import { useMutation } from "@tanstack/react-query";
import type { PageElementsControllerDeleteMutationResponse, PageElementsControllerDeletePathParams, PageElementsControllerDelete400 } from "../models/PageElementsControllerDelete";
import type { UseMutationOptions } from "@tanstack/react-query";

 type PageElementsDeleteClient = typeof client<PageElementsControllerDeleteMutationResponse, PageElementsControllerDelete400, never>;
type PageElementsDelete = {
    data: PageElementsControllerDeleteMutationResponse;
    error: PageElementsControllerDelete400;
    request: never;
    pathParams: PageElementsControllerDeletePathParams;
    queryParams: never;
    headerParams: never;
    response: PageElementsControllerDeleteMutationResponse;
    client: {
        parameters: Partial<Parameters<PageElementsDeleteClient>[0]>;
        return: Awaited<ReturnType<PageElementsDeleteClient>>;
    };
};
/**
 * @link /api/pages/:pageId/elements/:elementId
 */
export function usePageElementsDelete(pageId: PageElementsControllerDeletePathParams["pageId"], elementId: PageElementsControllerDeletePathParams["elementId"], options: {
    mutation?: UseMutationOptions<PageElementsDelete["response"], PageElementsDelete["error"], PageElementsDelete["request"]>;
    client?: PageElementsDelete["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<PageElementsDelete["data"], PageElementsDelete["error"], PageElementsDelete["request"]>({
                method: "delete",
                url: `/api/pages/${pageId}/elements/${elementId}`,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}