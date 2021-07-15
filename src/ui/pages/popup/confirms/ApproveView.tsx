import React, { useEffect } from 'react';

import { ConfirmVM } from '../../../viewmodels/popups/ConfirmVM';
import { CryptoIcons } from '../../../misc/Icons';
import Feather from 'feather-icons-react';
import KnownAddresses from '../../../misc/KnownAddresses';
import Shell from '../../../bridges/Shell';
import { convertToAccountUrl } from '../../../../misc/Url';
import { formatAddress } from '../../../misc/Formatter';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';

interface Props {
  confirmVM: ConfirmVM;
  onReject?: () => void;
  onContinue?: () => void;
}

export default observer(({ confirmVM, onReject, onContinue }: Props) => {
  const { approveToken, tokenSymbol, gas, gasPrice, maxFee, nonce, totalValue, networkSymbol, verifiedName, chainId } =
    confirmVM;
  const { t } = useTranslation();

  useEffect(() => {
    window.resizeTo(360, 365);
  }, []);

  return (
    <div className="details">
      <div className="form">
        <div className="attention">{t('Approve_Tip')}</div>

        <div>
          <span>{t('Spender')}:</span>
          <span
            className={`spender ${verifiedName ? 'verified' : ''}`}
            title={approveToken.spender}
            onClick={(_) => Shell.open(convertToAccountUrl(chainId, approveToken?.spender))}
          >
            {KnownAddresses[approveToken?.spender] || formatAddress(approveToken?.spender, 8, 5)}
            {KnownAddresses[approveToken?.spender] ? <Feather icon="award" size={12} /> : undefined}
          </span>
        </div>

        <div>
          <span>{t('Funds Limit')}:</span>
          <div className="funds-limit" title={`${approveToken.limitAmount} ${tokenSymbol}`}>
            <input
              type="text"
              className={`funds-limit ${approveToken.isMax ? 'max' : ''}`}
              defaultValue={approveToken.limitAmount}
              onChange={(e) => confirmVM.setApproveAmount(e.target.value)}
            />
            <img src={CryptoIcons(tokenSymbol)} alt={tokenSymbol} /> {tokenSymbol}
          </div>
        </div>

        <div>
          <span>{t('Gas Price')}:</span>
          <div>
            <input type="text" defaultValue={gasPrice} onChange={(e) => confirmVM.setGasPrice(e.target.value)} />
            <span>
              Gwei <Feather icon="edit-3" size={12} />
            </span>
          </div>
        </div>

        <div>
          <span>{t('Gas Limit')}:</span>
          <div>
            <input type="text" defaultValue={gas} onChange={(e) => confirmVM.setGas(e.target.value)} />
            <span>
              <Feather icon="edit-3" size={12} />
            </span>
          </div>
        </div>

        <div>
          <span>{t('Nonce')}:</span>
          <div>
            <input type="text" defaultValue={nonce} onChange={(e) => confirmVM.setNonce(e.target.value)} />
            <span>
              <Feather icon="edit-3" size={12} />
            </span>
          </div>
        </div>

        <div>
          <span>{t('Max Fee')}:</span>
          <span>
            {maxFee} {networkSymbol}
          </span>
        </div>

        <div>
          <span>{t('Total')}:</span>
          <span>
            {totalValue} {networkSymbol}
          </span>
        </div>
      </div>
      <div className="actions">
        <button onClick={(_) => onReject?.()}>{t('Cancel')}</button>
        <button
          className="positive"
          onClick={(_) => onContinue?.()}
          disabled={!confirmVM.isValid || confirmVM.insufficientFee}
        >
          {t('Continue')}
        </button>
      </div>
    </div>
  );
});
