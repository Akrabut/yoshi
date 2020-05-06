import * as i18next from 'i18next';

const memoize = require('lodash/memoize');

export const i18nInstance = i18next.createInstance();

export default memoize(function i18n(initialLanguage: string) {
  return i18nInstance
    .use({
      type: 'backend',
      read: async (language, namespace, callback) => {
        // We configure how i18next should fetch a translation resource when it
        // needs it: We use Webpack's sync require because
        // dynamic import will break SSR, see https://github.com/wix/yoshi/pull/1779 for moving translations to the worker.
        try {
          const translation = require(`../assets/locales/messages_${language}.json`);
          return callback(null, translation);
        } catch (error) {
          return callback(error);
        }
      },
    })
    .init({
      // Initial language
      lng: initialLanguage,

      // Fallback language
      fallbackLng: 'en',

      // Don't use a key separator (no support for nested translation objects)
      keySeparator: false,

      interpolation: {
        escapeValue: false, // not needed for react (react already protects from xss)
        prefix: '{',
        suffix: '}',
      },

      // Wait for translation data to be available before rendering a component
      react: {
        wait: true,
      },
    });
});
