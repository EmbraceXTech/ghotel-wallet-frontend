import { Inter } from "next/font/google";
import { useCallback } from "react";

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

  return (
    <main
      className={`flex flex-col items-center w-full py-3 h-full ${inter.className}`}
    >
      <div className="lg:w-[500px] w-[380px] h-full">{Body()}</div>
    </main>
  );
}
