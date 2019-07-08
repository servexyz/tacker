const log = console.log;
import test from "ava";
import execa from "execa";
import { getChalkColor, printLine, printMirror } from "../src/index";

test("print a blue line", t => {
  let foo = printLine("blue");
  t.snapshot(foo);
});

test("confirm chalk function returned from getChalkColor", t => {
  let getChalkColorFunction = getChalkColor("blue");
  t.snapshot(getChalkColorFunction);
});

test("print a mirror of a mock obj", t => {
  const mock = {
    foo: "bar"
  };
  let mirror = printMirror({ mock }, "blue", "grey");
  t.snapshot(mirror);
});
