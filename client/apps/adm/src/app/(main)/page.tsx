import UIFlexCol from "../../features/shared/ui/flex/UIFlexCol";
import PageForm from "../../features/main/ui/PageForm";
import PageList from "../../features/main/ui/PageList";

export default function Page() {
    return <UIFlexCol>
        <PageForm/>
        <PageList/>
    </UIFlexCol>
}
