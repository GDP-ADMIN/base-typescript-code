/*
 * jest.config.js
 * For configuring jest test command.
 * Complete documentation on https://jestjs.io/docs/en/configuration.
 *
 * To detect test files, jest will read from "testRegex" config option.
 * By default, "testRegex" value is "(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$".
 * It looks for .js, .jsx, .ts and .tsx files inside of __tests__ folders, as well as any files with a suffix of .test or .spec.
 *
 * Authors:
 *   Sahat Nicholas Simangunsong (sahat.n.simangunsong@gdplabs.id)
 * Created at: October 16th 2023
 * -----
 * Last Modified: October 16th 2023
 * Modified By: Sahat Nicholas Simangunsong (sahat.n.simangunsong@gdplabs.id)
 * -----
 * Reviewed by:
 *   -
 * ---
 * References:
 *   -
 * ---
 * Copyright (c) 2023 GDP LABS. All rights reserved.
 */

module.exports = {
  // Which files will be used to calculate code coverage
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],

  // ts-jest will need its own special tsconfig file so it won't result in error
  // See tsconfig.test.json for more details
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.test.json",
    },
  },

  // As we're using TypeScript, we need to transform it first using ts-jest.
  // Kind of like webpack loader.
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
  },

  // Custom module resolution.
  // So we don't need to type "import xxx from "../../../../"".
  // Instead, we can type "import xxx from "@common/xxx"".
  // Must be in sync with tsconfig.json -> paths & webpack.common.js -> resolve -> alias
  moduleNameMapper: {
    "@common/(.*)": "<rootDir>/src/common/$1",
    "@domain/(.*)": "<rootDir>/src/domain/$1",
  },
};
