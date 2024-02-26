"use client";

import { logout } from "@/actions/logout";
import { useRouter } from "next/navigation";

interface LogoutButtonProps {
  children?: React.ReactNode;
};

export const LogoutButton = ({
  children
}: LogoutButtonProps) => {
  const router = useRouter();
  const onClick = async() => {
    try{
      logout();
      router.push("/auth/login");
    }
    catch(err){
      console.error(err);
    }

  };

  return (
    <span onClick={onClick} className="cursor-pointer border-rose-500">
      {children}
    </span>
  );
};
