"use client";

import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", calls: 45 },
  { name: "Tue", calls: 55 },
  { name: "Wed", calls: 48 },
  { name: "Thu", calls: 72 },
  { name: "Fri", calls: 65 },
  { name: "Sat", calls: 58 },
  { name: "Sun", calls: 42 },
];

export function TrendsChart() {
  const [period, setPeriod] = useState("This Week");
  const options = ["This Week", "Last Week", "This Month"];

  return (
    <div className="bg-[#111B3C] rounded-lg p-6 border-2 border-blue-950 mt-6 ">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-1">Call Trends - {period}</h3>
          <p className="text-sm text-muted-foreground">Total: 477 calls</p>
        </div>

        <div className="relative">
          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="bg-[#162145] text-sm px-3 py-1 rounded focus:outline-none cursor-pointer"
          >
            {options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorCalls" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.01} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis
              dataKey="name"
              stroke="#9ca3af"
              style={{ fontSize: "12px" }}
            />
            <YAxis
              stroke="#9ca3af"
              style={{ fontSize: "12px" }}
              domain={[0, 100]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1a2332",
                border: "1px solid #2d3748",
                borderRadius: "8px",
              }}
              labelStyle={{ color: "#e5e7eb" }}
              formatter={(value) => [`${value} calls`, "Calls"]}
            />
            <Area
              type="monotone"
              dataKey="calls"
              stroke="#3b82f6"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorCalls)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
