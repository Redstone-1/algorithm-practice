/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
  if (!s) return false
  if (s.length === 1) return s === t
  if (s.length !== t.length) return false
  let sSort = s.split("").sort((a, b) => a > b ? 1 : -1)
  let tSort = t.split("").sort((a, b) => a > b ? 1 : -1)
  for (let i = 0; i < sSort.length; i++) {
    if (sSort[i] !== tSort[i]) {
      return false
    }
  }
  return true
};