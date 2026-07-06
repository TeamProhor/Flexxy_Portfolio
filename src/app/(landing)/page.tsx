import type { ReactElement } from "react";
import { ThemeToggler } from "@/components/theme-toggler";
import { ProhorIcon } from "@/lib/icons";

export default function Home(): ReactElement {
  return (
    <main className="relative flex min-h-screen items-center justify-center bg-background">
      <div className="absolute top-6 right-6">
        <ThemeToggler variant="circle" />
      </div>
      <div className="flex flex-col items-center gap-6">
        <ProhorIcon animate={true} className="size-32" />
        <h1 className="text-3xl font-extrabold tracking-widest text-foreground">
          prohor-nextjs-starter-kit
        </h1>
      </div>
    </main>
  );
}
