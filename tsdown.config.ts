import {defineConfig} from 'tsdown';

export default defineConfig({
  entry: 'src/index.ts',
  dts: true,
  exports: true,
  deps: {
    // Their types are inlined, so that the package has no dependencies
    onlyBundle: ['ts-arithmetic', 'type-fest'],
  },
});
