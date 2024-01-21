import CopyIcon from "@/components/icons/Copy";
import TokenDisplay from "@/components/asset/TokenDisplay";
import { shortenAddress } from "@/utils/string.util";
import { Button, Chip } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import VoucherDisplay from "@/components/asset/VoucherDisplay";
import toast from "react-hot-toast";
import WalletIcon from "@/components/icons/Wallet";
import { useTokenBalance } from "@/hooks/useTokenBalance";
import { TOKEN_DISPLAY } from "@/constants/tokenDisplay.constant";

export default function HomeView() {
  const { address } = useAccount();
  const [isClient, setIsClient] = useState(false);
  const { balances, totalBalance } = useTokenBalance();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (isClient)
    return (
      <div className="w-full space-y-2">
        <div className="w-full bg-primary rounded-2xl py-4 px-4">
          <div className="bg-white rounded-2xl w-full">
            <div className="p-4 space-y-1">
              <div className="text-tertiary text-sm font-normal">
                Wallet Address
              </div>
              <div className="flex justify-between items-center">
                <div className="flex space-x-1">
                  <WalletIcon />
                  <div>{shortenAddress(address || "")}</div>
                </div>
                <Button
                  variant="light"
                  className="w-fit"
                  onClick={() => {
                    navigator.clipboard.writeText(address ?? "");
                    toast.success("Copied to clipboard");
                  }}
                >
                  <CopyIcon />
                </Button>
              </div>
            </div>
            <hr />
            <div className="p-4">
              <div className="text-sm text-tertiary">Total balance</div>
              <div className="text-xl font-bold">
                ${(+totalBalance).toLocaleString()}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white py-4 px-8 rounded-2xl text-sm font-medium space-y-4">
          <div>Tokens</div>
          {balances &&
            balances.length === TOKEN_DISPLAY.length &&
            TOKEN_DISPLAY.map((token, key) => (
              <div key={key}>
                <TokenDisplay
                  token={token.token}
                  path={token.path}
                  amount={+(balances[key] ?? 0)}
                  price={+(balances[key] ?? 0)}
                />
              </div>
            ))}
        </div>
        <div className="bg-white py-4 px-8 rounded-2xl text-sm font-medium space-y-2">
          <div className="flex space-x-1">
            <div>Voucher</div>
            <Chip size="sm" color="primary">
              3
            </Chip>
          </div>
          <VoucherDisplay />
        </div>
      </div>
    );
}
