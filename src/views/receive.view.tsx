import DownloadIcon from "@/components/icons/Download";
import { QRCodeGenerator } from "@/components/qrcode";
import { getMerchantSignature } from "@/services/ghotelWallet.service";
import { Button, Input } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import { useCallback, useEffect, useState } from "react";
import { useAccount } from "wagmi";

export default function ReceiveView() {
  const [value, setValue] = useState("");

  const { address } = useAccount();

  const { data } = useQuery({
    queryKey: ["signature", address],
    queryFn: ({ queryKey }) => {
      if (!queryKey[1]) return;
      return getMerchantSignature(queryKey[1]);
    },
    refetchInterval: 5000,
  });

  const handleGenerateValue = useCallback(() => {
    if (!address || !value) return "";
    return `${address}-${value}`;
  }, [address, value]);

  useEffect(() => {
    if (!data) return;
    console.log(data);
    // execute the QR code generator
  }, [data]);
  return (
    <div className="w-full bg-white px-8 py-6 rounded-xl border-[#E9EBED] font-medium text-sm">
      <div className="text-center mb-4">Receive</div>
      <div className="mb-1 font-normal">Amount</div>
      <Input
        variant="bordered"
        placeholder="Enter amount"
        classNames={{ inputWrapper: "border-[0.5px]" }}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="my-8 text-center space-y-3 flex flex-col items-center">
        <div>
          <div className="text-lg font-semibold">Receiving</div>
          <div className="text-xs text-tertiary font-normal">
            Scan the QR code to receive
          </div>
        </div>
        <QRCodeGenerator value={handleGenerateValue()} />
      </div>

      <Button
        startContent={<DownloadIcon />}
        variant="bordered"
        className="w-full border-[0.5px]"
      >
        Save QR code
      </Button>
    </div>
  );
}
