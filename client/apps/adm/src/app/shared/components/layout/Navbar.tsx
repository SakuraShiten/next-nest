'use client'

import {useRouter} from "next/navigation";
import {Button} from "@ui/components/ui/button";
import {cleanToken} from "../../../../features/auth/actions";
import {useState} from "react";

function Navbar() {
    const [isLoad, setIsLoad] = useState(false)
    const {push} = useRouter()

    const handleExit = async () => {
        setIsLoad(true)
        await cleanToken()
        push('/auth/login')
    }

    return (
        <div>
            <Button disabled={isLoad} onClick={handleExit}>{''}</Button>
        </div>
    )
}

export default Navbar