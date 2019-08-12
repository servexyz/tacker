const log = console.log;
import test from "ava";
import chalk from "chalk";
import hookStd from "hook-std";

import { wrap, wrapPrintError, printError, printMirror } from "../src/index";

test.cb(`${chalk.cyan("hookStd")} captures logged foo`, t => {
  let actual = "foo";
  const promise = hookStd(string => {
    t.true(string === actual);
    promise.unhook();
    t.end();
  });
  process.stdout.write(actual);
});

var logz = [];
console.log = function(d) {
  logz.push(d);
  process.stdout.write(d + "\n");
};
function fooPrint() {
  console.log("foo");
}
test("fake print", t => {
  fooPrint();
  printMirror({ logz }, "magenta", "grey");
  t.pass();
});
// function setup() {
//   console.log = process.stdout.write;
// }
// function fakePrint() {
//   log("fake");
// }
// function teardown() {
//   console.log = log;
// }

// function hookLog(fn) {
//   console.log = process.stdout.write;
//   // console.log(actual);
//   fn.apply(this, arguments);
//   console.log = log;
// }
// test.cb(`${chalk.cyan("hookStd")} captures ${chalk.green("printError")}`, t => {
//   let msg = "foo";
//   const promise = hookStd(str => {
//     t.true(str === msg);
//   });
//   hookLog(printError, true, { msg });
//   // let x = hookLog(printError, true, { msg });
//   // printMirror({ x }, "magenta", "grey");
//   // t.true(x);
// });
// test.cb("fakePrint", t => {
//   let msg = "fake";
//   const promise = hookStd(str => {
//     process.stdout.write(`str: ${str}`);
//     t.true(str === msg);
//     promise.unhook();
//   });
//   setup();
//   fakePrint();
// });
