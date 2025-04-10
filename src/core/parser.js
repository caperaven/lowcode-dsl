// Create a test folder and add a Deno test for the parser
// Test file: src/core/test/parser.test.js

// Import the parser module
import { parser } from "../parser.js";
import { assertEquals } from "https://deno.land/std@0.95.0/testing/asserts.ts";

Deno.test("parser should correctly parse input", () => {
  const input = "example input";
  const expectedOutput = "expected output"; // Replace with actual expected output

  const result = parser(input);

  assertEquals(result, expectedOutput);
});