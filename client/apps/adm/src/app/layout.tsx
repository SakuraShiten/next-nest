import "@ui/globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import React from "react";
import Providers from "@/app/providers";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: 'Страницы'
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return <html lang="ru">
    <body className={inter.className}>
    <Providers>
        {children}
    </Providers>
    </body>
    </html>
}
