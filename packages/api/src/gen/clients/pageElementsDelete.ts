import client from "./../../tanstack-query-client";
import type { ResponseConfig } from "./../../tanstack-query-client";
import type { PageElementsControllerDeleteMutationResponse, PageElementsControllerDeletePathParams } from "../models/PageElementsControllerDelete";

 /**
 * @link /api/pages/:pageId/elements/:elementId
 */
export async function pageElementsDelete(pageId: PageElementsControllerDeletePathParams["pageId"], elementId: PageElementsControllerDeletePathParams["elementId"], options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PageElementsControllerDeleteMutationResponse>["data"]> {
    const res = await client<PageElementsControllerDeleteMutationResponse>({
        method: "delete",
        url: `/api/pages/${pageId}/elements/${elementId}`,
        ...options
    });
    return res.data;
}