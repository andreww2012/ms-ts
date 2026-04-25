import {eslintConfig} from 'eslint-config-un';

export default eslintConfig({
  defaultConfigsStatus: 'misc-enabled',
  configs: {
    markdown: {
      configSentencesPerLine: {
        ignores: [
          'CHANGELOG.md',
          // Putting every sentence on its own line causes line wraps in the changelog
          '.changeset/*.md',
        ],
      },
    },
    markdownPreferences: {
      ignores: ['LICENSE.md'],
      wordsToPreserveCasingOf: ['ms-ts'],
    },
    ts: {
      allowDefaultProject: ['*.config.*ts'],
    },

    // False positives:
    zod: false,
  },
});
