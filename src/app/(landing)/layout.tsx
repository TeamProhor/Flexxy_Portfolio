import type { ReactElement, ReactNode } from "react";

export default function LandingLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): ReactElement {
  return <div className="flex flex-col min-h-screen">{children}</div>;
}
