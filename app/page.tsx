import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ['latin'],
  weight: ['600'],
})
const Home = () => {
  return (
    <main className="flex h-full flex-col
    items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
    from-white to-sky-600">
      <div className="space-y-6">
        <h1 className={cn("text-6xl font-semibold text-white drop-shadow-md", font.className)}>
          🔐Auth
        </h1>
        <p className="text-white text-lg">Simple authentication service</p>
      </div>
      <LoginButton mode="modal">
        <Button variant={'secondary'} size={'xl'} className="text-xl text-semibold mt-10">
          Sign in
        </Button>
      </LoginButton>
    </main>
  );
}
export default Home;