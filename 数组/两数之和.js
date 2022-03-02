let twoNumberSum = function (nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const secondNumber = target - nums[i]
    if (map.has(secondNumber)) {
      return [map.get(secondNumber), i]
    } else {
      map.set(nums[i], i)
    }
  }
  return []
}