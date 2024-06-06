'use client'

import {useRouter} from "next/navigation";
import {useState} from "react";
import {cleanToken} from "@/features/auth/shared/actions";
import {Button} from "@repo/ui/components/button";

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