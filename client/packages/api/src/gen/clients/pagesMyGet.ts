import client from "./../../tanstack-query-client";
import type { ResponseConfig } from "./../../tanstack-query-client";
import type { PagesControllerMyGetQueryResponse } from "../models/PagesControllerMyGet";

 /**
 * @link /api/pages/my
 */
export async function pagesMyGet(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PagesControllerMyGetQueryResponse>["data"]> {
    const res = await client<PagesControllerMyGetQueryResponse>({
        method: "get",
        url: `/api/pages/my`,
        ...options
    });
    return res.data;
}