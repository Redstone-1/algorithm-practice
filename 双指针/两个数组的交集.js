/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
  let arr1 = nums1.sort((a, b) => a - b)
  let arr2 = nums2.sort((a, b) => a - b)
  let i = 0
  let j = 0
  let result = []
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      i++
    } else if (arr1[i] > arr2[j]) {
      j++
    } else {
      result.push(arr1[i])
      i++
      j++
    }
  }
  return result
};