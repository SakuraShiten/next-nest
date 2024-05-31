import Navbar from "../shared/components/layout/Navbar";


export default function RootLayout({children}: {
    children: React.ReactNode;
}): JSX.Element {
    return (<>
        <Navbar/>
        {children}
    </>)
}
