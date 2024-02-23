import NextAuth from "next-auth"
// import GitHub from "next-auth/providers/github"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient, UserRole } from "@prisma/client"
import authConfig from "./auth.config"
import { db } from "@/lib/db"
import { getUserEmailId } from "./data/user"

const prisma = new PrismaClient()

export const { handlers: { GET, POST }, auth, signIn, signOut} = NextAuth({
  callbacks: {
    async session({token, session}){
      // console.log("session token", token, "\nsession", session) 
      if(token.sub && session.user) {
        session.user.id = token.sub
      }
      if(token.role && session.user) {
        session.user.role = token.role as UserRole
      }
      return session
    },
    async jwt({token}){
      // token.system = true  //It gets appended to the the token object in async session function as well
      if(!token.sub) return token
      const user = await getUserEmailId(token.sub)
      if(!user) return token
      token.role = user.role  //It will append role to the token object in async session function
      return token
    }

  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
})

