/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
  let num = digits.length > 1 ? BigInt(digits.join("")) : BigInt(digits[0])
  let number = num + BigInt(1n)
  return number.toString().split("")
};