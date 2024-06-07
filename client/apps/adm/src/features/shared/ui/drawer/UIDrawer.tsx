import React from 'react';
import {Button} from "@repo/ui/components/button";
import {Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger} from "@repo/ui/components/drawer";

type UIDrawerProps = {
    text: string
    title?: string
    children: React.ReactNode
    isOpen: boolean
    setIsOpen: (value: boolean) => void
    onClose?: () => void
    onOpen?: () => void
    buttonProps?: React.ComponentProps<typeof Button>
}

export default function UIDrawer(
    {
        isOpen, setIsOpen, text, children, title, onClose, onOpen, buttonProps
    }: UIDrawerProps) {
    const handleOpenChange = (value: boolean) => {
        setIsOpen(value)
        if (value && onOpen) onOpen()
        else if (!value && onClose) onClose()
    }

    return <Drawer open={isOpen} onOpenChange={handleOpenChange}>
        <Button
            className={'w-full'}
            variant={'outline'}
            asChild={true}
            {...buttonProps}
        ><DrawerTrigger>{text}</DrawerTrigger></Button>
        <DrawerContent>
            {title ? <DrawerHeader>
                <DrawerTitle>{title}</DrawerTitle>
            </DrawerHeader> : null}
            {children}
        </DrawerContent>
    </Drawer>
}