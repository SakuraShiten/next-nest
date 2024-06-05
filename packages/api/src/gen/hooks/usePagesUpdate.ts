import client from "./../../tanstack-query-client";
import { useMutation } from "@tanstack/react-query";
import type { PagesControllerUpdateMutationRequest, PagesControllerUpdateMutationResponse, PagesControllerUpdatePathParams, PagesControllerUpdate400 } from "../models/PagesControllerUpdate";
import type { UseMutationOptions } from "@tanstack/react-query";

 type PagesUpdateClient = typeof client<PagesControllerUpdateMutationResponse, PagesControllerUpdate400, PagesControllerUpdateMutationRequest>;
type PagesUpdate = {
    data: PagesControllerUpdateMutationResponse;
    error: PagesControllerUpdate400;
    request: PagesControllerUpdateMutationRequest;
    pathParams: PagesControllerUpdatePathParams;
    queryParams: never;
    headerParams: never;
    response: PagesControllerUpdateMutationResponse;
    client: {
        parameters: Partial<Parameters<PagesUpdateClient>[0]>;
        return: Awaited<ReturnType<PagesUpdateClient>>;
    };
};
/**
 * @link /api/pages/:pageId
 */
export function usePagesUpdate(pageId: PagesControllerUpdatePathParams["pageId"], options: {
    mutation?: UseMutationOptions<PagesUpdate["response"], PagesUpdate["error"], PagesUpdate["request"]>;
    client?: PagesUpdate["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<PagesUpdate["data"], PagesUpdate["error"], PagesUpdate["request"]>({
                method: "put",
                url: `/api/pages/${pageId}`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}