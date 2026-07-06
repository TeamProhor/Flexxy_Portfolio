"use client";

import type { ReactElement } from "react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import type { ThemeTogglerProps } from "@/types";

export function ThemeToggler({
  variant = "circle",
  ...props
}: ThemeTogglerProps): ReactElement {
  return <AnimatedThemeToggler variant={variant} {...props} />;
}
