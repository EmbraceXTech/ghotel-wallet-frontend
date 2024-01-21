import { QRCodeScanner } from "@/components/qrcode";

export default function PayView() {
  return (
    <div className="w-full flex flex-col h-full bg-white p-1 rounded-xl border-[#E9EBED]">
      <div className="my-3 font-medium text-sm text-center">Pay</div>
      <QRCodeScanner />
    </div>
  );
}
