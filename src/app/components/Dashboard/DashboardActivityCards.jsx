import { ArrowRightLeft, Bot, Calendar, Clock3, Phone, X } from "lucide-react";

const cardsData = [
  {
    id: 1,
    title: "Total Calls Today",
    total: 127,
    persent: "+12%",
    icon: Phone,
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "AI-Handled Calls",
    total: 98,
    persent: "+77%",
    icon: Bot,
    color: "bg-gradient-to-tr from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Warm Transfer",
    total: 32,
    persent: "+18%",
    icon: ArrowRightLeft,
    color: "bg-gradient-to-tr from-orange-500 to-orange-700",
  },
  {
    id: 4,
    title: "Appointments Booked",
    total: 34,
    persent: "+8%",
    icon: Calendar,
    color: "bg-green-400",
  },
  {
    id: 5,
    title: "Missed/Failed Calls",
    total: 6,
    persent: "-3%",
    icon: X,
    color: "bg-red-500",
  },
  {
    id: 6,
    title: "Avg Call Duration",
    total: "3:42",
    persent: "+15%",
    icon: Clock3,
    color: "bg-blue-800",
  },
];

export default function DashboardActivityCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {cardsData.map((card) => {
        const Icon = card.icon;

        const persentColor = card.persent.startsWith("-")
          ? "text-red-500"
          : "text-green-500";

        return (
          <div
            key={card.id}
            className="bg-[#111B3C]  rounded-xl p-6 border border-blue-950 shadow-sm hover:shadow-lg transition-shadow flex justify-between items-center"
          >
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-500">
                {card.title}
              </h3>
              <p className="text-sm ">Total: {card.total}</p>
              <p className={`text-sm font-semibold ${persentColor}`}>
                {card.persent}
              </p>
            </div>

            <div
              className={`w-9 h-9 rounded-xl flex items-center justify-center ${card.color}`}
            >
              <Icon className="w-6 h-6 text-white" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
