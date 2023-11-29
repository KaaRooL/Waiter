import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(){
  console.log("SIGN OUT BABY");
  cookies().delete("session");
  signOut(auth);
  
  return NextResponse.json({ isLogged: false }, { status: 200 });
}