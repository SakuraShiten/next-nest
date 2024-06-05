import {createProxyMiddleware} from 'http-proxy-middleware';
import type {NextApiRequest, NextApiResponse} from "next";

//@ts-ignore
const proxyMiddleware = createProxyMiddleware<NextApiRequest, NextApiResponse>({
    target: 'http://localhost:5000',
    changeOrigin: true,

    logLevel: 'debug',
    onProxyReq: (proxyReq, req: NextApiRequest, res: NextApiResponse) => {
        const token = req.cookies['token']
        if (token) {
            proxyReq.setHeader('Authorization', `${token}`)
        }
    },
});


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    // @ts-ignore
    proxyMiddleware(req, res, (result: unknown) => {
        if (result instanceof Error) {
            throw result;
        }
    });
}

export const config = {
    api: {
        externalResolver: true,
        bodyParser: false,
    },
};