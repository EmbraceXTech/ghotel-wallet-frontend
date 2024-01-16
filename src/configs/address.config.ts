import { ADDRESS_LIST } from "@/constants/address.constant";

export const addressMapping = (chainId: number) => {
  return ADDRESS_LIST[chainId as keyof typeof ADDRESS_LIST];
};
