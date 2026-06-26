import { MobileBottomNav } from "@/components/MobileBottomNav";

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
