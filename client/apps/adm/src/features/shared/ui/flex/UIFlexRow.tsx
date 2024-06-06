import React from "react";
import {cn} from "@repo/ui/lib/utils";

export default function UIFlexRow({className, ...props}: React.HTMLAttributes<HTMLDivElement>) {
    return <div
        className={cn(
            "flex w-full flex-row gap-3",
            className
        )}
        {...props}
    />
}