import {createProxyMiddleware} from 'http-proxy-middleware';
import type {NextApiRequest, NextApiResponse} from "next";

//@ts-ignore
const proxyMiddleware = createProxyMiddleware<NextApiRequest, NextApiResponse>({
    target: 'https://rnfsj-89-110-65-173.a.free.pinggy.link',
    changeOrigin: true,

    pathRewrite: {
        '^/api/': '/api/',
    },
    onProxyReq: (proxyReq, req: NextApiRequest, res: NextApiResponse) => {
        const token = req.cookies['token']
        proxyReq.setHeader('X-Pinggy-No-Screen', `true`)
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