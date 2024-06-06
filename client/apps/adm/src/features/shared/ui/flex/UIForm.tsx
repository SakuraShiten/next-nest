import React from "react";
import {cn} from "@repo/ui/lib/utils";

export default function UiForm({className, children, ...props}: React.HTMLAttributes<HTMLFormElement>) {
    return <form
        className={cn(
            'p-3 flex flex-col gap-3 items-center',
            className
        )}
        {...props}
    >
        {children}
    </form>
}