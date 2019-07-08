const log = console.log;
import test from "ava";
import execa from "execa";
import { getChalkColor, printLine, printMirror } from "../src/index";

test("print a blue line", t => {
  let foo = printLine("blue");
  t.snapshot(foo);
});

test("print inner function of getChalkColor", t => {
  let getChalkColorFunction = getChalkColor("blue");
  printMirror({ getChalkColorFunction }, "blue", "grey");
  t.snapshot(getChalkColorFunction);
});
