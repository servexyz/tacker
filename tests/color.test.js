const log = console.log;
import test from "ava";
import execa from "execa";
import { getChalkColor, printLine, printMirror } from "../src/index";

test("print a blue line", async t => {
  let foo = printLine("blue");
  t.snapshot(foo);
});
