import client from "./../../tanstack-query-client";
import type { ResponseConfig } from "./../../tanstack-query-client";
import type { UsersControllerAuthMutationRequest, UsersControllerAuthMutationResponse } from "../models/UsersControllerAuth";

 /**
 * @link /api/users/auth
 */
export async function usersAuth(data: UsersControllerAuthMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<UsersControllerAuthMutationResponse>["data"]> {
    const res = await client<UsersControllerAuthMutationResponse, UsersControllerAuthMutationRequest>({
        method: "post",
        url: `/api/users/auth`,
        data,
        ...options
    });
    return res.data;
}