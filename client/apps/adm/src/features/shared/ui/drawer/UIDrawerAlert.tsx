import React, {useState} from "react";
import {Button} from "@repo/ui/components/button";
import {Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger} from "@repo/ui/components/drawer";

type UIDrawerAlertProps = {
    text?: string
    onDelete: () => void
}

export default function UIDrawerAlert(
    {
        text = 'Удалить',
        onDelete
    }: UIDrawerAlertProps
) {
    const [isOpen, setIsOpen] = useState(false)

    const handleDelete = () => {
        setIsOpen(false)
        onDelete()
    }

    return <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <Button
            className={'px-0 text-red-600'}
            size={'sm'}
            variant={'ghost'}
            asChild={true}
        ><DrawerTrigger>{text}</DrawerTrigger></Button>

        <DrawerContent>
            <DrawerHeader>
                <DrawerTitle>Уверены?</DrawerTitle>
            </DrawerHeader>
            <Button
                onClick={handleDelete}
                variant={'destructive'}
                className={'m-3'}
            >Подтвердить</Button>
        </DrawerContent>
    </Drawer>
}