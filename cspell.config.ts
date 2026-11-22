import {cspellConfig} from '@andreww2012/cspell-config';

export default cspellConfig({
  cwd: import.meta.dirname,
  ignorePaths: ['.agents/guidelines.md', '.all-contributorsrc', 'THIRD_PARTY_NOTICES.md'],
  words: {
    names: ['andreww', 'npmx'],
    misc: ['knipignore'],
    englishIshWords: [],
  },
});
