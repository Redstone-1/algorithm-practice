/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
  let format = s.replace(/[^A-Za-z0-9]/gi,'').toLowerCase().split('');
  return format.join('') === format.reverse().join('')
};