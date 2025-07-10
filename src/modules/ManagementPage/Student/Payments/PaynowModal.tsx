import PaymentIcon from "@mui/icons-material/Payment";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography,
  Stack,
  Divider,
} from "@mui/material";
import { useState } from "react";

import PaymentQRSection from "./PaymentQRSection";
import PaymentSuccessStep from "./PaymentSuccessStep";
import { StudentPayment } from "./PaymentTable";

type Props = {
  open: boolean;
  onClose: () => void;
  payment: StudentPayment;
};

export default function PayNowModal({ open, onClose, payment }: Props) {
  const [showSuccess, setShowSuccess] = useState(false);

  if (showSuccess) {
    return (
      <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
        <PaymentSuccessStep
          onClose={() => {
            setShowSuccess(false);
            onClose();
          }}
        />
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>
        <Stack direction="row" alignItems="center" gap={1}>
          <PaymentIcon color="primary" fontSize="large" />
          <Box>
            <Typography variant="h6" fontWeight={700}>
              Pay Invoice
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Scan the QR or copy info below to pay
            </Typography>
          </Box>
        </Stack>
      </DialogTitle>
      <DialogContent>
        <Stack spacing={2} alignItems="center" sx={{ mb: 1 }}>
          <Typography variant="h5" fontWeight={700} color="primary">
            {payment.amount.toLocaleString()}₫
          </Typography>
          <Divider flexItem sx={{ my: 1 }} />
          <Stack spacing={0.5} width="100%">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography color="text.secondary">Invoice</Typography>
              <Typography fontWeight={500}>{payment.invoiceNo}</Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography color="text.secondary">Class</Typography>
              <Typography fontWeight={500}>{payment.className}</Typography>
            </Box>
          </Stack>
        </Stack>
        <PaymentQRSection
          method={payment.method}
          amount={payment.amount}
          invoiceNo={payment.invoiceNo}
        />
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center" }}>
        <Button
          onClick={() => setShowSuccess(true)}
          variant="contained"
          color="primary"
        >
          I have paid
        </Button>
        <Button onClick={onClose} variant="outlined" color="inherit">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
