"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const mockAppointments = [
  {
    id: 1,
    clientName: "Jane.D",
    clientPhone: "01960685765",
    clientEmail: "admin@gmail.com",
    device: "Apple/iPhone 13pro",
    repairType: "Screen",
    date: "02/06/2026",
    slotNo: "1",
    startTime: "09:00",
    technician: "Md. Abdun Nur",
  },
  {
    id: 2,
    clientName: "Jane.D",
    clientPhone: "01960685765",
    clientEmail: "admin@gmail.com",
    device: "Apple/iPhone 13pro",
    repairType: "Screen",
    date: "02/06/2026",
    slotNo: "1",
    startTime: "10:00",
  },
  {
    id: 3,
    clientName: "Jane.D",
    clientPhone: "01960685765",
    clientEmail: "admin@gmail.com",
    device: "Apple/iPhone 13pro",
    repairType: "Screen",
    date: "02/06/2026",
    slotNo: "1",
    startTime: "11:00",
  },
  {
    id: 4,
    clientName: "Jane.D",
    clientPhone: "01960685765",
    clientEmail: "admin@gmail.com",
    device: "Apple/iPhone 13pro",
    repairType: "Screen",
    date: "02/06/2026",
    slotNo: "1",
    startTime: "12:00",
  },
  {
    id: 5,
    clientName: "Jane.D",
    clientPhone: "01960685765",
    clientEmail: "admin@gmail.com",
    device: "Apple/iPhone 13pro",
    repairType: "Screen",
    date: "02/06/2026",
    slotNo: "1",
    startTime: "02:00",
    technician: "Md. Abdun Nur",
  },
  {
    id: 6,
    clientName: "Jane.D",
    clientPhone: "01960685765",
    clientEmail: "admin@gmail.com",
    device: "Apple/iPhone 13pro",
    repairType: "Screen",
    date: "02/06/2026",
    slotNo: "1",
    startTime: "03:00",
  },
];

export function AppointmentsTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(mockAppointments.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedAppointments = mockAppointments.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden">
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Client Name
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Client Phone
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Client email
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Device
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Repair Type
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Date
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Slot no
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Start Time
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedAppointments.map((appointment) => (
              <tr
                key={appointment.id}
                className="border-b border-border hover:bg-background/50 transition-colors relative"
              >
                <td className="px-6 py-4 text-sm text-blue-400">
                  {appointment.clientName}
                </td>
                <td className="px-6 py-4 text-sm text-foreground">
                  {appointment.clientPhone}
                </td>
                <td className="px-6 py-4 text-sm text-foreground">
                  {appointment.clientEmail}
                </td>
                <td className="px-6 py-4 text-sm text-foreground">
                  {appointment.device}
                </td>
                <td className="px-6 py-4 text-sm text-foreground">
                  {appointment.repairType}
                </td>
                <td className="px-6 py-4 text-sm text-foreground">
                  {appointment.date}
                </td>
                <td className="px-6 py-4 text-sm text-foreground">
                  {appointment.slotNo}
                </td>
                <td className="px-6 py-4 text-sm text-foreground">
                  {appointment.startTime}
                </td>

                {/* Technician Badge */}
                {appointment.technician && (
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 pointer-events-none">
                    <div className="bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                      {appointment.technician}
                    </div>
                  </div>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 px-6 py-4 border-t border-border">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-background/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </button>

        <div className="flex items-center gap-1">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                currentPage === page
                  ? "bg-blue-500 text-white"
                  : "text-muted-foreground hover:bg-background/50"
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-background/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
