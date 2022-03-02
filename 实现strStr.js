/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
  // 第一
  let num = needle.length
  if (!haystack && !needle) return 0
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.substring(i, i + num) === needle) {
      return i
    }
  }
  return -1
};

var strStr = function(haystack, needle) {
  // 第二，俗称 忘掉初心
  return haystack.indexOf(needle)
};