import {createProxyMiddleware} from 'http-proxy-middleware';
import type {NextApiRequest, NextApiResponse} from "next";

//@ts-ignore
const proxyMiddleware = createProxyMiddleware<NextApiRequest, NextApiResponse>({
    target: 'https://7a3a-89-110-65-173.ngrok-free.app',
    changeOrigin: true,
    pathRewrite: {
        '^/api/': '/api/',
    },
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