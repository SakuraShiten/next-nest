import React from "react";
import {Button, ButtonProps} from "@repo/ui/components/button";

const ButtonDelete = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({...props}, ref) => {
        return (
            <Button
                className={'px-0 text-red-600'}
                size={'sm'}
                variant={'ghost'}
                ref={ref}
                {...props}
            >
                Удалить
            </Button>
        );
    },
);

export default ButtonDelete