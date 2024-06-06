import React from 'react';
import {PageElementsControllerGetQueryResponse} from "@repo/api";
import PageElementDelete from "@/features/page/element/ui/PageElementDelete";

type ElementCardProps = {
    element: PageElementsControllerGetQueryResponse[0],
    pageId: number
}

export default function PageElementItem({element, pageId}: ElementCardProps) {
    return <div
        className={'p-4 bg-white border-2 rounded-xl m-4'}
    >
        <p>{element.id}</p>
        <p>{element.type}</p>
        <p>{element.position}</p>
        <p>{element?.text?.text}</p>
        <p>{element?.header?.header}</p>
        <p>{element.createAt}</p>

        <PageElementDelete
            pageId={pageId}
            elementId={element.id}
        />
    </div>

}

