export const RPC_ENDPOINTS = {
  988: "https://rpc.mainnet.stable.xyz",
  2201: "https://rpc.testnet.stable.xyz",
  1: "https://eth-mainnet.public.blastapi.io",
  11155111: "https://ethereum-sepolia-rpc.publicnode.com",
};

// Helper to fetch RPC for any chain ID
export const getRpcEndpoint = (chainId) => {
  const url = RPC_ENDPOINTS[chainId];
  if (!url) {
    throw new Error(`No RPC endpoint configured for chain ID ${chainId}`);
  }
  return url;
};
