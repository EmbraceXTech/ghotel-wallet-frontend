import { PBMABI } from "@/constants/abis/PBM.abi";
import { addressMapping } from "./address.config";
import { PBMManagerABI } from "@/constants/abis/PBMManager.abi";

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

const Contract = (chainId: number) => {
  return [PBMContract(chainId), PBMManagerContract(chainId)];
};

export { PBMContract, PBMManagerContract };

export default Contract;
