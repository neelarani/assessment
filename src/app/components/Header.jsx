"use client";

import { Bell, Menu } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header({ setSidebarOpen }) {
  const pathname = usePathname();

  const getTitle = (path) => {
    if (path === "/dashboard") return "Dashboard Overview";
    if (path === "/call-logs") return "Call Logs & History";
    if (path === "/appointments") return "Appointments";
    if (path === "/settings") return "Settings";
    return "Dashboard";
  };

  return (
    <div className="bg-[#111B3C] sticky top-0 h-[96px] py-8 px-4 md:px-6 flex justify-between items-center w-full">
      <div className="flex items-center gap-3">
        {/* hamburger (mobile only) */}
        <Menu
          className="w-6 h-6 text-white cursor-pointer md:hidden"
          onClick={() => setSidebarOpen(true)}
        />

        <h1 className="text-base md:text-xl font-semibold text-white">
          {getTitle(pathname)}
        </h1>
      </div>

      <div className="flex gap-5 items-center">
        <Bell className="w-5 h-5 text-white" />
        <Image
          src="https://i.ibb.co/RT7sWvTr/me-removebg-preview-removebg-preview.png"
          alt="profile"
          width={46}
          height={46}
          className="rounded-full"
        />
      </div>
    </div>
  );
}
