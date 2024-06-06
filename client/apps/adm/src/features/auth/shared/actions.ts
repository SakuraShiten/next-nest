'use server'

import {cookies} from "next/headers";

export async function setToken(token: string) {
    const cookieStore = cookies()
    cookieStore.set('token', token, {
        maxAge: 60 * 60 * 24 * 30,
        path: '/',
        httpOnly: true,
        sameSite: 'strict'
    })
}

export async function cleanToken() {
    const cookieStore = cookies()
    cookieStore.set('token', '', {
        maxAge: 0,
        path: '/',
        httpOnly: true,
        sameSite: 'strict'
    })
}