import client from "./../../tanstack-query-client";
import type { ResponseConfig } from "./../../tanstack-query-client";
import type { UsersControllerVerifyQueryResponse, UsersControllerVerifyQueryParams } from "../models/UsersControllerVerify";

 /**
 * @link /api/users/verify
 */
export async function usersVerify(params?: UsersControllerVerifyQueryParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<UsersControllerVerifyQueryResponse>["data"]> {
    const res = await client<UsersControllerVerifyQueryResponse>({
        method: "get",
        url: `/api/users/verify`,
        params,
        ...options
    });
    return res.data;
}