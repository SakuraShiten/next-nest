import client from "./../../tanstack-query-client";
import { useMutation } from "@tanstack/react-query";
import type { UsersControllerAuthMutationRequest, UsersControllerAuthMutationResponse, UsersControllerAuth400 } from "../models/UsersControllerAuth";
import type { UseMutationOptions } from "@tanstack/react-query";

 type UsersAuthClient = typeof client<UsersControllerAuthMutationResponse, UsersControllerAuth400, UsersControllerAuthMutationRequest>;
type UsersAuth = {
    data: UsersControllerAuthMutationResponse;
    error: UsersControllerAuth400;
    request: UsersControllerAuthMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: UsersControllerAuthMutationResponse;
    client: {
        parameters: Partial<Parameters<UsersAuthClient>[0]>;
        return: Awaited<ReturnType<UsersAuthClient>>;
    };
};
/**
 * @link /api/users/auth
 */
export function useUsersAuth(options: {
    mutation?: UseMutationOptions<UsersAuth["response"], UsersAuth["error"], UsersAuth["request"]>;
    client?: UsersAuth["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<UsersAuth["data"], UsersAuth["error"], UsersAuth["request"]>({
                method: "post",
                url: `/api/users/auth`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}