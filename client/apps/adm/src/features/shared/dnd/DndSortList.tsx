import {closestCenter, DndContext, DragEndEvent, MouseSensor, TouchSensor, useSensor, useSensors} from "@dnd-kit/core";
import {arrayMove, SortableContext, verticalListSortingStrategy} from "@dnd-kit/sortable";
import React from "react";
import DndSortItem from "@/features/shared/dnd/DndSortItem";

type DndListProps<TItem> = {
    items: TItem[]
    children: (item: TItem) => React.ReactNode
    onDragEnd?: (items: TItem[]) => void
}

export default function DndSortList<
    TItem extends { id: number }
>(
    {
        onDragEnd,
        children,
        items
    }: DndListProps<TItem>
) {

    const sensors = useSensors(
        useSensor(MouseSensor, {
            activationConstraint: {
                delay: 100,
                tolerance: 5
            }
        }),
        useSensor(TouchSensor, {
            activationConstraint: {
                delay: 100,
                tolerance: 5
            }
        })
    )

    const dragEnd = (event: DragEndEvent) => {
        const {active, over} = event
        if (onDragEnd && over && active.id !== over.id) {
            const oldIndex = items.findIndex(e => e.id === Number(active.id));
            const newIndex = items.findIndex(e => e.id === Number(over.id));
            const newList = arrayMove(items, oldIndex, newIndex);
            onDragEnd(newList)
        }
    }

    return <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={dragEnd}
    >
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
            {items.map(item => <DndSortItem
                key={item.id}
                id={item.id}
            >
                {children(item)}
            </DndSortItem>)}
        </SortableContext>
    </DndContext>
}
