import { QRCodeSVG } from "qrcode.react";
import React from "react";

export function getVietQRPayload({
  bankId,
  accountNo,
  accountName,
  amount,
  addInfo,
}: {
  bankId: string;
  accountNo: string;
  accountName: string;
  amount?: number;
  addInfo?: string;
}) {
  let payload = `bank:${bankId}|acc:${accountNo}|name:${accountName}`;
  if (amount) payload += `|amount:${amount}`;
  if (addInfo) payload += `|info:${addInfo}`;
  return payload;
}

type VietQRProps = {
  bankId: string;
  accountNo: string;
  accountName: string;
  amount?: number;
  addInfo?: string;
  size?: number;
};

const VietQR: React.FC<VietQRProps> = ({
  bankId,
  accountNo,
  accountName,
  amount,
  addInfo,
  size = 220,
}) => {
  const qrData = getVietQRPayload({
    bankId,
    accountNo,
    accountName,
    amount,
    addInfo,
  });

  return <QRCodeSVG value={qrData} size={size} />;
};

export default VietQR;
