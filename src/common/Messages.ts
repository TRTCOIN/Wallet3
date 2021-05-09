export default {
  exchangeDHKey: 'msg-exchange-dh-key',
  getInitStatus: 'msg-get-init-status',
  genMnemonic: 'msg-gen-mnemonic',
  saveTmpMnemonic: 'msg-save-tmp-mnemonic',
  setupMnemonic: 'msg-setup-mnemonic',
  verifyPassword: 'msg-verify-password',
  initVerifyPassword: 'msg-init-verify-password',
  promptTouchID: 'msg-prompt-touchid',
  resetSystem: 'msg-reset-system',
  createTransferTx: 'msg-create-transfer-tx',
  fetchAddresses: 'msg-fetch-addresses',
  releaseWindow: 'msg-release-window',
  clearHistory: 'msg-clear-history',

  scanQR: 'msg-scan-qr',
  connectWallet: 'msg-connect-wallet',
  initWindowType: 'msg-init-window-type',
};

export const WcMessages = {
  approveWcSession: (peerId: string, reqid: number) => `wc-approve-session-${peerId}-${reqid}`,
  rejectWcSession: (peerId: string, reqid: number) => `wc-reject-session-${peerId}-${reqid}`,
  approveWcCallRequest: (peerId: string, reqid: number) => `wc-approve-call-${peerId}-${reqid}`,
  rejectWcCallRequest: (peerId: string, reqid: number) => `wc-reject-call-${peerId}-${reqid}`,
};

export interface InitStatus {
  hasMnemonic: boolean;
  touchIDSupported: boolean;
}

export interface InitVerifyPassword {
  verified: boolean;
  addresses: string[];
}

export interface GenMnemonic {
  mnemonic: string;
  address: string;
}

export interface SetupMnemonic {
  success: boolean;
  addresses: string[];
}

export interface TxParams {
  chainId: number;
  from: string;
  to: string;
  value: string;
  gas: number;
  gasPrice: number; // wei
  nonce: number;
  data: string;
}

export interface WCParams {
  peerId: string;
  reqid: number;
}

export interface ConfirmSendTx extends TxParams {
  receipient?: {
    address: string;
    name?: string;
  };
  transferToken?: { symbol: string; decimals: number };
  walletConnect?: WCParams;
}

export interface RequestSignMessage {
  raw: string[];
  walletConnect: WCParams;
}

export type PopupWindowTypes = 'connectDapp' | 'sign' | 'sendTx' | 'scanQR';
