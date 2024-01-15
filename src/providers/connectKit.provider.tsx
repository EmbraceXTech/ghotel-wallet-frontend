import {
  ConnectKitProvider,
  getDefaultConfig,
} from "connectkit";
import { WagmiConfig, createConfig, sepolia } from "wagmi";

const chains = [sepolia];

const config = createConfig(
  getDefaultConfig({
    walletConnectProjectId: process.env.WALLETCONNECT_PROJECT_ID || "",
    chains,
    // TODO: Update these values
    appName: "Your App Name",
    appDescription: "Your App Description",
    appUrl: "https://family.co", // your app's url
    appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  })
);

export default function ConnectKitProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider>{children}</ConnectKitProvider>
    </WagmiConfig>
  );
}
