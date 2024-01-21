import { QRCodeScanner } from "@/components/qrcode";
import { usePay } from "@/hooks/usePay";
import { sendSignature } from "@/services/ghotelWallet.service";
import { useEffect, useState } from "react";
import { useAccount, useSignMessage } from "wagmi";

export default function PayView() {
  const [isProcess, setIsProcess] = useState(false);
  const { signMessage, data, status } = useSignMessage();
  const [tempMerchantAddress, setMerchantAddress] = useState("");
  const { address } = useAccount();

  const { pay } = usePay();

  const handleQRCodeScanner = async (result: string) => {
    if (isProcess) return;
    console.log(result);
    setIsProcess(true);
    const [merchantAddress, price] = result.split("-");
    setMerchantAddress(merchantAddress);
    const token = +price * 0.6;
    const voucher = +price * 0.4;

    console.log(token, voucher);

    // TODO: sign signature
    handleSign(merchantAddress as `0x${string}`, token.toString());

    // TODO: send to server
  };

  const handleSign = async (
    merchantAddress: `0x${string}`,
    tokenPrice: string
  ) => {
    try {
      const res = await pay(merchantAddress, "2", tokenPrice, "0x");
      console.log(res);
      setIsProcess(false);
    } catch (error) {
      console.error(error);
      setIsProcess(false);
    }
  };

  // useEffect(() => {
  //   if (status === "success" && data && address) {
  //     console.log(data);
  //     sendSignature(address, {
  //       signature: data,
  //       merchantAddress: tempMerchantAddress,
  //     });
  //     setIsProcess(false);
  //   }
  // }, [address, data, status, tempMerchantAddress]);
  return (
    <div className="w-full flex flex-col h-full bg-white p-1 rounded-xl border-[#E9EBED]">
      <div className="my-3 font-medium text-sm text-center">Pay</div>
      <QRCodeScanner
        handleQRCodeScanner={handleQRCodeScanner}
        isProcess={isProcess}
      />
    </div>
  );
}
