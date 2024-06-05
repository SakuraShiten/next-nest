import client from "./../../tanstack-query-client";
import type { ResponseConfig } from "./../../tanstack-query-client";
import type { PagesControllerRemoveMutationResponse, PagesControllerRemovePathParams } from "../models/PagesControllerRemove";

 /**
 * @link /api/pages/:pageId
 */
export async function pagesRemove(pageId: PagesControllerRemovePathParams["pageId"], options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PagesControllerRemoveMutationResponse>["data"]> {
    const res = await client<PagesControllerRemoveMutationResponse>({
        method: "delete",
        url: `/api/pages/${pageId}`,
        ...options
    });
    return res.data;
}