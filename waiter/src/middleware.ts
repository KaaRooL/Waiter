import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getAuth, onAuthStateChanged, onIdTokenChanged } from 'firebase/auth';
import { getApp, getApps, initializeApp } from 'firebase/app';
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest, response: NextResponse, next: any) {

  const session = request.cookies.get("session");

  //Return to /login if don't have a session
  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }


  
  const loginUrl = new URL("/api/login", request.url);
  //Call the authentication endpoint

  // const responseAPI = await fetch(loginUrl, {
  //   headers: {
  //     Cookie: `session=${session?.value}`,
  //   },
  // });

  // //Return to /login if token is not authorized
  // if (responseAPI.status !== 200) {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }
  
  const firebaseConfig = {
    apiKey: "AIzaSyDGnTDR2_O3M4zLxGLD-dg4GoSKCs3_1oE",
    authDomain: "waiter-253ed.firebaseapp.com",
    projectId: "waiter-253ed",
    storageBucket: "waiter-253ed.appspot.com",
    messagingSenderId: "799495784420",
    appId: "1:799495784420:web:fae66a6eac667a779a69f1",
    measurementId: "G-6T028GWYHM"
  };
  
  // Initialize Firebase
  const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

  const auth = getAuth(app);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("User logged FROM MIDDLEWARE");
      console.log(user.email);
    } else {
      console.log("User NOT LOGGED FROM MIDDLEWARE");
      // const logoutUrl = new URL("/api/logout");
      // fetch("/api/logout",{
      //     method:"POST"
      // });
    }
  });
  
  onIdTokenChanged(auth, (user) => {
    if (user) {
      console.log("User is signed in or token was refreshed.  FROM MIDDLEWARE");
      console.log(user.email);
    } else {
      console.log("User is signed out or token expired. FROM MIDDLEWARE");
      // const logoutUrl = new URL("/api/logout");
      // fetch("/api/logout",{
      //     method:"POST"
      // });
    }
  });


  return NextResponse.next();
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|login).*)'],
}