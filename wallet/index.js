import { ethers } from "ethers";
import { getRpcEndpoint } from "../chains/rpcendpoints.js";

export const createWallet = () => {
  return ethers.Wallet.createRandom();
};

export const importWallet = (privateKey) => {
  try {
    return new ethers.Wallet(privateKey);
  } catch (err) {
    throw new Error("Invalid private key");
  }
};

export const getSigner = (wallet, chainId) => {
  const rpc = getRpcEndpoint(chainId);
  const provider = new ethers.JsonRpcProvider(rpc);
  return wallet.connect(provider);
};

export const sendNative = async (wallet, chainId, to, amountEth) => {
  const signer = getSigner(wallet, chainId);
  const tx = await signer.sendTransaction({
    to,
    value: ethers.parseEther(amountEth),
  });
  return tx;
};

