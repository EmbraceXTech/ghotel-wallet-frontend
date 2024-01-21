import { useAccount, useChainId, useContractWrite } from "wagmi";

import { PBMContract } from "@/configs/contract.config";
import { useCallback } from "react";
import { parseEther } from "viem";

export const usePay = () => {
  const chainId = useChainId();
  const { address } = useAccount();
  const { isLoading, writeAsync, isError } = useContractWrite({
    ...PBMContract(chainId),
    functionName: "safeTransferFrom",
    // args: [address, address, 0, 0, ""],
  });

  const pay = useCallback(
    async (to: `0x${string}`, id: string, amount: string, data: `0x${string}`) => {
      if (!address) return;
      return await writeAsync({ args: [address, to, parseEther(id), parseEther(amount), data] });
    },
    [address, writeAsync]
  );

  return { isLoading, isError, pay };
};
