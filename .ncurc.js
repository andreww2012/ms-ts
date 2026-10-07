// @ts-check
import fs from 'node:fs';
import path from 'node:path';
import packageJson from './package.json' with {type: 'json'};

const CACHE_DIRECTORY = path.join(import.meta.dirname, 'node_modules/.cache/npm-check-updates');
fs.mkdirSync(CACHE_DIRECTORY, {recursive: true});

/** @type {Record<string, 'greatest' | 'minor'>} */
const TARGETS = {
  // Its major version should match the lowest supported Node.js version
  '@types/node': 'minor',
  // Their `latest` dist-tag lags behind the prerelease channel we actually follow
  'all-contributors-cli': 'greatest',
  'eslint-config-un': 'greatest',
};

/**
 * @type {Record<string, {packages: string[]; groupName?: string; icon?: string; priority?: number | null}>}
 */
const PACKAGE_GROUPS = Object.entries({
  'Package manager': {
    packages: ['pnpm'],
    icon: '📦',
    priority: 0,
  },
  '@eslint': {
    packages: ['eslint', 'eslint-config-un'],
    groupName: 'ESLint',
  },
  '@cspell': {
    packages: ['cspell'],
  },
  '@vitest': {
    packages: ['vitest'],
  },
}).reduce((result, [groupName, {packages: packagesInGroup, ...groupMeta}]) => {
  const isScopedGroup = groupName.startsWith('@');
  const groupInfo = {
    groupName: isScopedGroup ? groupName.slice(1) : groupName,
    ...groupMeta,
  };

  const packagesInCurrentGroup = Object.fromEntries([
    [isScopedGroup ? `${groupName}/*` : groupName, groupInfo],
    ...packagesInGroup.map((packageInGroup) => [packageInGroup, groupInfo]),
  ]);

  return Object.assign(result, packagesInCurrentGroup);
}, {});

/**
 * @type {import('npm-check-updates').RunOptions}
 */
export default {
  cache: true,
  cacheExpiration: 30,
  cacheFile: path.join(CACHE_DIRECTORY, 'cache.json'),

  target: (packageName) => TARGETS[packageName] || 'latest',

  // Workspace mode also updates catalogs. The root is a workspace package too, so it's not checked twice
  workspaces: true,
  root: false,

  format: ['group'],
  interactive: true,
  groupFunction: (fullName) => {
    const [nameScope] = fullName.split('/', 1);
    const knownGroup = PACKAGE_GROUPS[fullName] || PACKAGE_GROUPS[`${nameScope}/*`];

    if (knownGroup) {
      const {groupName, icon = '📁', priority = 3} = knownGroup;
      return `${priority === null ? '' : `${priority}. `}${icon} ${groupName}`;
    }

    return fullName in packageJson.devDependencies
      ? '2. 🧑‍💻 Dev dependencies'
      : '1. 📦 Direct dependencies';
  },
};
