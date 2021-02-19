module.exports = {
  extends: 'eslint-config-claims-intake',
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
  settings: {
    react: {
      version: 'detect',
    },
    jest: {
      version: 26,
    },
  },
  rules: {
    // "some-rule-i-dont-want": "off",
    // "some-rule-i-want-but-cant-fix-now": "warn",
  },
};
