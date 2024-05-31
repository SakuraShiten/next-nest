import client from "./../../tanstack-query-client";
import type { ResponseConfig } from "./../../tanstack-query-client";
import type { PagesControllerFindAllQueryResponse, PagesControllerFindAllQueryParams } from "../models/PagesControllerFindAll";

 /**
 * @link /api/pages
 */
export async function pagesFindAll(params?: PagesControllerFindAllQueryParams, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PagesControllerFindAllQueryResponse>["data"]> {
    const res = await client<PagesControllerFindAllQueryResponse>({
        method: "get",
        url: `/api/pages`,
        params,
        ...options
    });
    return res.data;
}