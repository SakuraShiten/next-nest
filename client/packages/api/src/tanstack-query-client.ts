import ky, {HTTPError} from "ky";
import type {Options} from "ky";

export type ResponseConfig<TData = unknown> = {
    data: TData;
    status: number;
    statusText: string;
    headers?: Headers;
};

export type RequestConfig<TData = unknown> = {
    url?: string;
    baseUrl?: string;
    method: "get" | "put" | "patch" | "post" | "delete";
    params?: Options['searchParams'];
    data?: TData;
    responseType?:
        | "arraybuffer"
        | "blob"
        | "document"
        | "json"
        | "text"
        | "stream";
    signal?: AbortSignal;
    headers?: Options["headers"];
    cache?: Options["cache"];
    next?: Options["next"];
};

export const kyClient = async <
    TData,
    TError = { statusCode: number; message: string },
    TVariables = unknown,
>(config: RequestConfig<TVariables>): Promise<ResponseConfig<TData>> => {
    try {
        const res = await ky((config?.baseUrl || '') + config.url!, {
            method: config.method,
            searchParams: config.method === 'get' && config.params ? config.params : {},
            json: (config.method === 'post' || config.method === 'put')
            && config.data ? config.data : undefined,
            headers: config.headers,
            signal: config.signal,
            cache: config?.cache || 'no-store',
            next: config.next,
        })
        const data: TData = await res.json()
        return {
            data,
            status: res.status,
            statusText: res.statusText,
            headers: res.headers
        }
    } catch (e) {
        if (e instanceof HTTPError) {
            const errorResponse: TError = await e.response.json()
            throw errorResponse
        }
        console.log(e)
        throw new Error('Произошла ошибка')
    }
}

export default kyClient