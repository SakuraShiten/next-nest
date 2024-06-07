import PageForm from "@/features/page/ui/PageForm";
import PageList from "@/features/page/ui/PageList";
import type {Metadata} from "next";
import UIContainer from "@/features/shared/ui/flex/UIContainer";

export const metadata: Metadata = {
    title: 'Мои страницы'
}

export default function Page() {
    return <UIContainer>
        <PageForm/>
        <PageList/>
    </UIContainer>
}
