var longestValidParentheses = function(s) {
  const n = s.length
  const stk = [-1]
  let num = 0
  for (let i = 0; i < n; i++) {
    if(s[i] === '(') {
      stk.push(i)
    } else {
      stk.pop(i)
      if (!stk.length) {
        stk.push(i)
      } else {
        num = Math.max(num, i - stk[stk.length - 1] )
      }
    }
  }
  return num
}