import { useAccount, useChainId, useContractReads } from "wagmi";

import Contract from "@/configs/contract.config";

export const useFetchVoucer = () => {
  const { address } = useAccount();
  const chainId = useChainId();
  // TODO: https://wagmi.sh/react/api/hooks/useReadContracts
  // Fetch:
  // 1. get PBM detail (PBMManager) -> getTokenDetails(uint256 _tokenId)
  // 2. get PBM Amount in each address (PBM) -> balanceOfBatch(address[] accounts, uint256[] ids) or balanceOf(address account, uint256 id)
  // NOTE: how to get id ???
  // Solution: fix constant id, subgraph, or get from government db
  const { isLoading, data, isError } = useContractReads({ contracts: [] });
  return { data, isLoading, isError };
};
