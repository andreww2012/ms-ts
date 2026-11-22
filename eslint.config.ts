import {eslintConfig} from 'eslint-config-un';
import oxfmtConfig from './oxfmt.config.ts';

export default eslintConfig({
  ignores: ['.agents/guidelines.md', 'CHANGELOG.md', 'THIRD_PARTY_NOTICES.md'],
  mode: 'lib',
  defaultConfigsStatus: 'misc-enabled',
  configs: {
    eslintComments: {
      requireDescriptions: true,
    },
    format: {
      files: [],
      configFencedCodeBlocks: {
        formatter: [
          'oxfmt',
          {
            bracketSpacing: oxfmtConfig.bracketSpacing,
            printWidth: oxfmtConfig.printWidth,
            singleQuote: oxfmtConfig.singleQuote,
          },
        ],
      },
    },
    import: {
      requireModuleExtensions: true,
    },
    markdown: {
      configSentencesPerLine: true,
    },
    markdownPreferences: {
      ignores: ['LICENSE.md'],
    },
    nodeDependencies: {
      enforceAbsoluteVersion: true,
    },
    vitest: {
      vitestGlobalsImporting: 'disallow',
    },
  },
});
