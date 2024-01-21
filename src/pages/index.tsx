import { Inter } from "next/font/google";
import { ConnectKitButton } from "connectkit";
import toast from "react-hot-toast";
import { useCallback, useState } from "react";
import { QRCodeGenerator, QRCodeScanner } from "@/components/qrcode";

// import { useSignMessage } from "wagmi";
import { signMessage } from "@wagmi/core";
import { useBaseStore } from "@/stores/base.store";
import HomeView from "@/views/home.view";
import HistoryView from "@/views/history.view";
import PayView from "@/views/pay.view";
import ReceiveView from "@/views/receive.view";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { currentPage } = useBaseStore();

  const Body = useCallback(() => {
    switch (currentPage) {
      case "home":
        return <HomeView />;
      case "history":
        return <HistoryView />;
      case "pay":
        return <PayView />;
      case "receive":
        return <ReceiveView />;
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
      className={`flex flex-col items-center w-full py-3 h-full ${inter.className}`}
    >
      <div className="lg:w-[500px] w-[380px] h-full">{Body()}</div>

      {/* <h1>GHOTEL-WALLET</h1>
      <ConnectKitButton />
      <button onClick={() => toast.success("Here is your toast.")}>
        Tigger Toast
      </button>
      <button onClick={() => sign()}>Sign Message</button>
       */}
    </main>
  );
}
