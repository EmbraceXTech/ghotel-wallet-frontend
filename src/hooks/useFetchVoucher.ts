import {
  useAccount,
  useChainId,
  useContractRead,
  useContractReads,
} from "wagmi";

import { PBMManagerContract, PBMContract } from "@/configs/contract.config";
import { useMemo } from "react";
import { formatEther } from "viem";

const voucherId = [0, 1, 2];

export const useFetchVoucer = () => {
  const { address } = useAccount();
  const chainId = useChainId();
  const pbmManagerDetail = voucherId.map((id) => ({
    ...PBMManagerContract(chainId),
    functionName: "getTokenDetails",
    args: [id],
  }));
  const pbmBalanceBatch = voucherId.map((id) => ({
    ...PBMContract(chainId),
    functionName: "balanceOf",
    args: [address ?? "0x", id],
  }));
  const {
    isLoading,
    data: data1,
    isError,
  } = useContractReads({
    contracts: pbmManagerDetail,
  });
  const { data: data2 } = useContractReads({
    contracts: pbmBalanceBatch,
  });

  const data = useMemo(() => {
    if (!data1 || !data2 || data1.length !== data2.length) return;
    return data1.map((item, key) => {
      return {
        ...(item.result as any),
        balance: formatEther(data2[key].result as bigint),
        voucherId: voucherId[key],
      };
    });
  }, [data1, data2]);

  return { data, isLoading, isError };
};
