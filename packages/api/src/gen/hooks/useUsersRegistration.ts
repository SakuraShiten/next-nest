import client from "./../../tanstack-query-client";
import { useMutation } from "@tanstack/react-query";
import type { UsersControllerRegistrationMutationRequest, UsersControllerRegistrationMutationResponse, UsersControllerRegistration400 } from "../models/UsersControllerRegistration";
import type { UseMutationOptions } from "@tanstack/react-query";

 type UsersRegistrationClient = typeof client<UsersControllerRegistrationMutationResponse, UsersControllerRegistration400, UsersControllerRegistrationMutationRequest>;
type UsersRegistration = {
    data: UsersControllerRegistrationMutationResponse;
    error: UsersControllerRegistration400;
    request: UsersControllerRegistrationMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: UsersControllerRegistrationMutationResponse;
    client: {
        parameters: Partial<Parameters<UsersRegistrationClient>[0]>;
        return: Awaited<ReturnType<UsersRegistrationClient>>;
    };
};
/**
 * @link /api/users/registration
 */
export function useUsersRegistration(options: {
    mutation?: UseMutationOptions<UsersRegistration["response"], UsersRegistration["error"], UsersRegistration["request"]>;
    client?: UsersRegistration["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<UsersRegistration["data"], UsersRegistration["error"], UsersRegistration["request"]>({
                method: "post",
                url: `/api/users/registration`,
                data,
                ...clientOptions
            });
            return res.data;
        },
        ...mutationOptions
    });
}