import {cspellConfig} from '@andreww2012/cspell-config';

export default cspellConfig({
  // eslint-disable-next-line node/no-unsupported-features/node-builtins -- Dev only
  cwd: import.meta.dirname,
  ignorePaths: ['.agents/guidelines.md', '.all-contributorsrc', 'THIRD_PARTY_NOTICES.md'],
  words: {
    names: ['andreww', 'npmx'],
    misc: ['knipignore'],
    englishIshWords: [],
  },
});
