import type {ReactNode, JSX} from "react";

export default function RootLayout({children}: {
    children: ReactNode;
}): JSX.Element {
    return (<>{children}</>)
}
