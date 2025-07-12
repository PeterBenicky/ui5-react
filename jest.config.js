// jest.config.js
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
    },
    transformIgnorePatterns: [
      '/node_modules/(?!@ui5/webcomponents-react|@ui5/webcomponents).+\\.js$', // ✅ NEignoruj tieto moduly
    ],
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // ak importuješ štýly
    },
  };
  