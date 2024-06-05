import client from "./../../tanstack-query-client";
import { useMutation } from "@tanstack/react-query";
import type { PageElementsControllerUpdatePositionMutationRequest, PageElementsControllerUpdatePositionMutationResponse, PageElementsControllerUpdatePositionPathParams } from "../models/PageElementsControllerUpdatePosition";
import type { UseMutationOptions } from "@tanstack/react-query";

 type PageElementsUpdatePositionClient = typeof client<PageElementsControllerUpdatePositionMutationResponse, never, PageElementsControllerUpdatePositionMutationRequest>;
type PageElementsUpdatePosition = {
    data: PageElementsControllerUpdatePositionMutationResponse;
    error: never;
    request: PageElementsControllerUpdatePositionMutationRequest;
    pathParams: PageElementsControllerUpdatePositionPathParams;
    queryParams: never;
    headerParams: never;
    response: PageElementsControllerUpdatePositionMutationResponse;
    client: {
        parameters: Partial<Parameters<PageElementsUpdatePositionClient>[0]>;
        return: Awaited<ReturnType<PageElementsUpdatePositionClient>>;
    };
};
/**
 * @link /api/pages/:pageId/elements/positions
 */
export function usePageElementsUpdatePosition(pageId: PageElementsControllerUpdatePositionPathParams["pageId"], options: {
    mutation?: UseMutationOptions<PageElementsUpdatePosition["response"], PageElementsUpdatePosition["error"], PageElementsUpdatePosition["request"]>;
    client?: PageElementsUpdatePosition["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<PageElementsUpdatePosition["data"], PageElementsUpdatePosition["error"], PageElementsUpdatePosition["request"]>({
                method: "put",
                url: `/api/pages/${pageId}/elements/positions`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}