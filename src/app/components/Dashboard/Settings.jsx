"use client";

import { useState } from "react";
import { ProfileSettings } from "./ProfileSettings";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="space-y-8">
      <div className="flex gap-8">
        <button
          onClick={() => setActiveTab("profile")}
          className={`pb-4 text-lg font-medium transition-colors relative ${
            activeTab === "profile"
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Profile
          {activeTab === "profile" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-500" />
          )}
        </button>
        <button
          onClick={() => setActiveTab("password")}
          className={`pb-4 text-lg font-medium transition-colors relative ${
            activeTab === "password"
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Password Settings
          {activeTab === "password" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-500" />
          )}
        </button>
      </div>

      <div className="pt-6">
        {activeTab === "profile" && <ProfileSettings />}
        {activeTab === "password" && <div>Password Settings </div>}
      </div>
    </div>
  );
}
