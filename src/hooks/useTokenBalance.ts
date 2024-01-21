import { useAccount, useChainId, useContractReads } from "wagmi";

import { ERC20Contract } from "@/configs/contract.config";
import { useMemo, useState } from "react";
import { formatUnits } from "viem";

const token = ["GHO", "USDT", "DAI"] as const;

export const useTokenBalance = () => {
  const [totalBalance, setTotalBalance] = useState("0");
  const { address } = useAccount();
  const chainId = useChainId();
  const contractsBalance = token.map((token) => ({
    ...ERC20Contract(chainId, token),
    functionName: "balanceOf",
    args: [address || "0x"],
  }));

  const contractsDecimals = token.map((token) => ({
    ...ERC20Contract(chainId, token),
    functionName: "decimals",
  }));
  const { isLoading, data, isError } = useContractReads({
    contracts: contractsBalance,
  });

  const { data: decimals } = useContractReads({
    contracts: contractsDecimals,
  });

  const balances = useMemo(() => {
    let total = 0;
    if (!data || !decimals) return;
    const _blanaces = data?.map((balance, key) => {
      const _balance = formatUnits(balance.result as bigint, decimals[key].result as number);
      total += Number(_balance);
      return _balance;
    });
    setTotalBalance(total.toString());
    return _blanaces;
  }, [data, decimals]);
  return { data, balances, totalBalance, isLoading, isError };
};
