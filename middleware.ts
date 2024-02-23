// import { auth } from "@/auth"
import authConfig from "./auth.config"
import NextAuth from "next-auth"
const { auth } = NextAuth(authConfig)
import { apiAuthPrefix, AuthRoutes, DEFAULT_LOGIN_REDIRECT, PublicRoutes } from './routes'
import { NextResponse } from "next/server"

export default auth((req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = PublicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = AuthRoutes.includes(nextUrl.pathname);

    if (isApiAuthRoute) {
        return NextResponse.next()
    }

    if(isAuthRoute){
        if(isLoggedIn) Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))  // ,nextURL for absolute path
        return NextResponse.next()
    }

    if(!isLoggedIn && !isPublicRoute){
        return NextResponse.redirect(new URL('/auth/login', nextUrl))
    }
    return NextResponse.next()

})





// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}