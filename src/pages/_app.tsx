import MainLayout from "@/components/layouts/MainLayout";
import ConnectKitProviderWrapper from "@/providers/connectKit.provider";
import ReactQueryWrapper from "@/providers/react-query.provider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReactQueryWrapper>
      <ConnectKitProviderWrapper>
        <MainLayout>
          <Component {...pageProps} />
          <Toaster />
        </MainLayout>
      </ConnectKitProviderWrapper>
    </ReactQueryWrapper>
  );
}
