import { QRCodeScanner } from "@/components/qrcode";

export default function PayView() {
  return (
    <div className="w-full flex items-center h-full">
      <QRCodeScanner />
    </div>
  );
}
