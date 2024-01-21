import { QrScanner } from "@yudiel/react-qr-scanner";

// TODO: Implement this component -> https://www.npmjs.com/package/@yudiel/react-qr-scanner
export default function QRCodeScanner() {
  return (
    <QrScanner
      onDecode={(result) => console.log(result)}
      onError={(error) => console.log(error?.message)}
      stopDecoding={false}
      containerStyle={{ borderRadius: 12 }}
    />
  );
}
