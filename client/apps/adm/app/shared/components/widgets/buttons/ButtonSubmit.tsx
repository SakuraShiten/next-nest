import {Button} from "@ui/components/ui/button";
import React from "react";
import {cn} from "@ui/lib/utils";

type ButtonSubmitProps = React.ComponentProps<typeof Button>

function ButtonSubmit({className, ...props}: ButtonSubmitProps) {
    return (
        <Button className={cn('w-full', className)} {...props}/>
    )
}

export default ButtonSubmit