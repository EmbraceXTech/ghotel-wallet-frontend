import axios from "axios";

const getMerchantSignature = async (walletAddress: string) => {
  try {
    const { data } = await axios.get(`/api/receive/${walletAddress}`);
    return data;
  } catch (err) {
    console.log(err);
  }
};

const sendSignature = (walletAddress: string, data: any) => {
  return axios.post(`/api/send/${walletAddress}`, data);
};

export { sendSignature, getMerchantSignature };
