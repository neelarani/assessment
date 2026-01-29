import DashboardOverview from "./(dashboard)/dashboard/page";
import DashboardLayout from "./(dashboard)/layout";

export default function Home() {
  return (
    <main>
      <DashboardLayout>
        <DashboardOverview />
      </DashboardLayout>
    </main>
  );
}
