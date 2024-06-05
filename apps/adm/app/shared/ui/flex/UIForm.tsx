import React from "react";
import {cn} from "@ui/lib/utils";

function UiForm({className,children, ...props}: React.HTMLAttributes<HTMLFormElement>) {
    return (
        <form
            className={cn(
                'p-4 flex flex-col gap-4 items-center',
                className
            )}
            {...props}
        >
            {children}
        </form>
    )
}

export default UiForm