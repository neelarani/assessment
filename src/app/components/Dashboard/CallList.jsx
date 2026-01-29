"use client";

import { Clock, CheckCircle2, Phone } from "lucide-react";

export default function CallList({ call, isSelected, onSelect }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "AI Resolved":
        return "bg-green-500/20 text-green-400 border border-green-500/50";
      case "Warm Transfer":
        return "bg-orange-500/20 text-orange-400 border border-orange-500/50";
      case "Appointment":
        return "bg-blue-500/20 text-blue-400 border border-blue-500/50";
      case "Dropped":
        return "bg-red-500/20 text-red-400 border border-red-500/50";
      default:
        return "bg-gray-500/20 text-gray-400 border border-gray-500/50";
    }
  };

  if (!call) {
    return (
      <div className="w-full p-4 rounded-lg border-2 text-gray-400 text-center">
        No call selected
      </div>
    );
  }

  return (
    <section className="bg-[#111B3C]  border-t-2 border-blue-950">
      <button
        onClick={onSelect}
        className={`w-full cursor-pointer p-4 rounded-lg transition-all text-left   ${
          isSelected
            ? "border-b-blue-500 border-b-2"
            : "border-transparent bg-card hover:bg-card/80"
        }`}
      >
        <div className="flex items-center justify-between ">
          <div className="">
            <div className="flex items-center gap-4 mb-2  ">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-blue-500  ">
                <Phone className="w-5 h-5 " />
              </div>
              <div>
                <p className="text-white font-medium">{call.phone}</p>
                <p className="text-sm text-gray-400">
                  {call.date} · {call.time}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 ml-13 text-sm text-gray-400 mb-2">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{call.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>{call.notes}</span>
              </div>
              <div>
                {call.tag && (
                  <span className="px-2 py-1 rounded text-xs font-medium bg-indigo-500/20 text-indigo-400 border border-indigo-500/50">
                    {call.tag}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div>
            <span
              className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(
                call.status,
              )}`}
            >
              {call.status}
            </span>
          </div>
        </div>
      </button>
    </section>
  );
}
