"use client";

import { useEffect, useRef } from "react";

interface LazyVideoProps {
  src: string;
  className?: string;
  ariaLabel?: string;
}

export const LazyVideo = ({ src, className, ariaLabel }: LazyVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      loop
      muted
      playsInline
      preload="none"
      className={className}
      aria-label={ariaLabel}
    ></video>
  );
};
