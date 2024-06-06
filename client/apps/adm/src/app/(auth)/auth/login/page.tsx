import LoginForm from "@/features/auth/login/ui/LoginForm";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Авторизация'
}

export default function Page() {
    return <LoginForm/>
}