import { QRCodeSVG } from "qrcode.react";

type MomoQRProps = {
  phone: string;
  amount?: number;
  comment?: string;
  size?: number;
};

const MomoQR: React.FC<MomoQRProps> = ({
  phone,
  amount,
  comment,
  size = 220,
}) => {
  let momoLink = `https://nhantien.momo.vn/${phone}`;
  if (amount || comment) {
    momoLink += "?";
    if (amount) momoLink += `amount=${amount}`;
    if (amount && comment) momoLink += "&";
    if (comment) momoLink += `comment=${encodeURIComponent(comment)}`;
  }

  return <QRCodeSVG value={momoLink} size={size} />;
};

export default MomoQR;
