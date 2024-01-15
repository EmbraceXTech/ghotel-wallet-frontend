import { Inter } from "next/font/google";
import { ConnectKitButton } from "connectkit";
import toast from "react-hot-toast";
import { useState } from "react";
import { QRCodeGenerator, QRCodeScanner } from "@/components/qrcode";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [value, setValue] = useState("");
  return (
    <main
      className={`flex min-h-screen flex-col items-center space-y-4 p-24 ${inter.className}`}
    >
      <h1>GHOTEL-WALLET</h1>
      <ConnectKitButton />
      <button onClick={() => toast.success("Here is your toast.")}>
        Tigger Toast
      </button>
      <input
        className="border"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <QRCodeGenerator value={value} />
      <div className="w-1/2">
        {/* <QRCodeScanner /> */}
      </div>
    </main>
  );
}
