// var removeDuplicates = function(nums) {
//   const map = new Map()
//   for (let i = 0; i < nums.length; i++) {
//     if (!map.has(nums[i])) {
//       map.set(nums[i], i)
//     } else {
//       nums.splice(i, 1)
//       i = i - 1
//     }
//   }
//   return (nums.length)
// }

// var removeDuplicates = function(nums) {
//   const arr = [...new Set(nums)]
//   nums.splice(0, 0, ...arr)
//   return arr.length
// }

var removeDuplicates = function(nums) {
  if (nums.length < 2) {
    return nums.length
  }
  let t = 0;
  for (let i = 1; i < nums.length; i++) {
      if (nums[i] === nums[i-1]) {
          t++
      }
      nums[i - t] = nums[i]
  }
  return nums.length - t
}

console.log(removeDuplicates([1,1,1,3,3,4,5]));