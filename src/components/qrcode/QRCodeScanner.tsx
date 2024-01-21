import { QrScanner } from "@yudiel/react-qr-scanner";

interface QRCodeScannerProps {
  handleQRCodeScanner: (result: string) => void;
  isProcess: boolean;
}

export default function QRCodeScanner({
  handleQRCodeScanner,
  isProcess,
}: QRCodeScannerProps) {
  return (
    <QrScanner
      onDecode={(result) => handleQRCodeScanner(result)}
      onError={(error) => console.log(error?.message)}
      containerStyle={{ borderRadius: 12 }}
      stopDecoding={isProcess}
    />
  );
}
