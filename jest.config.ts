import type { Config } from 'jest'


const config: Config = {
  projects: [
    '<rootDir>/jest.client.config.ts',
    '<rootDir>/jest.server.config.ts',
  ],
}
 
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default config