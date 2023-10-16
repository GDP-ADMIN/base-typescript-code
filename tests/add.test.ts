/*
 * add.test.ts
 * Sample test file using Vitest framework
 *
 * Authors:
 *   Sahat Nicholas Simangunsong (sahat.n.simangunsong@gdplabs.id)
 * Created at: October 16th 2023
 * -----
 * Last Modified: October 16th 2023
 * Modified By: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * -----
 * Reviewed by:
 *   - Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * ---
 * References:
 *   [1] https://vitest.dev/guide/
 * ---
 * Copyright (c) 2023 GDP LABS. All rights reserved.
 */

import { describe, it, expect } from "vitest";
import { add } from "@/common/add";

describe("add function", () => {
  it("should add two numbers correctly", () => {
    expect(add(2, 3)).toBe(5);
  });
});
