import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-[#121d45]">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-auto">
        <Header />
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
