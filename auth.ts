import NextAuth from "next-auth"
// import GitHub from "next-auth/providers/github"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import authConfig from "./auth.config"
import { db } from "@/lib/db"

const prisma = new PrismaClient()

export const { handlers: { GET, POST }, auth, signIn, signOut} = NextAuth({
  callbacks: {
    async jwt({token}){
      console.log("🚀 ~ jwt ~ token:", token)
      return token
    }

  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
})

