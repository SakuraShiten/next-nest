import React from 'react';
import {PageElementsControllerGetQueryResponse} from "@repo/api";
import PageElementDelete from "@/features/page/element/ui/PageElementDelete";
import {pageElementTypes} from "@/features/page/element/domain/ElementDomain";
import UIFlexCol from "@/features/shared/ui/flex/UIFlexCol";
import UITextLight from "@/features/shared/ui/text/UITextLight";
import UIFlexRow from "@/features/shared/ui/flex/UIFlexRow";
import {ISOToDate} from "@/features/shared/lib/date/ISOToDate";

type ElementCardProps = {
    element: PageElementsControllerGetQueryResponse[0],
    pageId: number
}

export default function PageElementItem({element, pageId}: ElementCardProps) {
    return <UIFlexCol className={'gap-1 p-0 items-start'}>
        <UIFlexRow className={'p-0 justify-between'}>
            <UITextLight>{pageElementTypes[element.type]}</UITextLight>
            <UITextLight>{ISOToDate(element.createAt)}</UITextLight>
        </UIFlexRow>

        {element?.text?.text ? <p>{element.text.text}</p> : null}
        {element?.header?.header ? <p>{element.header.header}</p> : null}

        <PageElementDelete pageId={pageId} elementId={element.id}/>
    </UIFlexCol>
}

