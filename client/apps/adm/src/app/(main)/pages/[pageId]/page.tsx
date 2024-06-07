import PageItem from "@/features/page/ui/PageItem";
import PageElementList from "@/features/page/element/ui/PageElementList";
import PageElementTextCreate from "@/features/page/element/ui/PageElementTextCreate";
import PageElementHeaderCreate from "@/features/page/element/ui/PageElementHeaderCreate";
import UIFlexRow from "@/features/shared/ui/flex/UIFlexRow";
import UIContainer from "@/features/shared/ui/flex/UIContainer";

export const generateMetadata = ({params: {pageId}}: { params: { pageId: string } }) => ({
    title: `Страница ${pageId}`
})

export default function Page({params: {pageId}}: { params: { pageId: string } }) {
    const pageIdNumber = Number(pageId)

    return <UIContainer>
        <PageItem id={pageIdNumber}/>

        <UIFlexRow>
            <PageElementTextCreate pageId={pageIdNumber}/>
            <PageElementHeaderCreate pageId={pageIdNumber}/>
        </UIFlexRow>

        <PageElementList pageId={pageIdNumber}/>
    </UIContainer>
}
