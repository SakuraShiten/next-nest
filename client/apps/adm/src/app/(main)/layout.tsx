import Navbar from "@/features/page/shared/Navbar";
import React from "react";

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (<>
        <Navbar/>
        {children}
    </>)
}
