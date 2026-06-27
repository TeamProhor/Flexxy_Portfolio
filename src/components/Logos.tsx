// This template requires the Embla Auto Scroll plugin to be installed:
//
// npm install embla-carousel-auto-scroll

"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { trustedCreators } from "@/lib/data";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface LogosProps {
  logos?: Logo[];
  className?: string;
}

const Logos = ({
  logos = trustedCreators,
}: LogosProps) => {
  return (
    <section className="w-full">
      <div className="container flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-foreground text-center leading-[1.1]" style={{ textWrap: "balance" }}>
          Trusted by
          <br />
          <span className="font-serif-italic text-rose-500 font-normal">
            these Creators
          </span>
        </h2>
      </div>
      <div className="pt-10 md:pt-16 lg:pt-20">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true })]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="mx-10 flex shrink-0 items-center justify-center">
                    <div>
                      <Image
                        src={logo.image}
                        alt={logo.description}
                        width={48}
                        height={48}
                        className={logo.className}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-12 bg-linear-to-r from-background to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-12 bg-linear-to-l from-background to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export { Logos };
