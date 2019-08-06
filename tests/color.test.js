const log = console.log;
import chalk from "chalk";
import test from "ava";
import is from "@sindresorhus/is";
import {
  reduceObjFromArray,
  colors,
  colorsArr,
  getObjFromArray,
  getChalkColor,
  printLine,
  printMirror
} from "../src/index";

test(`${chalk.cyan("printLine")} outputs a blue line to the terminal`, t => {
  let line = printLine("blue");
  let lineIsString = is.string(line) || is.array(line) ? true : false;
  t.true(lineIsString);
});

test(`${chalk.cyan("getChalkColor")} returns a chalk function`, t => {
  let getChalkColorFunction = getChalkColor("blue");
  t.true(is.function(getChalkColorFunction));
});

test(`${chalk.cyan("printMirror")} outputs a string key/value pair`, t => {
  const mock = {
    foo: "bar"
  };
  let mirror = printMirror({ mock }, "blue", "grey");
  t.true(is.string(mirror));
});

test(`${chalk.cyan(
  "getObjFromArray"
)} creats hashmap for color enum export`, t => {
  let inputMock = ["foo", "bar"];
  let outputMock = { foo: "foo", bar: "bar" };
  t.deepEqual(getObjFromArray(inputMock), outputMock);
  t.pass();
});

test(`${chalk.cyan("getChalkColor")} returns red when passing ${chalk.cyan(
  "red"
)}`, t => {
  t.plan(2);
  t.true(is.function(getChalkColor(colors.red)));
  t.throws(() => {
    getChalkColor(colors.x);
  });
});
