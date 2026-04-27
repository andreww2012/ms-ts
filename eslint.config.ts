import {eslintConfig} from 'eslint-config-un';

export default eslintConfig({
  defaultConfigsStatus: 'misc-enabled',
  ignores: ['CHANGELOG.md', 'THIRD_PARTY_NOTICES.md'],
  configs: {
    markdown: {
      configSentencesPerLine: {
        ignores: [
          // Putting every sentence on its own line causes line wraps in the changelog
          '.changeset/*.md',
        ],
      },
    },
    markdownPreferences: {
      ignores: ['LICENSE.md'],
      wordsToPreserveCasingOf: ['ms-ts'],
    },
    nodeDependencies: {
      enforceAbsoluteVersion: true,
    },
    ts: {
      allowDefaultProject: ['*.config.*ts'],
    },

    // False positives:
    rxjs: false,
    youDontNeedLodashUnderscore: false, // cspell:disable-line
    zod: false,
  },
});
