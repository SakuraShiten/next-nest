import React from "react";
import {cn} from "@repo/ui/lib/utils";

export default function UIFlexCol({className, ...props}: React.HTMLAttributes<HTMLDivElement>) {
    return <div
        className={cn(
            "p-4 flex flex-col gap-4",
            className
        )}
        {...props}
    />
}