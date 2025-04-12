import { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts', '!**/vendor/**'],
  coverageDirectory: 'coverage',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  transformIgnorePatterns: ['/node_modules/'],
  coverageReporters: ['lcov', 'html', 'text'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/coverage',
    '/dist',
    'package.json',
    'package-lock.json',
    'pnpm-lock.json',
    'yarn-lock.json',
    'jest.setup.ts',
    'main.tsx',
    'src/validation',
    'src/utils',
    'src/types',
    'src/routes',
    'src/App',
    'src/test-util',
    'src/constants',
    'src/assets',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};

export default config;