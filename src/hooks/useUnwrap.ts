import { useAccount, useChainId, useContractWrite } from "wagmi";

import { PBMContract } from "@/configs/contract.config";

export const useUnwrap = () => {
  const chainId = useChainId();
  // TODO: https://wagmi.sh/react/api/hooks/useWriteContract
  // Write: unwrap PBM to receive stablecoin (PBM) -> unwrap(address from,address to,uint256 tokenId,uint256 amount,bytes memory data)
  // NOTE: how to get id ???, data is signature
  // Solution: fix constant id, subgraph, or get from government db
  const { isLoading, writeAsync, isError } = useContractWrite({
    ...PBMContract(chainId),
    functionName: "unwrap",
    // args: [address, address, 0, 0, ""],
  });

  return { isLoading, isError, unwrap: writeAsync };
};
