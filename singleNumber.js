const singleNumber = (nums) => {
  // check for a non-duplicate integer in the array
  // only ever one non-duplicate

  // sort from lowest to greatest to make logic easier
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    // checking if number next to the focus is the same and return if not the same
    if (nums[i] == nums[i + 1]) {
      i++
    } else {
      return nums[i]
    }
  }
}

console.log(singleNumber([2, 1, 3, 1, 2]))

// Things to study
// time complexity --> 
// space complexity --> 