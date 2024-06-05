import client from "./../../tanstack-query-client";
import type { ResponseConfig } from "./../../tanstack-query-client";
import type { PageElementsControllerUpdatePositionMutationRequest, PageElementsControllerUpdatePositionMutationResponse, PageElementsControllerUpdatePositionPathParams } from "../models/PageElementsControllerUpdatePosition";

 /**
 * @link /api/pages/:pageId/elements/positions
 */
export async function pageElementsUpdatePosition(pageId: PageElementsControllerUpdatePositionPathParams["pageId"], data?: PageElementsControllerUpdatePositionMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PageElementsControllerUpdatePositionMutationResponse>["data"]> {
    const res = await client<PageElementsControllerUpdatePositionMutationResponse, PageElementsControllerUpdatePositionMutationRequest>({
        method: "put",
        url: `/api/pages/${pageId}/elements/positions`,
        data,
        ...options
    });
    return res.data;
}