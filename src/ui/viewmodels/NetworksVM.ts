import { getProviderByChainId, markRpcFailed } from '../../common/Provider';
import { makeAutoObservable, runInAction } from 'mobx';

import Messages from '../../common/Messages';
import ipc from '../bridges/IPC';
import store from 'storejs';

export interface INetwork {
  symbol: string;
  network: string;
  chainId: number;
  color: string;
  test?: boolean;
  order?: number;
}

const Keys = {
  currentNetworkId: () => `currentNetworkId`,
};

export class NetworksVM {
  currentChainId = 1;

  get currentNetwork() {
    return Networks.find((n) => n.chainId === this.currentChainId);
  }

  get currentProvider() {
    return getProviderByChainId(this.currentChainId);
  }

  constructor() {
    makeAutoObservable(this);
    this.setCurrentChainId(store.get(Keys.currentNetworkId()) || 1);
  }

  setCurrentChainId(value: number) {
    if (this.currentChainId === value) return;

    this.currentChainId = value;
    this.currentProvider.ready;
    store.set(Keys.currentNetworkId(), value);
    ipc.invoke(Messages.changeChainId, value);
  }

  reportFailedRpc(network: number, rpc: string) {
    markRpcFailed(network, rpc);
  }
}

export const PublicNetworks: INetwork[] = [
  {
    symbol: 'ETH',
    network: 'Ethereum',
    chainId: 1,
    color: '#6186ff',
    order: 1,
  },
  {
    symbol: 'MATIC',
    network: 'Polygon',
    chainId: 137,
    color: '#8247E5',
    order: 2,
  },
  {
    symbol: 'xDAI',
    network: 'xDAI',
    chainId: 100,
    color: '#48A9A6',
    order: 3,
  },
  {
    symbol: 'FTM',
    chainId: 250,
    network: 'Fantom',
    color: '#1969FF',
    order: 4,
  },
  {
    symbol: 'HT',
    chainId: 128,
    network: 'HECO',
    order: 6,
    color: '#01943f',
  },
  {
    symbol: 'OKT',
    chainId: 66,
    network: 'OKEx',
    order: 7,
    color: '#24c',
  },
  {
    symbol: 'BSC',
    network: 'BSC',
    chainId: 56,
    color: '#f3ba2f',
    order: 5,
  },
];

export const Testnets: INetwork[] = [
  {
    symbol: 'ETH',
    network: 'Ropsten',
    chainId: 3,
    color: '#6186ff',
    test: true,
  },
  {
    symbol: 'ETH',
    network: 'Rinkeby',
    chainId: 4,
    color: '#6186ff',
    test: true,
  },
  {
    symbol: 'ETH',
    network: 'Goerli',
    chainId: 5,
    color: '#6186ff',
    test: true,
  },
  {
    symbol: 'ETH',
    network: 'Kovan',
    chainId: 42,
    color: '#6186ff',
    test: true,
  },
  {
    symbol: 'MATIC',
    network: 'Mumbai',
    chainId: 80001,
    color: '#8247E5',
    test: true,
  },
];

export const Networks: INetwork[] = [...PublicNetworks, ...Testnets];

export default new NetworksVM();
