import React from "react";

export default function TextError({message}: { message?: string }) {
    if (!message) return null
    return <p
        className={'text-gray-600'}
    >{message}</p>
}