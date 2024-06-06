import UIFlexCol from "@/features/shared/ui/flex/UIFlexCol";
import PageForm from "@/features/page/ui/PageForm";
import PageList from "@/features/page/ui/PageList";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Мои страницы'
}

export default function Page() {
    return <UIFlexCol>
        <PageForm/>
        <PageList/>
    </UIFlexCol>
}
