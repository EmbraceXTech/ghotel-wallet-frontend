import {
  GHOContract,
  PBMContract,
  PaymentContract,
} from "@/configs/contract.config";
import { ethers } from "ethers";
import { readContract } from "@wagmi/core";

export const payWithVoucher = async (
  chainId: number,
  from: `0x${string}`,
  merchantAddress: `0x${string}`,
  otaAddress: `0x${string}`,
  paymentAmount: bigint,
  feeAmount: bigint,
) => {
  try {
    const tokenName = "Gho Token";
    const ghoContract = GHOContract(chainId);
    const paymentContract = PaymentContract(chainId);

    const currentNonce = await readContract({
      address: ghoContract.address,
      abi: ghoContract.abi,
      functionName: "nonces",
      args: [from],
    });
    const nonce = currentNonce;
    const deadline = Math.floor((new Date().valueOf() + 60 * 60 * 1000) / 1000);

    const domain = {
      name: tokenName,
      version: "1",
      chainId: chainId,
      verifyingContract: ghoContract.address,
    };
    const types = {
      Permit: [
        { name: "owner", type: "address" },
        { name: "spender", type: "address" },
        { name: "value", type: "uint256" },
        { name: "nonce", type: "uint256" },
        { name: "deadline", type: "uint256" },
      ],
    };
    const values = {
      owner: from,
      spender: paymentContract.address,
      value: paymentAmount,
      nonce: nonce, //you will get once you import the erc20permit contract
      deadline: deadline, // future timestamp
    };
    const signer = await new ethers.BrowserProvider(
      (window as any)?.ethereum as any
    ).getSigner();
    const signature = await signer.signTypedData(domain, types, values);

    const abiCoder = new ethers.AbiCoder();
    const data = abiCoder.encode(
      [
        "address",
        "address",
        "address",
        "uint256",
        "uint256",
        "address",
        "tuple(uint256,uint256,bytes)",
      ],
      [
        signer.address,
        merchantAddress,
        ghoContract.address,
        paymentAmount,
        feeAmount,
        otaAddress,
        [nonce, deadline, signature],
      ]
    ) as `0x${string}`;
    return data;
  } catch (e) {}
};
