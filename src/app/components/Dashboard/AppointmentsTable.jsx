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
    id: 1,
    clientName: "Jane.D",
    clientPhone: "01960685765",
    clientEmail: "admin@gmail.com",
    device: "Apple/iPhone 13pro",
    repairType: "Screen",
    date: "02/06/2026",
    slotNo: "1",
    startTime: "09:00",
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
    id: 1,
    clientName: "Jane.D",
    clientPhone: "01960685765",
    clientEmail: "admin@gmail.com",
    device: "Apple/iPhone 13pro",
    repairType: "Screen",
    date: "02/06/2026",
    slotNo: "1",
    startTime: "09:00",
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
    id: 1,
    clientName: "Jane.D",
    clientPhone: "01960685765",
    clientEmail: "admin@gmail.com",
    device: "Apple/iPhone 13pro",
    repairType: "Screen",
    date: "02/06/2026",
    slotNo: "1",
    startTime: "09:00",
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
    id: 1,
    clientName: "Jane.D",
    clientPhone: "01960685765",
    clientEmail: "admin@gmail.com",
    device: "Apple/iPhone 13pro",
    repairType: "Screen",
    date: "02/06/2026",
    slotNo: "1",
    startTime: "09:00",
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
    id: 1,
    clientName: "Jane.D",
    clientPhone: "01960685765",
    clientEmail: "admin@gmail.com",
    device: "Apple/iPhone 13pro",
    repairType: "Screen",
    date: "02/06/2026",
    slotNo: "1",
    startTime: "09:00",
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
    id: 1,
    clientName: "Jane.D",
    clientPhone: "01960685765",
    clientEmail: "admin@gmail.com",
    device: "Apple/iPhone 13pro",
    repairType: "Screen",
    date: "02/06/2026",
    slotNo: "1",
    startTime: "09:00",
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
    id: 1,
    clientName: "Jane.D",
    clientPhone: "01960685765",
    clientEmail: "admin@gmail.com",
    device: "Apple/iPhone 13pro",
    repairType: "Screen",
    date: "02/06/2026",
    slotNo: "1",
    startTime: "09:00",
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
];

const tableHeaders = [
  { key: "clientName", label: "Client Name" },
  { key: "clientPhone", label: "Client Phone" },
  { key: "clientEmail", label: "Client Email" },
  { key: "device", label: "Device" },
  { key: "repairType", label: "Repair Type" },
  { key: "date", label: "Date" },
  { key: "slotNo", label: "Slot No" },
  { key: "startTime", label: "Start Time" },
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

  const handlePreviousPage = () =>
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <div className="bg-card rounded-xl border-2  border-blue-950 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-blue-950">
              {tableHeaders?.map((header) => (
                <th
                  key={header.key}
                  className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wide"
                >
                  {header.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedAppointments.map((appointment) => (
              <tr
                key={appointment.id}
                className="border-b border-blue-950 hover:bg-background/50 transition-colors relative"
              >
                {tableHeaders.map((header) => (
                  <td
                    key={header.key}
                    className={`px-6 py-4 text-sm ${header.key === "clientName" ? "text-blue-400" : "text-foreground"}`}
                  >
                    {appointment[header.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 px-6 py-4 border-t border-blue-950">
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
              className={`w-10 h-10 rounded-lg text-sm font-bold transition-colors ${
                currentPage === page
                  ? "bg-[#A6C8FF]  text-black"
                  : "text-blue-500 hover:bg-background/50"
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-blue-500 hover:bg-background/50  cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
