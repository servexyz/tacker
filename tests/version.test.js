import test from "ava";
import { printVersion } from "../src/index";

test("printVersion is detecting types", t => {
  t.plan(3);
  t.is(printVersion(), "is undefined");
  t.is(printVersion("str"), "is string");
  t.is(printVersion({ foo: "bar" }), "is object");
});
