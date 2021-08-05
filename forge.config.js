const { appleId, appleIdPassword } = require('./sign/appSign');
const { certPassword, devCertPath, publisher } = require('./sign/winSign');
const package = require('./package.json');

module.exports = {
  packagerConfig: {
    appBundleId: 'jp.co.chainbow.wallet3',
    appCopyright: 'ChainBow Co, Ltd.',
    appCategoryType: 'public.app-category.finance',
    darwinDarkModeSupport: false,
    icon: './assets/AppIcon.icns',
    platform: 'mas',
    osxSign: {
      identity: '3rd Party Mac Developer Application: ChainBow Co. Ltd (Z3N6SZF439)',
      hardenedRuntime: true,
      'gatekeeper-assess': false,
      'signature-flags': 'library',
      entitlements: 'sign/entitlements.mas.plist',
      'entitlements-inherit': 'sign/entitlements.mas.inherit.plist',
      'provisioning-profile': 'sign/embedded.provisionprofile',
    },
    // osxNotarize: {
    //   appleId,
    //   appleIdPassword,
    // },
    protocols: [
      {
        name: 'Wallet 3',
        protocol: 'wallet3',
        schemes: ['ethereum', 'wallet3', 'wc', 'ledgerlive'],
      },
    ],

    win32metadata: {
      CompanyName: 'ChainBow Co, Ltd.',
      ProductName: 'Wallet 3',
    },
  },
  makers: [
    {
      name: '@electron-forge/maker-pkg',
      config: {
        identity: '3rd Party Mac Developer Application: ChainBow Co. Ltd (Z3N6SZF439)',
        name: `${package.name}-mac-${process.arch}-${package.version}`,
      },
    },
  ],
  plugins: [
    [
      '@electron-forge/plugin-webpack',
      {
        devContentSecurityPolicy: `default-src * self blob: data: gap:; style-src * self 'unsafe-inline' blob: data: gap:; script-src * 'self' 'unsafe-eval' 'unsafe-inline' blob: data: gap:; object-src * 'self' blob: data: gap:; img-src * self 'unsafe-inline' blob: data: gap:; connect-src self * 'unsafe-inline' blob: data: gap:; frame-src * self blob: data: gap:;`,
        mainConfig: './webpack.main.config.js',
        renderer: {
          config: './webpack.renderer.config.js',
          entryPoints: [
            {
              html: './src/index.html',
              js: './src/renderer.ts',
              name: 'main_window',
              preload: {
                js: './src/preload.ts',
              },
            },
            {
              html: './src/index.html',
              js: './src/popup_renderer.ts',
              name: 'popup_window',
              preload: {
                js: './src/preload.ts',
              },
            },
          ],
        },
      },
    ],
  ],
};
