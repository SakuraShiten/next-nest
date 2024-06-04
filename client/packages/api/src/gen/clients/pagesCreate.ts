import client from "./../../tanstack-query-client";
import type { ResponseConfig } from "./../../tanstack-query-client";
import type { PagesControllerCreateMutationRequest, PagesControllerCreateMutationResponse } from "../models/PagesControllerCreate";

 /**
 * @link /api/pages
 */
export async function pagesCreate(data: PagesControllerCreateMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PagesControllerCreateMutationResponse>["data"]> {
    const res = await client<PagesControllerCreateMutationResponse, PagesControllerCreateMutationRequest>({
        method: "post",
        url: `/api/pages`,
        data,
        ...options
    });
    return res.data;
}