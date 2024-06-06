import React from 'react';

export default function UITextLight({children}: { children: string }) {
    return <p className={'text-sm text-gray-600'}>{children}</p>
}

