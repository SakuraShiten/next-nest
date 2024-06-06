import React from "react";
import {cn} from "@repo/ui/lib/utils";

export default function UIContainer({children}: { children: React.ReactNode }) {
    return <div className={cn(
        'container mx-auto p-4 flex flex-col gap-3'
    )}>
        {children}
    </div>
}