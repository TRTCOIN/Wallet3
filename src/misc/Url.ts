const Explorers = new Map<number, string>([
  [1, 'https://etherscan.io'],
  [3, 'https://ropsten.etherscan.io'],
  [4, 'https://rinkeby.etherscan.io'],
  [5, 'https://goerli.etherscan.io'],
  [42, 'https://kovan.etherscan.io'],
  [10, 'https://optimistic.etherscan.io'],
  [69, 'https://kovan-optimistic.etherscan.io'],
  [42161, 'https://explorer.offchainlabs.com'],

  [56, 'https://bscscan.com'],
  [100, 'https://blockscout.com/xdai/mainnet'],
  [128, 'https://hecoinfo.com'],
  [66, 'https://www.oklink.com/okexchain'],

  [137, 'https://polygonscan.com'],
  [250, 'https://ftmscan.com'],
  [80001, 'https://explorer-mumbai.maticvigil.com'],
]);

export function convertTxToUrl(tx: { chainId: number; hash?: string }) {
  const url = `${Explorers.get(tx.chainId)}/tx/${tx.hash}`;
  return url;
}

export function catUrl(chainId: number, tail: string) {
  const url = `${Explorers.get(chainId)}${tail}`;
  return url;
}

export function convertToAccountUrl(chainId: number, address: string) {
  return `${Explorers.get(chainId)}/address/${address}`;
}
