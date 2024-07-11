import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'auth-page',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
