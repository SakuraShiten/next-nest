import RegistrationForm from "@/features/auth/registration/ui/RegistrationForm";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Регистрация'
}

export default function Page() {
    return <RegistrationForm/>
}