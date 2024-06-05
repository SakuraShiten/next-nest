import {useSortable} from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";
import React from "react";

type DndSortItemProps = {
    id: number,
    children: React.ReactNode
}

function DndSortItem({id, children}: DndSortItemProps) {
    const {attributes, isDragging, listeners, setNodeRef, transform, transition} = useSortable({id});

    const style = {
        transform: CSS.Transform.toString(transform),
        transition: transition,
        zIndex: isDragging ? 1 : 'auto',
    }

    return <div
        className={'relative'}
        style={style}
        ref={setNodeRef}
        {...attributes}
        {...listeners}
    >
        {children}
    </div>
}

export default DndSortItem