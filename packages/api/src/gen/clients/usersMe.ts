import client from "./../../tanstack-query-client";
import type { ResponseConfig } from "./../../tanstack-query-client";
import type { UsersControllerMeQueryResponse } from "../models/UsersControllerMe";

 /**
 * @link /api/users/me
 */
export async function usersMe(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<UsersControllerMeQueryResponse>["data"]> {
    const res = await client<UsersControllerMeQueryResponse>({
        method: "get",
        url: `/api/users/me`,
        ...options
    });
    return res.data;
}