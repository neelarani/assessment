"use client";

import { Phone, Calendar, Settings, LogOut, Zap, House, X } from "lucide-react";
import Link from "next/link";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
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
    <>
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}

      <div
        className={`
          fixed md:static top-0 left-0 z-50
          w-[271px] h-screen
          bg-[#111B3C] border-r border-blue-950
          flex flex-col items-center
          transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* close button (mobile) */}
        <div className="w-full flex justify-end p-4 md:hidden">
          <X
            className="w-6 h-6 text-white cursor-pointer"
            onClick={() => setSidebarOpen(false)}
          />
        </div>

        <div className="w-10 h-10 bg-gradient-to-t from-[#00D4FF] to-[#00FF88] rounded-lg flex items-center justify-center mt-4">
          <Zap className="w-6 h-6 text-gray-900" />
        </div>

        <nav className="flex-1 p-4 space-y-6 mt-10 font-medium w-full">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl
                  text-sidebar-foreground hover:bg-white/10 transition"
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 w-full">
          <button className="w-full flex items-center gap-3 px-4 py-3">
            <LogOut className="w-5 h-5 text-black" />
            <span className="text-red-500 font-medium">Log Out</span>
          </button>
        </div>
      </div>
    </>
  );
}
