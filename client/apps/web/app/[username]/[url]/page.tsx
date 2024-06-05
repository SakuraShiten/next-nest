import {pagesFindOne} from "@repo/api";
import {notFound} from "next/navigation";
import UIFlexCol from "../../shared/ui/flex/UIFlexCol";

type PageProps = { params: { username: string; url: string } }

const getData = async ({params}: PageProps) => {
    try {
        return await pagesFindOne(params.username, params.url, {
            baseUrl: 'http://localhost:5000'
        })
    } catch (e) {
        return notFound()
    }
}

export async function generateMetadata({params}: PageProps) {
    const data = await getData({params})
    return {
        title: data.page.title
    }
}

export default async function Page({params}: PageProps) {
    const data = await getData({params})
    return (
        <UIFlexCol>
            <p>{JSON.stringify(data)}</p>
        </UIFlexCol>
    )
}

