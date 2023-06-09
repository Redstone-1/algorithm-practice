/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
  const gap = k > nums.length ? k % nums.length : k
  const arr = nums.splice(nums.length - gap, gap)
  arr.reverse().forEach(i => nums.unshift(i))
  return nums
};