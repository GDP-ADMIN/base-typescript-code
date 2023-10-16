/*
 * vitest.config.js
 * Configuration file for vitest. Currently needed to specify the alias path.
 *
 * Authors:
 *   Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * Created at: October 16th 2023
 * -----
 * Last Modified: October 16th 2023
 * Modified By: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * -----
 * Reviewed by:
 *   -
 * ---
 * References:
 *   [1] https://vitest.dev/config/#alias
 *   [2] https://stackoverflow.com/questions/72468249/vitest-src-folder-alias-not-resolved-in-test-files
 * ---
 * Copyright (c) 2023 GDP LABS. All rights reserved.
 */

import path from "path";

export default {
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
};
