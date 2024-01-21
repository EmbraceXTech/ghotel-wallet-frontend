import { PBMABI } from "@/constants/abis/PBM.abi";
import { addressMapping } from "./address.config";
import { PBMManagerABI } from "@/constants/abis/PBMManager.abi";
import { erc20ABI } from "wagmi";
import { Payment_ABI } from "@/constants/abis/Payment.abi";
import { GHO_ABI } from "@/constants/abis/GHO.abi";

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
const PaymentContract = (chainId: number) => {
  return {
    address: addressMapping(chainId).Payment,
    abi: Payment_ABI,
  };
};

const GHOContract = (chainId: number) => {
  return {
    address: addressMapping(chainId).GHO,
    abi: GHO_ABI,
  };
};


const Contract = (chainId: number) => {
  return [
    PBMContract(chainId),
    PBMManagerContract(chainId),
    ERC20Contract(chainId, "GHO"), // Default GHO
  ];
};

export { PBMContract, PBMManagerContract, ERC20Contract, PaymentContract, GHOContract };

export default Contract;
