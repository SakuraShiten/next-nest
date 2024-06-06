import React from "react";
import {cn} from "@repo/ui/lib/utils";

export default function UIFlexCol({className, ...props}: React.HTMLAttributes<HTMLDivElement>) {
    return <div
        className={cn(
            "flex flex-col gap-3 w-full",
            className
        )}
        {...props}
    />
}