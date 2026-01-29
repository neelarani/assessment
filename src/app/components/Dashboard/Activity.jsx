"use client";

import {
  CheckCircle,
  AlertCircle,
  Clock,
  PhoneOff,
  Circle,
} from "lucide-react";

const recentActivities = [
  {
    id: 1,
    title: "AI booked appointment for iPhone 13 screen repair",
    time: "2 hrs ago",
    color: "bg-green-500",
  },
  {
    id: 2,
    title: "Warm transfer to technician - Software issue",
    time: "45 min ago",
    color: "bg-orange-500",
  },
  {
    id: 3,
    title: "Quote provided for iPad battery replacement",
    time: "6 hrs ago",
    color: "bg-green-500",
  },
  {
    id: 4,
    title: "Call dropped after 12 seconds",
    time: "8 hrs ago",
    color: "bg-red-500",
  },
];

const repairRequests = [
  { title: "Screen Repair", requests: 156, progress: 75 },
  { title: "Battery Replacement", requests: 89, progress: 60 },
  { title: "Back Glass Repair", requests: 67, progress: 45 },
  { title: "Software Issues", requests: 45, progress: 35 },
];

export function Activity() {
  return (
    <div className="bg-[#111B3C] rounded-2xl p-6 border-2 border-blue-950 my-4 md:my-12">
      <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
      <div className="space-y-3">
        {recentActivities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3">
            <span
              className={`w-2 h-2 mt-2 rounded-full flex-shrink-0 ${activity.color}`}
            ></span>

            <div className="flex-1 min-w-0">
              <p className="text-sm text-foreground">{activity.title}</p>
              <p className="text-xs text-gray-500">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TopRepairRequests() {
  return (
    <div className="bg-[#111B3C] rounded-2xl p-6 border-2 border-blue-950 my-4 md:my-12  ">
      <h3 className="text-lg font-semibold mb-4">Top Repair Requests</h3>
      <div className="space-y-4">
        {repairRequests.map((request, index) => (
          <div key={index}>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">{request.title}</span>
              <span className="text-sm text-muted-foreground">
                {request.requests} requests
              </span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div
                className="bg-cyan-500 h-2 rounded-full"
                style={{ width: `${request.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
