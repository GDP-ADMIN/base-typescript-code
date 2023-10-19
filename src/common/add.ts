/*
 * add.ts
 * Sample ts file with a simple function
 *
 * Authors:
 *   Sahat Nicholas Simangunsong (sahat.n.simangunsong@gdplabs.id)
 * Created at: October 16th 2023
 * -----
 * Last Modified: October 19th 2023
 * Modified By: I Putu Yudi Haryasa (i.putu.yudi.haryasa@gdplabs.id)
 * -----
 * Reviewers:
 *   Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * ---
 * References:
 *   NONE
 * ---
 * Copyright (c) 2023 GDP LABS. All rights reserved.
 */

/**
 * A simple function to add two numbers
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the two numbers.
 */
function add(a: number, b: number): number {
  return a + b;
}

// Export the add function to make it available for testing
export { add };
