import { db } from "@/lib/db";

export const getUserByEmail = async(email: string) => {
    if(!email) throw new Error("Email is required")
    try{
        const user = db.user.findUnique({
            where: {
                email
            }
        })
        return user 
    }   
    catch(err){
        return null
    }
}

export const getUserEmailId = async(id : string) => {
    if(!id) throw new Error("Id is required")
    try{
        const user = db.user.findUnique({
            where: {id}
        })
        return user 
    }   
    catch(err){
        return null
    }
}