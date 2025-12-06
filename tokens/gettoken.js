import tokenList from "./tokenList.json" assert { type: "json" };

export function getToken(chainId, symbol) {
  const tokens = tokenList[String(chainId)] || [];
  return tokens.find((t) => t.symbol.toUpperCase() === symbol.toUpperCase());
}

export function getTokens(chainId) {
  return tokenList[String(chainId)] || [];
}
