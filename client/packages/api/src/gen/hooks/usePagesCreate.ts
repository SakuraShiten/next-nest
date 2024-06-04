import client from "./../../tanstack-query-client";
import { useMutation } from "@tanstack/react-query";
import type { PagesControllerCreateMutationRequest, PagesControllerCreateMutationResponse, PagesControllerCreate400 } from "../models/PagesControllerCreate";
import type { UseMutationOptions } from "@tanstack/react-query";

 type PagesCreateClient = typeof client<PagesControllerCreateMutationResponse, PagesControllerCreate400, PagesControllerCreateMutationRequest>;
type PagesCreate = {
    data: PagesControllerCreateMutationResponse;
    error: PagesControllerCreate400;
    request: PagesControllerCreateMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: PagesControllerCreateMutationResponse;
    client: {
        parameters: Partial<Parameters<PagesCreateClient>[0]>;
        return: Awaited<ReturnType<PagesCreateClient>>;
    };
};
/**
 * @link /api/pages
 */
export function usePagesCreate(options: {
    mutation?: UseMutationOptions<PagesCreate["response"], PagesCreate["error"], PagesCreate["request"]>;
    client?: PagesCreate["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<PagesCreate["data"], PagesCreate["error"], PagesCreate["request"]>({
                method: "post",
                url: `/api/pages`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}