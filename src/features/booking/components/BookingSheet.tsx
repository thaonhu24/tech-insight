"use client";

import { Table } from "antd";
import { useBookings } from "../hooks/useBookings";

function BookingSheet() {
  const { tableData } = useBookings();

  const columns = [
    {
      title: "Mã booking",
      dataIndex: "reference_code",
      render: (value, record) => {
        if (record.type === "group") {
          return (
            <div style={{ fontWeight: 600 }}>
              ▼ {record.date} ({record.count} đơn hàng)
            </div>
          );
        }
        return value;
      },
    },
    {
      title: "Container",
      dataIndex: "container_number",
      render: (v, r) => (r.type === "group" ? null : v || "-"),
    },
    {
      title: "Khách hàng",
      render: (_, r) => (r.type === "group" ? null : r.customer?.name),
    },
  ];

  console.log(
    "🚀 ~ file: BookingSheet.tsx:17 ~ BookingSheet ~ tableData:",
    tableData,
    columns,
  );
  return <Table columns={columns} dataSource={tableData} pagination={false} />;
}

export default BookingSheet;
