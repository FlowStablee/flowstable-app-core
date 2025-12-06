import { ethers } from "ethers";

export function importWallet(privateKey) {
  try {
    return new ethers.Wallet(privateKey);
  } catch {
    throw new Error("Invalid private key");
  }
}

