import 'react-codes-input/lib/react-codes-input.min.css';
import './SetupPasscode.css';

import * as Anime from '../../misc/Anime';

import React, { useState } from 'react';

import { Application } from '../../viewmodels/Application';
import { MnemonicVM } from '../../viewmodels/MnemonicVM';
import { NavBar } from '../../components';
import Passcode from 'react-codes-input';

export default ({ app, mnVm }: { app: Application; mnVm: MnemonicVM }) => {
  const [passcode1, setPasscode1] = useState('');
  const [passVerified, setPassVerified] = useState(false);

  const onPasscode1Change = (code: string) => {
    if (code.length !== 6) return;
    setPasscode1(code);
  };

  const onPasscode2Change = (code: string) => {
    if (code.length === 6 && code !== passcode1) {
      Anime.vibrate('.page.setupPw > .password');
    }

    setPassVerified(code === passcode1);
  };

  return (
    <div className="page setupPw">
      <NavBar title="Setup Passcode" onBackClick={() => app.history.goBack()} />

      <div className="password">
        <p>{passcode1.length === 0 ? 'Please enter a passcode' : 'Please enter again'}</p>
        {!passcode1 ? (
          <Passcode id="passcode1" codeLength={6} hide initialFocus onChange={onPasscode1Change} focusColor="#6186ff" />
        ) : undefined}

        {passcode1 ? (
          <Passcode id="passcode2" codeLength={6} hide initialFocus onChange={onPasscode2Change} focusColor="#6186ff" />
        ) : undefined}
      </div>

      <button
        disabled={!passVerified}
        onClick={async (_) => {
          if (await mnVm.setupMnemonic(passcode1)) {
            app.history.push('/app');
          }
        }}
      >
        DONE
      </button>
    </div>
  );
};
