import client from "./../../tanstack-query-client";
import type { ResponseConfig } from "./../../tanstack-query-client";
import type { UsersControllerRegistrationMutationRequest, UsersControllerRegistrationMutationResponse } from "../models/UsersControllerRegistration";

 /**
 * @link /api/users/registration
 */
export async function usersRegistration(data: UsersControllerRegistrationMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<UsersControllerRegistrationMutationResponse>["data"]> {
    const res = await client<UsersControllerRegistrationMutationResponse, UsersControllerRegistrationMutationRequest>({
        method: "post",
        url: `/api/users/registration`,
        data,
        ...options
    });
    return res.data;
}