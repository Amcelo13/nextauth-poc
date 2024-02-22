import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined
}


export const db = globalThis.prisma || new PrismaClient()

if(process.env.NODE_ENV !== 'production') globalThis.prisma = db


//doing this bcz next js on dev mode on hot reloads it will create new instance of prisma client
//so we need to make sure we are using same instance of prisma client on every new hot reload created first time on ruuning dev mode of next js