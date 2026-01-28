"use client";

import { useState } from "react";
import { Phone, Calendar, Settings, LogOut, Zap, House } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const menuItems = [
    {
      icon: House,
      label: "Dashboard Overview",
      id: "dashboard",
      href: "/dashboard",
    },
    { icon: Phone, label: "Call Logs", id: "call-logs", href: "/call-logs" },
    {
      icon: Calendar,
      label: "Appointments",
      id: "appointments",
      href: "/appointments",
    },
    { icon: Settings, label: "Settings", id: "settings", href: "/settings" },
  ];

  return (
    <div className="w-[271px] h-screen bg-[#111B3C] border-r border-blue-950 flex flex-col items-center">
      <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center mt-8">
        <Zap className="w-6 h-6 text-gray-900" />
      </div>

      <nav className="flex-1 p-4 space-y-[28px] mt-12 font-medium">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <Link
              href={item.href}
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-left ${
                isActive
                  ? "bg-[#2B7FFF33] text-white font-medium cursor-pointer "
                  : "text-sidebar-foreground hover:bg-sidebar-primary cursor-pointer"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 w-full">
        <button className="w-full flex justify-start items-center gap-3 px-4 py-3 rounded-lg text-left">
          <LogOut className="w-5 h-5 text-black" />
          <span className="text-red-500 text-lg font-medium">Log Out</span>
        </button>
      </div>
    </div>
  );
}
