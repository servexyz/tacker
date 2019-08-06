const log = console.log;
import chalk from "chalk";
import test from "ava";
import is from "@sindresorhus/is";
import {
  getObjFromArray,
  getChalkColor,
  printLine,
  printMirror
} from "../src/index";

test(`${chalk.cyan("printLine")} outputs a blue line to the terminal`, t => {
  let line = printLine("blue"),
    lineIsString;
  if (is.string(line) || is.array(line)) {
    lineIsString = true;
  } else {
    lineIsString = false;
  }
  t.true(lineIsString);
});

test(`${chalk.cyan("getChalkColor")} returns a chalk function`, t => {
  let getChalkColorFunction = getChalkColor("blue");
  let isGCCFunction = is.function(getChalkColorFunction);
  t.true(isGCCFunction);
});

test(`${chalk.cyan("printMirror")} outputs a string key/value pair`, t => {
  const mock = {
    foo: "bar"
  };
  let mirror = printMirror({ mock }, "blue", "grey");
  let mirrorIsString = is.string(mirror);
  t.true(mirrorIsString);
});

test(`${chalk.cyan(
  "getObjFromArray"
)} creats hashmap for color enum export`, t => {
  let inputMock = ["foo", "bar"];
  let outputMock = { foo: "foo", bar: "bar" };
  t.deepEqual(getObjFromArray(inputMock), outputMock);
});
