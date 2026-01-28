import {
  Activity,
  TopRepairRequests,
} from "@/app/components/Dashboard/Activity";
import DashboardActivityCards from "@/app/components/Dashboard/DashboardActivityCards";
import { TrendsChart } from "@/app/components/Dashboard/Trendschart";

export default function DashboardOverview() {
  return (
    <div>
      <DashboardActivityCards />
      <TrendsChart />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Activity />
        <TopRepairRequests />
      </div>
    </div>
  );
}
