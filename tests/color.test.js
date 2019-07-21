const log = console.log;
import test from "ava";
import is from "@sindresorhus/is";
import { getChalkColor, printLine, printMirror } from "../src/index";

test("printLine outputs a blue line to the terminal", t => {
  let line = printLine("blue"),
    lineIsString;
  if (is.string(line) || is.array(line)) {
    lineIsString = true;
  } else {
    lineIsString = false;
  }
  t.true(lineIsString);
});

test("getChalkColor returns a chalk function", t => {
  let getChalkColorFunction = getChalkColor("blue");
  let isGCCFunction = is.function(getChalkColorFunction);
  t.true(isGCCFunction);
});

test("printMirror outputs a string key/value pair", t => {
  const mock = {
    foo: "bar"
  };
  let mirror = printMirror({ mock }, "blue", "grey");
  let mirrorIsString = is.string(mirror);
  t.true(mirrorIsString);
});
