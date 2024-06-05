import React from "react";

function TextError({message}: { message?: string }) {
    return (<>
        {message && <p
            className={'text-gray-600'}
        >{message}</p>}
    </>)
}

export default TextError