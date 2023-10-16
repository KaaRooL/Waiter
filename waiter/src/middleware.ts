import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getServerSession, NextAuthOptions } from 'next-auth';
import { configuration } from './app/api/auth/[...nextauth]'
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { cert } from "firebase-admin/app";
import { url } from 'inspector';
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest, response: NextResponse, next: any) {

  const session = request.cookies.get("session");

  //Return to /login if don't have a session
  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  //Call the authentication endpoint
  const responseAPI = await fetch(new URL("/api/login", request.url), {
    headers: {
      Cookie: `session=${session?.value}`,
    },
  });

  //Return to /login if token is not authorized
  if (responseAPI.status !== 200) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/dashboard'],
}