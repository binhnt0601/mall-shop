import { Box, Stack, Typography } from "@mui/material";

import CopyValue from "@/components/CopyValue";
import MomoQR from "@/components/MomoQR";
import VietQR from "@/components/VietQR";

type Props = {
  method: "BANK" | "MOMO" | string;
  amount: number;
  invoiceNo: string;
};

const BANK_INFO = {
  bankId: "VCB",
  accountNo: "0123456789",
  accountName: "NGUYEN VAN A",
};

const MOMO_INFO = {
  phone: "0905123456",
};

export default function PaymentQRSection({ method, amount, invoiceNo }: Props) {
  if (method === "BANK")
    return (
      <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
        <VietQR
          bankId={BANK_INFO.bankId}
          accountNo={BANK_INFO.accountNo}
          accountName={BANK_INFO.accountName}
          amount={amount}
          addInfo={`Pay tuition ${invoiceNo}`}
        />
        <Typography
          variant="caption"
          color="text.secondary"
          mt={1}
          textAlign="center"
        >
          Scan VietQR code with your banking app.
        </Typography>
        <Stack spacing={1} width="100%" alignItems="center" mt={1}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography fontWeight={500}>Account No:</Typography>
            <Typography>{BANK_INFO.accountNo}</Typography>
            <CopyValue value={BANK_INFO.accountNo} label="Account No" />
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography fontWeight={500}>Account Name:</Typography>
            <Typography>{BANK_INFO.accountName}</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography fontWeight={500}>Transfer Info:</Typography>
            <Typography>{`Pay tuition ${invoiceNo}`}</Typography>
            <CopyValue
              value={`Pay tuition ${invoiceNo}`}
              label="Transfer Info"
            />
          </Stack>
        </Stack>
      </Box>
    );
  if (method === "MOMO")
    return (
      <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
        <MomoQR
          phone={MOMO_INFO.phone}
          amount={amount}
          comment={`Pay tuition ${invoiceNo}`}
        />
        <Typography
          variant="caption"
          color="text.secondary"
          mt={1}
          textAlign="center"
        >
          Scan Momo QR to pay.
        </Typography>
        <Stack spacing={1} width="100%" alignItems="center" mt={1}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography fontWeight={500}>Phone:</Typography>
            <Typography>{MOMO_INFO.phone}</Typography>
            <CopyValue value={MOMO_INFO.phone} label="Phone" />
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography fontWeight={500}>Comment:</Typography>
            <Typography>{`Pay tuition ${invoiceNo}`}</Typography>
            <CopyValue value={`Pay tuition ${invoiceNo}`} label="Comment" />
          </Stack>
        </Stack>
      </Box>
    );
  return (
    <Typography color="text.secondary" align="center">
      No QR available for this payment method.
    </Typography>
  );
}
