import React from "react";
import {cn} from "@repo/ui/lib/utils";

function UIFlexRow({className, ...props}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                "p-4 flex flex-row gap-4",
                className
            )}
            {...props}
        />
    )
}

export default UIFlexRow