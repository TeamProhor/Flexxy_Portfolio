// This template requires the Embla Auto Scroll plugin to be installed:
//
// npm install embla-carousel-auto-scroll

"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "Trusted by these Creators",
  logos = [
    {
      id: "logo-1",
      description: "Creator 1",
      image: "https://api.dicebear.com/7.x/notionists/svg?seed=Felix",
      className: "h-12 w-12 rounded-full",
    },
    {
      id: "logo-2",
      description: "Creator 2",
      image: "https://api.dicebear.com/7.x/notionists/svg?seed=Aneka",
      className: "h-12 w-12 rounded-full",
    },
    {
      id: "logo-3",
      description: "Creator 3",
      image: "https://api.dicebear.com/7.x/notionists/svg?seed=Mimi",
      className: "h-12 w-12 rounded-full",
    },
    {
      id: "logo-4",
      description: "Creator 4",
      image: "https://api.dicebear.com/7.x/notionists/svg?seed=Oliver",
      className: "h-12 w-12 rounded-full",
    },
    {
      id: "logo-5",
      description: "Creator 5",
      image: "https://api.dicebear.com/7.x/notionists/svg?seed=Jack",
      className: "h-12 w-12 rounded-full",
    },
    {
      id: "logo-6",
      description: "Creator 6",
      image: "https://api.dicebear.com/7.x/notionists/svg?seed=George",
      className: "h-12 w-12 rounded-full",
    },
    {
      id: "logo-7",
      description: "Creator 7",
      image: "https://api.dicebear.com/7.x/notionists/svg?seed=Jasmine",
      className: "h-12 w-12 rounded-full",
    },
    {
      id: "logo-8",
      description: "Creator 8",
      image: "https://api.dicebear.com/7.x/notionists/svg?seed=Luna",
      className: "h-12 w-12 rounded-full",
    },
  ],
}: Logos3Props) => {
  return (
    <section className="w-full">
      <div className="container flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-foreground text-center leading-[1.1]" style={{ textWrap: "balance" }}>
          Trusted by these
          <br />
          <span className="font-serif-italic text-rose-500 font-normal">
            Creators
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
                      <img
                        src={logo.image}
                        alt={logo.description}
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

export { Logos3 };
