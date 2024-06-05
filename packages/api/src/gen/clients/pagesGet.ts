import client from "./../../tanstack-query-client";
import type { ResponseConfig } from "./../../tanstack-query-client";
import type { PagesControllerGetQueryResponse, PagesControllerGetPathParams } from "../models/PagesControllerGet";

 /**
 * @link /api/pages/:id
 */
export async function pagesGet(id: PagesControllerGetPathParams["id"], options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PagesControllerGetQueryResponse>["data"]> {
    const res = await client<PagesControllerGetQueryResponse>({
        method: "get",
        url: `/api/pages/${id}`,
        ...options
    });
    return res.data;
}