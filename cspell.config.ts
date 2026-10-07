import type {CSpellSettings} from 'cspell';

const GLOBALLY_IGNORED_WORDS: Record<string, string[]> = {
  names: ['andreww', 'npmx'],
  misc: ['knipignore'],
  englishIshWords: [],
};

export default {
  useGitignore: true,
  enableGlobDot: true,
  ignorePaths: [
    '**/.gitignore',
    '**/.git/**',
    '**/pnpm-lock.yaml',
    'patches/**',
    '.agents/guidelines.md',
    '.all-contributorsrc',
    'THIRD_PARTY_NOTICES.md',
  ],
  dictionaries: ['npm', 'node', 'typescript', 'fullstack'],
  words: Object.values(GLOBALLY_IGNORED_WORDS).flat(),
  overrides: [],
} satisfies CSpellSettings;
