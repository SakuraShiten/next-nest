import {notFound} from "next/navigation";
import UIFlexCol from "../shared/ui/flex/UIFlexCol";
import {pagesFindOne} from "@repo/api";
import {fetchBase} from "../shared/components/widgets/fetchBase";
import Link from "next/link";

const getData = async (slug: string) => {
    try {
        return await fetchBase(pagesFindOne, {
            params: slug
        })
    } catch (e) {
        return null
    }
}

type PageProps = { params: { slug: string[] } }

export async function generateMetadata({params: {slug}}: PageProps) {
    if (!slug[0]) return {}
    const data = await getData(slug[0])
    return {
        title: data?.title
    }
}

export default async function Page({params: {slug}}: PageProps) {
    if (!slug[0]) notFound()
    const data = await getData(slug[0])
    return (
        <UIFlexCol>
            <Link href={'/😭😭😭'}>😭😭😭</Link>
            <p>{JSON.stringify(slug)}</p>
            <p>{JSON.stringify(data)}</p>
        </UIFlexCol>
    )
}

