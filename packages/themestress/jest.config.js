/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require('path');

module.exports = {
  setupFilesAfterEnv: ['./config/.enzyme.ts'],
  testEnvironment: 'jsdom',
  transform: { '^.+\\.(t|j)sx?$': 'ts-jest' },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^@core/(.*)$': resolve(__dirname, './src/core/$1'),
    '^@components/(.*)$': resolve(__dirname, './src/components/$1'),
    '^@icons/(.*)$': resolve(__dirname, './src/icons/$1'),
  },
};
