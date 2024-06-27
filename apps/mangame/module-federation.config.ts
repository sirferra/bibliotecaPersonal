import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'mangame',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
