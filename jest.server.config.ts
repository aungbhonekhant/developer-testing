import type { Config } from 'jest';
import nextJest from 'next/jest.js'
 
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  //dir: './',
})
const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  displayName: 'server',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  testMatch: ['**/__tests__/server/**/*.test.ts', '**/__tests__/server/**/*.test.tsx'],
};

export default createJestConfig(config);