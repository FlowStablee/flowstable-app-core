import { ethers } from "ethers";
import { getRpcEndpoint } from "../chains/rpcendpoints.js";

export function getSigner(wallet, chainId) {
  const rpc = getRpcEndpoint(chainId);
  const provider = new ethers.JsonRpcProvider(rpc);
  return wallet.connect(provider);
}

// Send native tokens (ETH, STABLE, TESTNET)
export async function sendNative(wallet, chainId, to, amountEth) {
  const signer = getSigner(wallet, chainId);
  const tx = await signer.sendTransaction({
    to,
    value: ethers.parseEther(amountEth),
  });
  return tx;
}
