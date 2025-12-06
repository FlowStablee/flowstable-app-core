import { ethers } from "ethers";

export const formatAddress = (address) => {
  if (!address) return "";
  return address.slice(0, 6) + "..." + address.slice(-4);
};

export const formatEth = (value) => {
  try {
    return Number(ethers.formatEther(value)).toFixed(6);
  } catch {
    return "0.000000";
  }
};

export const parseEth = (value) => {
  try {
    return ethers.parseEther(String(value));
  } catch {
    throw new Error("Invalid amount");
  }
};

