import client from "./../../tanstack-query-client";
import { useMutation } from "@tanstack/react-query";
import type { PagesControllerRemoveMutationResponse, PagesControllerRemovePathParams, PagesControllerRemove400 } from "../models/PagesControllerRemove";
import type { UseMutationOptions } from "@tanstack/react-query";

 type PagesRemoveClient = typeof client<PagesControllerRemoveMutationResponse, PagesControllerRemove400, never>;
type PagesRemove = {
    data: PagesControllerRemoveMutationResponse;
    error: PagesControllerRemove400;
    request: never;
    pathParams: PagesControllerRemovePathParams;
    queryParams: never;
    headerParams: never;
    response: PagesControllerRemoveMutationResponse;
    client: {
        parameters: Partial<Parameters<PagesRemoveClient>[0]>;
        return: Awaited<ReturnType<PagesRemoveClient>>;
    };
};
/**
 * @link /api/pages/:pageId
 */
export function usePagesRemove(pageId: PagesControllerRemovePathParams["pageId"], options: {
    mutation?: UseMutationOptions<PagesRemove["response"], PagesRemove["error"], PagesRemove["request"]>;
    client?: PagesRemove["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<PagesRemove["data"], PagesRemove["error"], PagesRemove["request"]>({
                method: "delete",
                url: `/api/pages/${pageId}`,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}