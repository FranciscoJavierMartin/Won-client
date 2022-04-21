module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/*.stories.tsx',
    '!src/pages/**/*.tsx',
    '!src/styles/**/*.ts',
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src', '<rootDir>/.jest'],
  moduleNameMapper: {
    '@/components/(.*)': '<rootDir>/src/components/$1',
    '@/graphql/(.*)': '<rootDir>/src/graphql/$1',
    '@/templates/(.*)': '<rootDir>/src/templates/$1',
    '@/utils/(.*)': '<rootDir>/src/utils/$1',
  },
};
