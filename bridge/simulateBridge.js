export function simulateBridge(fromChain, toChain, amount) {
  const fee = amount * 0.001; // Placeholder fee calc

  return {
    fromChain,
    toChain,
    amount,
    estimatedFee: fee,
    estimatedReceived: amount - fee
  };
}

