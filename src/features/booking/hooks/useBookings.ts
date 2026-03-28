"use client";

import { IBooking, GroupedBooking, TableRow } from "../types";
import { getBookings } from "../booking.service";
import { useQuery } from "react-query";
import { useMemo } from "react";

const formatDate = (dateStr?: Date) => {
  if (!dateStr) return "Không rõ ngày";

  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return "Không rõ ngày";

  return `${String(d.getDate()).padStart(2, "0")}/${String(
    d.getMonth() + 1,
  ).padStart(2, "0")}/${d.getFullYear()}`;
};

const groupByDate = (data: IBooking[]): GroupedBooking[] => {
  const map: Record<string, GroupedBooking> = {};

  for (const item of data) {
    const date = formatDate(item.pick_container_route_point?.commitment_date);

    if (!map[date]) {
      map[date] = {
        date,
        items: [],
      };
    }

    map[date].items.push(item);
  }

  return Object.values(map);
};

const buildTableData = (groups: GroupedBooking[]): TableRow[] => {
  const result: TableRow[] = [];

  for (const group of groups) {
    result.push({
      type: "group",
      key: `group-${group.date}`,
      date: group.date,
      count: group.items.length,
    });

    for (const item of group.items) {
      result.push({
        ...item,
        type: "item",
        key: item.shipment_id,
      });
    }
  }

  return result;
};

export function useBookings() {
  const { data, isFetching } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await getBookings({
        date_range: {
          start_date: "2025-11-30T17:00:00.000Z",
          end_date: "2025-12-08T16:59:59.999Z",
        },
      });
      return res;
    },
    initialData: [],
  });

  return useMemo(() => {
    const grouped = groupByDate(data ?? []);
    const tableData = buildTableData(grouped);

    return {
      grouped,
      tableData,
    };
  }, [data]);
}
