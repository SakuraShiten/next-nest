import {pagesFindOne} from "@repo/api";
import {fetchBase} from "../../shared/components/widgets/fetchBase";

type PageProps = { params: { username: string, url: string } }

const getData = async ({params: {username, url}}: PageProps) => {
    try {
        const a = [username, url]

        const data1 = await pagesFindOne([...a],{
            baseUrl: 'http://localhost:5000'
        })
        // console.log(data)
        const data = await fetchBase(pagesFindOne,{

        })
    } catch (e) {

    }
}

async function Page({params}: PageProps) {
    const data = await getData({params})
    return (
        <div>{
            JSON.stringify(params)
        }</div>
    )
}

export default Page