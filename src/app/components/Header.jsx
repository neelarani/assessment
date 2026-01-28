"use client";

import { Bell } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const getTitle = (path) => {
    if (path === "/dashboard") return "Dashboard Overview";
    if (path === "/call-logs") return "Call Logs & History";
    if (path === "/appointments") return "Appointments";
    if (path === "/settings") return "Settings";
    return "Dashboard";
  };

  const title = getTitle(pathname);

  return (
    <div className="bg-[#111B3C] sticky top-0 h-[96px] p-6 flex justify-between items-center w-full">
      <div>
        <h1 className="text-base ml-10 md:ml-0 md:text-xl font-semibold text-white">
          {title}
        </h1>
      </div>

      <div className="flex gap-5 items-center">
        <Bell className="w-5 h-5 text-white" />

        <div>
          <Image
            src="https://i.ibb.co/RT7sWvTr/me-removebg-preview-removebg-preview.png"
            alt="profile"
            width={32}
            height={32}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
