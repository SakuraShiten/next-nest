import Navbar from "@/features/page/shared/Navbar";
import React from "react";
import {AlertDrawer} from "@/features/shared/ui/hook/useAlert";

export default function RootLayout({children}: { children: React.ReactNode }) {
    return <>
        <Navbar/>
        {children}
        <AlertDrawer/>
    </>
}
