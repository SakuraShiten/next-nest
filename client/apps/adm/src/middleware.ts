import {NextRequest, NextResponse} from "next/server";

const publicRoutes = [
    '/auth/login',
    '/auth/registration',
]

export function middleware(request: NextRequest) {
    const token = request.cookies.get('token')
    const url = request.nextUrl.pathname
    const isPublicRoute = publicRoutes.includes(url)

    if (!token && !isPublicRoute) {
        return NextResponse.redirect(new URL(`${publicRoutes[0]}`, request.url))
    }

    if (token && isPublicRoute) {
        return NextResponse.redirect(new URL('/', request.url))
    }
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|robot.txt).*)',
    ],
}