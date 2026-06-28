import { Metadata } from "next";
import { AdminStatCards } from "@/components/dashboard/admin/AdminStatCards";
import { AdminRecentActivity } from "@/components/dashboard/admin/AdminRecentActivity";
import { AdminPendingTasks } from "@/components/dashboard/admin/AdminPendingTasks";

export const metadata: Metadata = {
  title: "Dashboard | Flexxy",
  description: "Admin dashboard overview.",
};

export default function DashboardOverview() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-serif-italic font-semibold mb-2">Overview</h1>
        <p className="text-muted-foreground text-sm">Welcome back. Here is what's happening with your projects today.</p>
      </div>

      <AdminStatCards />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
        <AdminRecentActivity />
        <AdminPendingTasks />
      </div>
    </div>
  );
}
