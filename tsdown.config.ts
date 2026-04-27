import {defineConfig} from 'tsdown';

export default defineConfig({
  entry: ['src/index.ts'],
  format: 'esm',
  unbundle: true,
  dts: {
    resolve: ['type-fest', 'ts-arithmetic'],
  },
});
