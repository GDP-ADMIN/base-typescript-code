/*
 * .eslintrc.js
 * Sample of ESLint configuration file.
 * Please adjust accordingly to your project.
 *
 * We install eslint-config-prettier to disable ESLint rules that conflict with Prettier.
 * See [3] for details.
 *
 * Authors:
 *   Sahat Nicholas Simangunsong (sahat.n.simangunsong@gdplabs.id)
 *   Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * Created at: October 15th 2023
 * -----
 * Last Modified: October 19th 2023
 * Modified By: I Putu Yudi Haryasa (i.putu.yudi.haryasa@gdplabs.id)
 * -----
 * Reviewers:
 *   Sahat Nicholas Simangunsong (sahat.n.simangunsong@gdplabs.id)
 * ---
 * References:
 *   [1] https://eslint.org/docs/latest/use/configure/migration-guide#predefined-and-shareable-configs
 *   [2] https://stackoverflow.com/questions/49525310/error-console-is-not-defined-no-undef-brackets
 *   [3] https://github.com/prettier/eslint-config-prettier
 * ---
 * Copyright (c) 2023 GDP LABS. All rights reserved.
 */

module.exports = {
  extends: ["eslint:recommended", "prettier", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  env: {
    node: true,
    browser: true,
  },
};
