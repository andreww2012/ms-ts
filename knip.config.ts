import type {KnipConfig} from 'knip';

export default {
  entry: ['.ncurc.cjs'], // cspell:disable-line
  ignore: 'test-d/**/*.test-d.ts',
  tags: ['-knipignore'],
  treatConfigHintsAsErrors: true,
} satisfies KnipConfig;
