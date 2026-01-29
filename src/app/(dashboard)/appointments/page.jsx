import { AppointmentCard } from "@/app/components/Dashboard/AppointmentCard";
import { AppointmentsTable } from "@/app/components/Dashboard/AppointmentsTable";
import { BookingLink } from "@/app/components/Dashboard/BookingLink";
import React from "react";

export default function AppointmentsPage() {
  return (
    <div className="md:m-5">
      <AppointmentCard />
      <BookingLink />
      <AppointmentsTable />
    </div>
  );
}
