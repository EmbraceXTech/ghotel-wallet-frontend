import { PBMABI } from "@/constants/abis/PBM.abi";
import { addressMapping } from "./address.config";
import { PBMManagerABI } from "@/constants/abis/PBMManager.abi";
import { erc20ABI } from "wagmi";

const PBMContract = (chainId: number) => {
  return {
    address: addressMapping(chainId).PBM,
    abi: PBMABI,
  };
};

const PBMManagerContract = (chainId: number) => {
  return {
    address: addressMapping(chainId).PBMManger,
    abi: PBMManagerABI,
  };
};

const ERC20Contract = (chainId: number, token: "GHO" | "USDT" | "DAI") => {
  return {
    address: addressMapping(chainId)[token],
    abi: erc20ABI,
  };
};

const Contract = (chainId: number) => {
  return [
    PBMContract(chainId),
    PBMManagerContract(chainId),
    ERC20Contract(chainId, 'GHO'), // Default GHO
  ];
};

export { PBMContract, PBMManagerContract, ERC20Contract };

export default Contract;
