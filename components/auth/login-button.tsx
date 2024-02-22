"use client"
import { useRouter } from "next/navigation"

interface LoginButtonProps {
    children: React.ReactNode
    mode?: "modal" | "redirect"
    asChild?: boolean
}

export const LoginButton  = (props: LoginButtonProps) => {
    const { children, mode = "redirect", asChild } = props
    const router = useRouter()

    const onSpanClick = () => {
        router.push("/auth/login")
        
        if(mode === "modal") {
           return (
            <span>
                //TODO: Implement modal
            </span>
           )
        } 
    }

        return (
            <span className="cursor-pointer"
            onClick={onSpanClick}>
                {children}
            </span>
        )

}