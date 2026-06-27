"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HandPalm, X } from "@phosphor-icons/react";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show the preloader for a bit so they can read the text, then hide it
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); 
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    },
    exit: { opacity: 0, transition: { duration: 0.4 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.6 } }
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <div className="fixed inset-0 z-[9999] flex pointer-events-none">
          {/* Columns for the stair effect */}
          {Array.from({ length: 7 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: "0%" }}
              exit={{ y: "100%" }}
              transition={{
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
                delay: i * 0.08,
              }}
              className="flex-1 h-full bg-background origin-top"
            />
          ))}

          {/* Overlay Text Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-10 pointer-events-auto"
          >
            <div className="max-w-4xl mx-auto w-full space-y-10 md:space-y-14">
              
              {/* Header */}
              <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start text-center md:text-left gap-4 md:gap-6">
                <div className="flex items-center justify-center md:justify-start gap-3 md:gap-5 w-full text-rose-500">
                  <HandPalm weight="fill" className="w-10 h-10 md:w-16 md:h-16 shrink-0" />
                  <h2 className="text-[40px] md:text-[72px] leading-[1.05] font-medium tracking-tight text-foreground" style={{ letterSpacing: "-0.03em" }}>
                    Stop <span className="font-serif-italic text-rose-500 font-normal">here</span>
                  </h2>
                </div>
                <p className="text-xl md:text-3xl font-medium text-foreground tracking-tight max-w-xl leading-tight">
                  You can definitely leave the website:
                </p>
              </motion.div>

              {/* List */}
              <ul className="space-y-5 md:space-y-6 flex flex-col items-center md:items-start">
                {[
                  "If you think editing doesn't matter anything",
                  "Isn't looking for premium editors.",
                  "Doesn't want to grow your business and wants to get stucked at the place you are",
                  "just looking for a cheap editor who copy paste your reels from a template"
                ].map((text, idx) => (
                  <motion.li 
                    key={idx}
                    variants={itemVariants}
                    className="flex items-start gap-4 text-lg md:text-2xl text-muted-foreground max-w-2xl text-left w-full md:w-auto"
                  >
                    <X weight="bold" className="w-6 h-6 md:w-8 md:h-8 text-rose-500 shrink-0 mt-0.5 md:mt-1" />
                    <span className="leading-snug">{text}</span>
                  </motion.li>
                ))}
              </ul>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

