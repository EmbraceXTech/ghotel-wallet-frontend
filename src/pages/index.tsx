import { Inter } from "next/font/google";
import { ConnectKitButton } from "connectkit";
import toast from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center space-y-3 p-24 ${inter.className}`}
    >
      <h1>GHOTEL-WALLET</h1>
      <ConnectKitButton />
      <button onClick={() => toast.success('Here is your toast.')}>Tigger Toast</button>
    </main>
  );
}
