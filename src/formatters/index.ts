/** This heuristic is courtesy Dominik Moritz */
export function justEnoughPrecision(n: number) {
  if (typeof n !== "number") throw Error("argument must be a number");
  const str = n.toString();
  // if there are no floating point digits, return the string
  if (n === ~~n) return str;
  const [left, right] = str.split(".");

  // count the integer side
  const leftSideDigits = left
    .split("")
    .filter((l) => l !== "-") // remove the negative sign
    .join("").length;

  // calculate the remaining available precision
  const remainingPrecision = Math.max(0, 5 - leftSideDigits);
  // take the remaining precision from the floating point side.
  const remainingFloatingPoints = right.slice(0, remainingPrecision);
  // format a new string
  return `${left}${remainingFloatingPoints.length ? "." : ""}${
    remainingFloatingPoints || ""
  }`;
}
