import client from "./../../tanstack-query-client";
import type { ResponseConfig } from "./../../tanstack-query-client";
import type { PageElementsControllerCreateMutationRequest, PageElementsControllerCreateMutationResponse, PageElementsControllerCreatePathParams } from "../models/PageElementsControllerCreate";

 /**
 * @link /api/pages/:pageId/elements
 */
export async function pageElementsCreate(pageId: PageElementsControllerCreatePathParams["pageId"], data: PageElementsControllerCreateMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PageElementsControllerCreateMutationResponse>["data"]> {
    const res = await client<PageElementsControllerCreateMutationResponse, PageElementsControllerCreateMutationRequest>({
        method: "post",
        url: `/api/pages/${pageId}/elements`,
        data,
        ...options
    });
    return res.data;
}