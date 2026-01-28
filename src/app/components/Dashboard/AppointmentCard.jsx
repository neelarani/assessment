import { AlertCircle, Calendar, CheckCircle } from "lucide-react";

const appointmentStats = [
  {
    id: 1,
    title: "Total Booked",
    value: "34",
    subText: "+8 this week",
    icon: Calendar,
    iconColor: "text-blue-500",
  },
  {
    id: 2,
    title: "AI Booked",
    value: "28",
    subText: "82% of total",
    icon: CheckCircle,
    iconColor: "text-emerald-500",
  },
  {
    id: 3,
    title: "Pending",
    value: "3",
    subText: "Awaiting confirmation",
    icon: AlertCircle,
    iconColor: "text-amber-500",
  },
];

export function AppointmentCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {appointmentStats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.id}
            className="border-2 border-blue-950 rounded-xl p-5 bg-[#111B3C]"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="mt-[2px]">
                <Icon className={`w-5 h-5 ${item.iconColor}`} />
              </div>

              <h3 className="text-sm text-gray-400 leading-none">
                {item.title}
              </h3>
            </div>

            <p className="text-2xl font-bold text-white mb-1">{item.value}</p>
            <p
              className={`text-sm ${
                item.subText.includes("+") ? "text-green-400" : "text-gray-400"
              }`}
            >
              {item.subText}
            </p>
          </div>
        );
      })}
    </div>
  );
}
