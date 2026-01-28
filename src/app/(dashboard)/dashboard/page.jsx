import DashboardActivityCards from "@/app/components/Dashboard/DashboardActivityCards";
import { TrendsChart } from "@/app/components/Dashboard/Trendschart";

export default function DashboardOverview() {
  return (
    <div>
      <DashboardActivityCards />
      <TrendsChart />
    </div>
  );
}
