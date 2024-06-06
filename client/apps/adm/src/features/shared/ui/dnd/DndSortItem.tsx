import {useSortable} from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";
import React from "react";
import IconGrip from "@/features/shared/ui/icons/IconGrip";

type DndSortItemProps = {
    id: number,
    children: React.ReactNode
}

export default function DndSortItem({id, children}: DndSortItemProps) {
    const {attributes, isDragging, listeners, setNodeRef, transform, transition} = useSortable({id});

    const style = {
        transform: CSS.Transform.toString(transform),
        transition: transition,
        zIndex: isDragging ? 1 : 'auto',
    }

    return <div
        className={'relative gap-3 bg-white rounded-xl border p-3 flex flex-row justify-between'}
        style={style}
        ref={setNodeRef}
        {...attributes}
        {...listeners}
    >
        {children}

        <div className={'flex-shrink-0 flex items-center'}>
            <IconGrip className={'w-10 h-10 text-gray-700'}/>
        </div>
    </div>
}