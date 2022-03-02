/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  if (s.length < 2) return false
  let len = s.length
  let stack = []

  for (let i = 0; i < len; i++) {
    if (s[i] === "(") {
      stack.push(")")
    } else if (s[i] === "[") {
      stack.push("]")
    } else if (s[i] === "{") {
      stack.push("}")
    } else if (!stack || stack.pop() !== s[i]) {
      return false
    }
  }
  
  return !(stack && stack.length)
};