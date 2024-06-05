import {revalidateTag} from "next/cache";

export async function POST(req: Request) {
    const {secret, tag} = await req.json()
    if (secret === 'zxc' && !!tag) {
        revalidateTag(tag)
        return Response.json(true)
    }
    return Response.json(false)
}