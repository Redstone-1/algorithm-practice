var maxArea = function(height) {
  let area = 0
  if (height && height.length === 0) { 
    return 0
  } else {
    let len = height.length
    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        if (height[i] > height[j]) {
          area = (j - i) * height[j] > area ? (j - i) * height[j] : area 
        } else {
          area = (j - i) * height[i] > area ? (j - i) * height[i] : area 
        }
      }
    }
    return area
  }
}

var maxArea = function(height) {
  let area = 0
  if (height && height.length === 0) { 
    return 0
  } else {
    let i = 0
    let j = height.length - 1
    while (i < j) {
      if (height[i] < height[j]) {
        area = height[i] * (j - i) > area ? height[i] * (j - i): area
        i++
      } else {
        area = height[j] * (j - i) > area ? height[j] * (j - i): area
        j--
      }
    }
    return area
  }
}



console.log(maxArea([1,8,6,2,5,4,8,3,7]))