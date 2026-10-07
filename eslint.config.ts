import {eslintConfig} from 'eslint-config-un';
import {GLOB_MARKDOWN_SUPPORTED_CODE_BLOCKS} from 'eslint-config-un/globs';
import oxfmtConfig from './oxfmt.config.ts';

export default eslintConfig({
  ignores: ['.agents/guidelines.md', 'CHANGELOG.md', 'THIRD_PARTY_NOTICES.md'],
  mode: 'lib',
  defaultConfigsStatus: 'misc-enabled',
  configs: {
    format: {
      files: [GLOB_MARKDOWN_SUPPORTED_CODE_BLOCKS],
      formatter: [
        'oxfmt',
        {
          bracketSpacing: oxfmtConfig.bracketSpacing,
          printWidth: oxfmtConfig.printWidth,
          singleQuote: oxfmtConfig.singleQuote,
        },
      ],
    },
    import: {
      requireModuleExtensions: true,
    },
    markdown: {
      configSentencesPerLine: true,
      // `eslint-config-un` comes with Prettier, which would format code blocks too
      configFormatFencedCodeBlocks: false,
    },
    markdownPreferences: {
      ignores: ['LICENSE.md'],
      wordsToPreserveCasingOf: ['ms-ts'],
    },
    nodeDependencies: {
      enforceAbsoluteVersion: true,
    },

    // False positives:
    rxjs: false, // `all-contributors-cli` depends on it
    zod: false,
  },
  extraConfigs: [],
});
