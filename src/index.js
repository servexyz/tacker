const log = console.log;
import chalk from "chalk";
import isEmpty from "is-empty";
import is from "@sindresorhus/is";
import { getPkgProp } from "get-pkg-prop";

export function getObjFromArray(arr) {
  return arr.reduce((obj, clr) => {
    return Object.assign(obj, { [clr]: clr });
  }, {});
}

export const colorsArr = [
  "black",
  "red",
  "green",
  "yellow",
  "blue",
  "magenta",
  "cyan",
  "white",
  "grey",
  "redBright",
  "greenBright",
  "yellowBright",
  "blueBright",
  "magentaBright",
  "cyanBright",
  "whiteBright"
];

export const colors = getObjFromArray(colorsArr);

//TODO: Change getChalkColor from lazy switch statement to fn constructor
export function getChalkColor(szColor) {
  let color = szColor.toLowerCase();
  switch (color) {
    case "red":
      return chalk.red;
    case "yellow":
      return chalk.yellow;
    case "green":
      return chalk.green;
    case "blue":
      return chalk.blue;
    case "magenta":
      return chalk.magenta;
    case "cyan":
      return chalk.cyan;
    case "white":
      return chalk.white;
    case "grey":
      return chalk.grey;
    case "redBright":
      return chalk.redBright;
    case "greenBright":
      return chalk.greenBright;
    case "yellowBright":
      return chalk.yellowBright;
    case "blueBright":
      return chalk.blueBright;
    case "magentaBright":
      return chalk.magentaBright;
    case "cyanBright":
      return chalk.cyanBright;
    case "whiteBright":
      return chalk.whiteBright;
    default:
      return chalk.white;
  }
}

//TODO: Think about exporting default; tk.mirror is easier to type
//TODO: Rename "printMirror" to just "mirror" (or something else)
export function printMirror(
  oVar,
  szKeyColor,
  szValueColor,
  szVarValueOverride
) {
  //? Faster to call keys/values separately or entries?
  let key, value, keyColor, valueColor;
  key = Object.keys(oVar)[0];

  if (isEmpty(szVarValueOverride)) {
    if (typeof Object.values(oVar)[0] == "object") {
      value = JSON.stringify(Object.values(oVar)[0], null, 2);
    } else {
      value = Object.values(oVar)[0];
    }
  } else {
    value = szVarValueOverride;
  }

  keyColor = getChalkColor(szKeyColor);
  valueColor = getChalkColor(szValueColor);
  let mirror = `${keyColor(key)}: ${valueColor(value)}`;
  log(mirror);
  return mirror;
}
/* 
  TODO: Add oLineStyle arg
  printMarquee(
    "blue",
    ["childDirPath", "childPackagePath"],
    "white",
    "were both found"
  );
*/

function parseLineOptions(options) {
  let typeFlag;
  if (typeof options === "object") {
    const {
      color = "white",
      length = 59,
      character = "-",
      quantity = 1
    } = options;
    typeFlag = "object";
    return [
      typeFlag,
      {
        color,
        length,
        character,
        quantity
      }
    ];
  } else if (typeof options === "string") {
    typeFlag = "string";
    let color = options;
    return [typeFlag, color];
  }
}

export async function printPkgVersion(mPackageSource) {
  let version;
  if (is.nullOrUndefined(mPackageSource)) {
    version = await getPkgProp("version");
  } else {
    version = await getPkgProp("version", mPackageSource);
  }
  printMirror({ version }, "blue", "grey");
  return version;
}
export async function printPkgProp(szProperty, mPackageSource) {
  let property;
  if (is.nullOrUndefined(mPackageSource)) {
    property = await getPkgProp(szProperty);
  } else {
    property = await getPkgProp(szProperty, mPackageSource);
  }
  printMirror({ property }, "blue", "grey");
  return property;
}
export function printLine(colorOrOptions) {
  let lines = [];
  let opts = parseLineOptions(colorOrOptions);
  if (opts[0] == "object") {
    var { color, length, character, quantity } = opts[1];
  } else if (opts[0] == "string") {
    color = opts[1];
    length = 59;
    character = "-";
    quantity = 1;
  }
  let line = character.repeat(length);
  let lineColor = getChalkColor(color);
  for (let i = 0; i < quantity; i++) {
    log(lineColor(line));
    lines.push(lineColor(line));
  }
  return lines;
}
