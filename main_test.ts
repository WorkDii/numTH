import { assertEquals } from "jsr:@std/assert";
import { wholeNumber, accountant } from "./main.ts";

Deno.test(function WholeNumber() {
  assertEquals(wholeNumber(1000), "1,000");
  assertEquals(wholeNumber("1000"), "1,000");
  assertEquals(wholeNumber("00"), "0");
  assertEquals(wholeNumber("0.9"), "1");
});

Deno.test(function Accountant() {
  assertEquals(accountant(1000.1213), "1,000.12");
  assertEquals(accountant("1000.1213"), "1,000.12");
  assertEquals(accountant("1000.1253"), "1,000.13");
});
