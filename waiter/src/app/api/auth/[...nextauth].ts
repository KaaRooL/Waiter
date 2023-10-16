import NextAuth, { getServerSession } from "next-auth"
import { FirestoreAdapter } from "@auth/firebase-adapter"
import { cert } from "firebase-admin/app"
import { NextAuthOptions } from "next-auth";
import { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next";

export const configuration: NextAuthOptions = {
  adapter: FirestoreAdapter({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY
    })
  }),
  providers: []
}
const handler = NextAuth(configuration)

export { handler as GET, handler as POST }

export function auth(...args: [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]] | [NextApiRequest, NextApiResponse] | []) {
  
  return getServerSession(...args, configuration);
}



