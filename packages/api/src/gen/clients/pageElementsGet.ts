import client from "./../../tanstack-query-client";
import type { ResponseConfig } from "./../../tanstack-query-client";
import type { PageElementsControllerGetQueryResponse, PageElementsControllerGetPathParams } from "../models/PageElementsControllerGet";

 /**
 * @link /api/pages/:pageId/elements
 */
export async function pageElementsGet(pageId: PageElementsControllerGetPathParams["pageId"], options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PageElementsControllerGetQueryResponse>["data"]> {
    const res = await client<PageElementsControllerGetQueryResponse>({
        method: "get",
        url: `/api/pages/${pageId}/elements`,
        ...options
    });
    return res.data;
}