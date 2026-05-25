export default {
  preset: 'ts-jest',
  testEnvironment: "jsdom",
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      tsconfig: './tsconfig.app.json', // Ensure this path is correct
    }],
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
}
// transform: {
// }],
// Optional: Ensure rootDir is set if paths are ambiguous
// rootDir: '.',
// "^.+\\.tsx?$": "ts-jest",