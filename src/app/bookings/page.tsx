"use client";
import { useEffect } from "react";

import { getBookings } from "@/features/booking/booking.service";

export default function BookingPage() {
  useEffect(() => {
    const fetchData = async () => {
      const mockupFilter = {
        date_range: {
          start_date: "2025-11-30T17:00:00.000Z",
          end_date: "2025-12-08T16:59:59.999Z",
        },
      };
      const response = await getBookings(mockupFilter);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Booking List</h1>
    </div>
  );
}
