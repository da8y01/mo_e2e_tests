import { expect, test } from "vitest";
import { Actor, CanisterStatus, HttpAgent } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { e2e_tests_backendCanister, e2e_tests_backend } from "./actor";

test("should handle a basic greeting", async () => {
  const result1 = await e2e_tests_backend.greet("test");
  expect(result1).toBe("Hello, test!");
});