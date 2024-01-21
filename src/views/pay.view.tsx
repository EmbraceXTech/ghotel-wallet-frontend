import PayModal from "@/components/modal/payModal";
import { QRCodeScanner } from "@/components/qrcode";
import { usePay } from "@/hooks/usePay";
import { payWithVoucher } from "@/services/encoder.service";
import { useDisclosure } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { parseEther } from "viem";
import { useAccount, useChainId, useSignMessage } from "wagmi";

export default function PayView() {
  const [isProcess, setIsProcess] = useState(false);
  const { signMessage, data, status } = useSignMessage();
  const [tempMerchantAddress, setMerchantAddress] = useState("");
  const { address } = useAccount();
  const chainId = useChainId();
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [transaction, setTransaction] = useState("");

  const { pay } = usePay();

  const handleQRCodeScanner = async (result: string) => {
    if (isProcess) return;
    console.log(result);
    setIsProcess(true);
    const [merchantAddress, price] = result.split("-");
    setMerchantAddress(merchantAddress);
    const token = +price * 0.7;
    const voucher = +price * 0.3;

    console.log(token, voucher);

    // TODO: sign signature
    handleSign(
      merchantAddress as `0x${string}`,
      token.toString(),
      voucher.toString()
    );

    // TODO: send to server
  };

  const handleSign = async (
    merchantAddress: `0x${string}`,
    tokenPrice: string,
    voucherPrice: string
  ) => {
    if (!address) return;
    try {
      const data = await payWithVoucher(
        chainId,
        address,
        merchantAddress,
        merchantAddress,
        parseEther(tokenPrice),
        parseEther("0")
      );
      const res = await pay(merchantAddress, "2", voucherPrice, data || "0x");
      console.log(res);
      setTransaction(res!.hash);
      onOpen();
      setIsProcess(false);
    } catch (error) {
      console.error(error);
      setIsProcess(false);
    }
  };

  useEffect(() => {
    if(isOpen === false) {
      setIsProcess(false);
    }
  }, [isOpen]);

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
      <PayModal isOpen={isOpen} onOpenChange={onOpenChange} hash={transaction} />
    </div>
  );
}
