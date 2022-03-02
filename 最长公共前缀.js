/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let prefix = strs[0]
  for (let i = 0; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1)
    }
  }
  return prefix
};

var longestCommonPrefix = function(strs) {
  return strs.reduce((prefix, cur) => {
    while (cur.indexOf(prefix) !== 0 ) {
      prefix = prefix.slice(0, prefix.length - 1) 
    }
    return prefix
  })
};