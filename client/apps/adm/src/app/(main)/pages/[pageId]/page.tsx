import PageItem from "@/features/page/ui/PageItem";
import PageElementList from "@/features/page/element/ui/PageElementList";
import PageElementTextCreate from "@/features/page/element/ui/PageElementTextCreate";
import PageElementTextHeader from "@/features/page/element/ui/PageElementTextHeader";

export const generateMetadata = ({params: {pageId}}: { params: { pageId: string } }) => ({
    title: `Страница ${pageId}`
})

const Page = ({params: {pageId}}: { params: { pageId: string } }) => {
    const pageIdNumber = Number(pageId)

    return <>
        <PageItem id={pageIdNumber}/>

        <PageElementTextCreate pageId={pageIdNumber}/>
        <PageElementTextHeader pageId={pageIdNumber}/>

        <PageElementList pageId={pageIdNumber}/>
    </>
}

export default Page