import { NETWORKS } from "../chains/networks.js";

export function isSupportedChain(chainId) {
  return NETWORKS.ALL.includes(chainId);
}

