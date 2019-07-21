import test from "ava";
import chalk from "chalk";
import { printPkgVersion, printPkgProp } from "../src/index";

test(`${chalk.blue("printPkgVersion()")} equals ${chalk.blue(
  "printPkgProp('version')"
)}`, async t => {
  t.is(await printPkgVersion(), await printPkgProp("version"));
});
