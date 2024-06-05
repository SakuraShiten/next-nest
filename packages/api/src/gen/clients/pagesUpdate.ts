import client from "./../../tanstack-query-client";
import type { ResponseConfig } from "./../../tanstack-query-client";
import type { PagesControllerUpdateMutationRequest, PagesControllerUpdateMutationResponse, PagesControllerUpdatePathParams } from "../models/PagesControllerUpdate";

 /**
 * @link /api/pages/:pageId
 */
export async function pagesUpdate(pageId: PagesControllerUpdatePathParams["pageId"], data: PagesControllerUpdateMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PagesControllerUpdateMutationResponse>["data"]> {
    const res = await client<PagesControllerUpdateMutationResponse, PagesControllerUpdateMutationRequest>({
        method: "put",
        url: `/api/pages/${pageId}`,
        data,
        ...options
    });
    return res.data;
}