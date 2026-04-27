import type {CSpellSettings} from 'cspell';

const GLOBALLY_IGNORED_WORDS = {
  names: ['andreww', 'npmx'],
  misc: ['knipignore'],
  englishIshWords: [],
} satisfies Record<string, string[]>;

export default {
  dictionaries: ['npm'],
  useGitignore: true,
  enableGlobDot: true,
  ignorePaths: [
    'pnpm-lock.yaml',
    '**/.gitignore',
    '**/.git/**',
    '.all-contributorsrc',
    'THIRD_PARTY_NOTICES.md',
  ],
  overrides: [],
  words: Object.values(GLOBALLY_IGNORED_WORDS).flat(),
} satisfies CSpellSettings;
