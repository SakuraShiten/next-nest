'use client'

import {useRouter} from "next/navigation";
import {cleanToken} from "@/features/auth/shared/actions";
import {Button} from "@repo/ui/components/button";

export default function Navbar() {
    const {push} = useRouter()

    const handleExit = () => {
        cleanToken().then()
        push('/auth/login')
    }

    return <Button onClick={handleExit}>{''}</Button>
}

