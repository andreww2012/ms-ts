import {defineConfig} from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    ui: true,
    open: false,
    typecheck: {
      enabled: true,
      checker: 'tsc',
      tsconfig: './test/tsconfig.json',
      include: ['test/**/*.test-d.ts'],
    },
    coverage: {
      provider: 'v8',
      include: ['src'],
      reporter: [
        'html',
        // The following 2 are required for generating GH actions report:
        'json-summary',
        'json',
      ],
      thresholds: {
        lines: 100,
        branches: 100,
        functions: 100,
        statements: 100,
      },
    },
  },
});
