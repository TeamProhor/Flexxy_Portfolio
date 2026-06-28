import { MobileBottomNav } from "@/components/landing/MobileBottomNav";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <MobileBottomNav />
    </>
  );
}
