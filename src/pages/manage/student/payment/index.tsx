"use client";

import { t } from "@lingui/macro";
import { Box, Typography, Stack } from "@mui/material";
import { useState } from "react";

import AdminLayout from "@/layouts/admin-layout/AdminLayout";
import PaymentStatusFilter from "@/modules/ManagementPage/Student/Payments/PaymentStatusFilter";
import PaymentSummary from "@/modules/ManagementPage/Student/Payments/PaymentSummary";
import StudentPaymentTable, {
  StudentPayment,
} from "@/modules/ManagementPage/Student/Payments/PaymentTable";

const DUMMY_PAYMENTS: StudentPayment[] = [
  {
    id: "1",
    invoiceNo: "INV-20230701-001",
    date: "2024-07-01",
    className: "IELTS Foundation",
    amount: 2000000,
    status: "PAID",
    method: "BANK",
    note: "July tuition",
  },
  {
    id: "2",
    invoiceNo: "INV-20230701-002",
    date: "2024-07-10",
    className: "Business English",
    amount: 2500000,
    status: "UNPAID",
    method: "CASH",
    note: "",
  },
  {
    id: "3",
    invoiceNo: "INV-20230701-003",
    date: "2024-06-05",
    className: "Speaking Club",
    amount: 1800000,
    status: "REFUNDED",
    method: "MOMO",
    note: "Cancelled",
  },
  {
    id: "4",
    invoiceNo: "INV-20230701-004",
    date: "2024-06-18",
    className: "IELTS Foundation",
    amount: 2100000,
    status: "OVERDUE",
    method: "BANK",
    note: "Pay by 20/6",
  },
];

const StudentPaymentPage = () => {
  const [status, setStatus] = useState("ALL");

  const filteredPayments =
    status === "ALL"
      ? DUMMY_PAYMENTS
      : DUMMY_PAYMENTS.filter((p) => p.status === status);

  return (
    <Box maxWidth="lg" mx="auto" py={3}>
      <Typography variant="h4" fontWeight={700} mb={2}>
        {t`Payment History`}
      </Typography>
      <PaymentSummary data={filteredPayments} />
      <Stack direction="row" spacing={2} mb={2}>
        <PaymentStatusFilter value={status} onChange={setStatus} />
      </Stack>
      <StudentPaymentTable data={filteredPayments} />
    </Box>
  );
};

StudentPaymentPage.Layout = AdminLayout;
export default StudentPaymentPage;
