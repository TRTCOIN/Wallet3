import Tokens from '../../misc/Tokens';

const KnownAddresses = {
  '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D': 'Uniswap V2',
  '0xE592427A0AEce92De3Edee1F18E0157C05861564': 'Uniswap V3',
  '0x7Be8076f4EA4A4AD08075C2508e481d6C946D12b': 'OpenSea',
  '0x11111112542D85B3EF69AE05771c2dCCff4fAa26': '1inch V3',
  '0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F': 'SushiSwap',
  '0x722122dF12D4e14e13Ac3b6895a86e84145b6967': 'Tornado.Cash',
  '0xd1917932A7Db6Af687B523D5Db5d7f5c2734763F': 'Bulksender.app',
  '0xA0c68C638235ee32657e8f720a23ceC1bFc77C77': 'Polygon (Matic): Bridge',
  '0xDef1C0ded9bec7F1a1670819833240f027b25EfF': '0x: Exchange Proxy',
  '0x881D40237659C251811CEC9c364ef91dC08D300C': 'Metamask Router',
  '0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9': 'Aave',
  '0x3FDA67f7583380E67ef93072294a7fAc882FD7E7': 'Compound',
  '0x3E66B66Fd1d0b02fDa6C811Da9E0547970DB2f21': 'Balancer',
  '0x6317C5e82A06E1d8bf200d21F4510Ac2c038AC81': 'Balancer',
  '0xd061D61a4d941c39E5453435B6345Dc261C2fcE0': 'Curve.fi: Token Minter',
  '0xA5407eAE9Ba41422680e2e00537571bcC53efBfD': 'Curve.fi: sUSD v2 Swap',
  '0x7fC77b5c7614E1533320Ea6DDc2Eb61fa00A9714': 'Curve.fi: sBTC Swap',
  '0x93054188d876f558f4a66B2EF1d97d16eDf0895B': 'Curve.fi: REN Swap',
  '0x73aB2Bd10aD10F7174a1AD5AFAe3ce3D991C5047': 'Curve.fi: Ren Adapter 3',
  '0xbEbc44782C7dB0a1A60Cb6fe97d0b483032FF1C7': 'Curve.fi: 3Pool',
  '0xDeBF20617708857ebe4F679508E7b7863a8A8EeE': 'Curve.fi: Aave Pool',
  '0xc5424B857f758E906013F3555Dad202e4bdB4567': 'Curve.fi: sETH Pool',
  '0x45F783CCE6B7FF23B2ab2D70e416cdb7D6055f51': 'Curve.fi: y Swap',
  '0xDC24316b9AE028F1497c275EB9192a3Ea0f67022': 'Curve.fi: stETH Pool',
  '0x32666B64e9fD0F44916E1378Efb2CFa3B3B96e80': 'RenBridge',
  '0x1E0447b19BB6EcFdAe1e4AE1694b0C3659614e4e': 'dYdX',
  '0x3A22dF48d84957F907e67F4313E3D43179040d6E': 'Ygov.finance',
  '0x61935CbDd02287B511119DDb11Aeb42F1593b7Ef': '0x: Exchange v3',
  '0x5d22045DAcEAB03B158031eCB7D9d06Fad24609b': 'DeversiFi 2',
  '0x818E6FECD516Ecc3849DAf6845e3EC868087B755': 'Kyber',
  '0x9AAb3f75489902f3a48495025729a0AF77d4b11e': 'Kyber',
  '0x0BABA1Ad5bE3a5C0a66E7ac838a129Bf948f1eA4': 'Loopring: Exchange v2',
  '0xa356867fDCEa8e71AEaF87805808803806231FdC': 'DODOEX',
  '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F': 'Synthetix',
  '0x10ED43C718714eb63d5aA57B78B54704E256024E': 'PancakeSwap',
  '0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff': 'QuickSwap Router',
  '0xbEadf48d62aCC944a06EEaE0A9054A90E5A7dc97': 'Aave Polygon',
  '0x1C232F01118CB8B424793ae03F870aa7D0ac7f77': 'Honeyswap',
};

Tokens.forEach((t) => (KnownAddresses[t.address] = t.symbol));

export default KnownAddresses;
