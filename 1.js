// var isAnagram = function(s, t) {
//   if (!s) return false
//   if (s.length === 1) return s === t
//   if (s.length !== t.length) return false
//   let sSort = s.split("").sort((a, b) => a > b ? 1 : -1)
//   let tSort = t.split("").sort((a, b) => a > b ? 1 : -1)
//   console.log(sSort, tSort);
//   for (let i = 0; i < sSort.length; i++) {
//     if (sSort[i] !== tSort[i]) {
//       return false
//     }
//   }
//   return true
// };

// console.log(isAnagram("anagram", "nagaram"));

// var isPalindrome = function(s) {
//   let format = s.replace(/[^A-Za-z0-9]/gi,'').toLowerCase().split('');
//   console.log(format);
//   return format.join('') === format.reverse().join('')
// };

// console.log(isPalindrome("A man, a plan, a canal: Panama"));

// /**
//  * @param {string} haystack
//  * @param {string} needle
//  * @return {number}
//  */
//  var strStr = function(haystack, needle) {
//   let num = needle.length
//   if (!haystack && !needle) return 0
//   for (let i = 0; i < haystack.length; i++) {
//     if (haystack.substring(i, i + num) === needle) {
//       return i
//     }
//   }
//   return -1
// };

// console.log(strStr("a", "a"))


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  return strs.reduce((prefix, cur) => {
    while (cur.indexOf(prefix) != 0 ) {
      prefix = prefix.slice(0, prefix.length - 1) 
      console.log(prefix);
    }
    return prefix
  })
};

console.log(longestCommonPrefix(["flower","flow","flight"]));