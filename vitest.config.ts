import {defineConfig} from 'vitest/config';

export default defineConfig({
  test: {
    typecheck: {
      enabled: true,
      checker: 'tsc',
      tsconfig: './test-d/tsconfig.json',
      include: ['test-d/**/*.test-d.ts'],
    },
  },
});
