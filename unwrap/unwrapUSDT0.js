import { ethers } from "ethers";
import { getRpcEndpoint } from "../chains/rpcendpoints.js";

/*
  unwrapUSDT0(wallet, chainId, contractAddress, amount)

  amount = number (in human readable form, e.g. "10")
*/

export async function unwrapUSDT0(wallet, chainId, contractAddress, amount) {
  const rpc = getRpcEndpoint(chainId);
  const provider = new ethers.JsonRpcProvider(rpc);
  const signer = wallet.connect(provider);

  // Temporary ABI until you give real contract ABI
  const abi = [
    "function unwrap(uint256 amount) public returns (bool)"
  ];

  const contract = new ethers.Contract(contractAddress, abi, signer);

  // Convert amount to wei (18 decimals assumed, update later)
  const amountWei = ethers.parseEther(String(amount));

  const tx = await contract.unwrap(amountWei);
  return tx;
}

