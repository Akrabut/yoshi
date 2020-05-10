import { constantCase } from 'constant-case';

const EXTENSIONS = '{tsx,ts,jsx,js}';
export const CONFIG_EXT = 'json';

export const CONFIG_PATH = `.module.${CONFIG_EXT}`;

export const MODULE_CONFIG_PATH = (moduleId: string) =>
  `target/module_${constantCase(moduleId)}.json`;

export const PAGES_DIR = 'src/pages';
export const PAGES_PATTERN = `${PAGES_DIR}/**/*.${EXTENSIONS}`;
export const PAGES_CONFIG_PATTERN = `${PAGES_DIR}/**/*.${CONFIG_EXT}`;

export const EXPORTED_COMPONENTS_PATTERN = `src/exported-components/**/*.${EXTENSIONS}`;
export const EXPORTED_COMPONENTS_CONFIG_PATTERN = `src/exported-components/**/*.${CONFIG_EXT}`;

export const METHODS_PATTERN = `src/methods/**/*.${EXTENSIONS}`;
export const METHODS_CONFIG_PATTERN = `src/methods/**/*.${CONFIG_EXT}`;

export const MODULE_INIT_PATTERN = `src/moduleInit.${EXTENSIONS}`;

export const TRANSLATIONS_DIR = 'translations';
