import React from "react";
import {cn} from "@ui/lib/utils";

function UIFlexCol({className, ...props}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                "p-4 flex flex-col gap-4",
                className
            )}
            {...props}
        />
    )
}

export default UIFlexCol