var searchInsert = function(nums, target) {
  if (!nums) return 0
  const len = nums.length
  for (let i = 0; i <= len - 1; i++) {
    if (target === nums[i]) {
      return i
    }
    if (target > nums[i] && target < nums[i + 1]) {
      return i + 1
    }
    if (target > nums[len - 1]) {
      return len
    }
    if (target < nums[0]) {
      return 0
    }
  } 
}

console.log(searchInsert([1, 3, 5, 6], 5));