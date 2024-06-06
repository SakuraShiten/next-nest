import React from "react";
import {Button} from "@repo/ui/components/button";
import {cn} from "@repo/ui/lib/utils";

type ButtonSubmitProps = React.ComponentProps<typeof Button>

export default function ButtonSubmit({className, ...props}: ButtonSubmitProps) {
    return <Button className={cn('w-full', className)} {...props}/>
}
