/*
 * add.test.ts
 * DEFAULT DESCRIPTION. EDIT OR DELETE THIS.
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

import { add } from "@common/add";

describe("add function", () => {
  it("should add two numbers correctly", () => {
    expect(add(2, 3)).toBe(5);
  });
});
