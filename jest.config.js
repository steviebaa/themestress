/* eslint-disable @typescript-eslint/no-var-requires */
const {resolve} = require('path');

module.exports = {
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '\\.svg': '<rootDir>/config/.svgTransform.js',
    '\\.(ts|tsx)$': 'ts-jest',
    '\\.otf$': '<rootDir>/config/.fileTransform.js',
    '\\.ttf$': '<rootDir>/config/.fileTransform.js',
    '\\.woff$': '<rootDir>/config/.fileTransform.js',
    '\\.woff2$': '<rootDir>/config/.fileTransform.js',
  },
  globals: {
    'ts-jest': {
      compiler: 'ttypescript',
    },
  },
  setupFiles: [
    '<rootDir>/config/.tsAutoMock.ts',
    '<rootDir>/config/.jestEnv.js',
  ],
  testRegex: ['/__tests__/.*\\.(ts|tsx)$', '/src/.*\\.spec\\.(ts|tsx)$'],
  setupFilesAfterEnv: ['<rootDir>/config/.enzyme.ts'],
  moduleNameMapper: {
    '\\.css': '<rootDir>/__mocks__/css.tsx',
    '^@assets/(.*)$': resolve(__dirname, './src/assets/$1'),
    '^@config/(.*)$': resolve(__dirname, './src/config/$1'),
    '^@core/(.*)$': resolve(__dirname, './src/core/$1'),
    '^@components/(.*)$': resolve(__dirname, './src/components/$1'),
    '^@controllers/(.*)$': resolve(__dirname, './src/controllers/$1'),
    '^@composites/(.*)$': resolve(__dirname, './src/composites/$1'),
    '^@pages/(.*)$': resolve(__dirname, './src/pages/$1'),
    '^@stores/(.*)$': resolve(__dirname, './src/stores/$1'),
    '^@themestress/(.*)$': resolve(__dirname, './src/themestress/$1'),
    '^@__mocks__/(.*)$': resolve(__dirname, './__mocks__/$1'),
  },
};
