const linguiConfig = {
  catalogs: [
    {
      path: '<rootDir>/src/locales/{locale}',
      include: ['<rootDir>/src'],
    },
  ],
  compileNamespace: 'es',
  fallbackLocales: {
    default: 'en-US',
  },
  format: 'po',
  formatOptions: {
    lineNumbers: false,
  },
  locales: ['en-US', 'vi-VN'],
  orderBy: 'messageId',
  rootDir: '.',
  runtimeConfigModule: ['@lingui/core', 'i18n'],
  sourceLocale: 'en-US',
  pseudoLocale: 'pseudo',
};

module.exports = linguiConfig;
