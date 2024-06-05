import client from "./../../tanstack-query-client";
import type { ResponseConfig } from "./../../tanstack-query-client";
import type { PagesControllerFindOneQueryResponse, PagesControllerFindOnePathParams } from "../models/PagesControllerFindOne";

 /**
 * @link /api/pages/:userLogin/:pageUrl
 */
export async function pagesFindOne(userLogin: PagesControllerFindOnePathParams["userLogin"], pageUrl: PagesControllerFindOnePathParams["pageUrl"], options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PagesControllerFindOneQueryResponse>["data"]> {
    const res = await client<PagesControllerFindOneQueryResponse>({
        method: "get",
        url: `/api/pages/${userLogin}/${pageUrl}`,
        ...options
    });
    return res.data;
}