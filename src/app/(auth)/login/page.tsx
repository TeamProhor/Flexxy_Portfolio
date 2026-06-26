import { Metadata } from "next";
import { LoginForm } from "@/components/auth/LoginForm";
import { ScrollProgress } from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: "Flexxy | Login",
  description: "Sign in to your account.",
};

export default function LoginPage() {
  return (
    <>
      <ScrollProgress />
      <main className="flex flex-col px-4 md:px-10 max-w-[1400px] mx-auto overflow-x-hidden">
        <LoginForm />
      </main>
    </>
  );
}
