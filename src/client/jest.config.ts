import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  coverageDirectory: '<rootDir>/coverage/',
  collectCoverageFrom: [
    '**/*.(j|t)s?(x)',
    '!(test|build|node_modules|coverage)/**/*.*',
  ],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/$1',
  },
  roots: ['<rootDir>'],
  setupFilesAfterEnv: ['jest-localstorage-mock', '<rootDir>/src/setupTests.ts'],
  testEnvironment: 'jsdom',
  testMatch: ['**/*.test.ts?(x)'],
  testPathIgnorePatterns: [
    '<rootDir>/build/',
    '<rootDir>/node_modules/',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};

export default config;
