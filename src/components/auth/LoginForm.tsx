"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { EnvelopeSimple, MagicWand, ShieldCheck, Key, Aperture } from "@phosphor-icons/react";
import Link from "next/link";

export function LoginForm() {
  return (
    <div className="flex items-center justify-center min-h-dvh py-20">
      <Card className="w-full max-w-sm rounded-4xl px-6 py-10 pt-14 shadow-2xs">
        <CardContent>
          <div className="flex flex-col items-center space-y-8">
            <div className="text-foreground">
                <Aperture weight="duotone" size={56} />
            </div>

            <div className="space-y-2 text-center">
              <h1 className="text-balance text-3xl font-semibold text-foreground">
                Welcome <span className="font-serif-italic text-rose-500 font-normal">back!</span>
              </h1>
              <p className="text-pretty text-muted-foreground text-sm">
                First time here?{" "}
                <Link href="/" className="text-foreground hover:underline">
                  Sign up for free
                </Link>
              </p>
            </div>

            <div className="w-full space-y-4">
              <div className="relative">
                <EnvelopeSimple className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <Input type="email" placeholder="Your email" className="w-full rounded-xl pl-10" />
              </div>
              <div className="flex flex-col gap-2">
                <Button className="w-full rounded-xl btn-shimmer glow-button" size="lg">
                  <MagicWand className="mr-2" weight="fill" size={20} />
                  Send me the magic link
                </Button>
                <Button variant="link" className="w-full text-sm text-muted-foreground hover:text-foreground">
                  <Key className="mr-2" size={16} />
                  Sign in using password
                </Button>
              </div>

              <div className="flex items-center gap-4 py-2">
                <Separator className="flex-1" />
                <span className="text-sm text-muted-foreground">OR</span>
                <Separator className="flex-1" />
              </div>

              <Button variant="outline" className="w-full rounded-xl hover:bg-muted" size="lg">
                <ShieldCheck className="mr-2" size={20} />
                Single sign-on (SSO)
              </Button>
            </div>

            <p className="text-pretty text-center text-xs w-11/12 text-muted-foreground">
              You acknowledge that you read, and agree, to our{" "}
              <Link href="/" className="underline hover:text-foreground">
                Terms of Service
              </Link>{" "}
              and our{" "}
              <Link href="/" className="underline hover:text-foreground">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
