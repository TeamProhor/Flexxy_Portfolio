import Link from "next/link";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <ScrollProgress />
      <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden bg-white selection:bg-rose-500/30">
        
        <nav className="w-full max-w-7xl mx-auto px-6 py-8 flex justify-between items-center z-50">
          <Link href="/" className="font-serif-italic text-2xl tracking-tight text-black hover:opacity-70 transition-opacity">
            Alex Reed
          </Link>
          <div className="flex gap-6 items-center">
            <Link href="/works" className="text-sm font-medium text-black hover:text-rose-500 transition-colors">
              Works
            </Link>
          </div>
        </nav>

        <section className="flex flex-col items-center justify-center flex-1 px-6 text-center">
          <h1 className="text-8xl md:text-[120px] font-medium tracking-tighter text-black leading-none mb-4">
            404
          </h1>
          <p className="font-serif-italic text-3xl md:text-4xl text-zinc-500 mb-8">
            Frame not found.
          </p>
          <p className="text-zinc-400 max-w-md mx-auto mb-12 text-lg">
            The page you&apos;re looking for has been cut from the final edit. 
          </p>
          <Link 
            href="/" 
            className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-zinc-800 transition-colors"
          >
            Back to Home
          </Link>
        </section>

        <Footer />
      </main>
    </>
  );
}
