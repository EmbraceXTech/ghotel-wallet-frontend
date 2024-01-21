import { Inter } from "next/font/google";
import { ConnectKitButton } from "connectkit";
import toast from "react-hot-toast";
import { useCallback, useState } from "react";
import { QRCodeGenerator, QRCodeScanner } from "@/components/qrcode";

// import { useSignMessage } from "wagmi";
import { signMessage } from "@wagmi/core";
import { useBaseStore } from "@/stores/base.store";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { currentPage } = useBaseStore();

  const body = useCallback(() => {
    switch (currentPage) {
      case "home":
        return <div>Home</div>;
      case "history":
        return <div>History</div>;
      case "pay":
        return <div>Pay</div>;
      case "receive":
        return <div>Receive</div>;
      default:
        return <div />;
    }
  }, [currentPage]);

  // const [value, setValue] = useState("");
  // const { signMessage } = useSignMessage();
  // const sign = async () => {
  //   try {
  //     await signMessage({ message: value });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  return (
    <main
      className={`flex flex-col items-center px-24 py-12 ${inter.className}`}
    >
      {body()}
      {/* <h1>GHOTEL-WALLET</h1>
      <ConnectKitButton />
      <button onClick={() => toast.success("Here is your toast.")}>
        Tigger Toast
      </button>
      <button onClick={() => sign()}>Sign Message</button>
      <input
        className="border"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <QRCodeGenerator value={value} /> */}
      {/* <div className="w-1/2"><QRCodeScanner /></div> */}
    </main>
  );
}
