// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
function findSecondSmallest(arr) {
  if (arr.length < 2) {
    return "Array must contain at least two elements.";
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let num of arr) {
    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (num < secondSmallest && num !== smallest) {
      secondSmallest = num;
    }
  }

  if (secondSmallest === Infinity) {
    return "There is no second smallest element in the array.";
  }

  return secondSmallest;
}

console.log(findSecondSmallest([5, 2, 7, 1, 8]));
console.log(findSecondSmallest([9, 3, 6, 3, 10]));
console.log(findSecondSmallest([1, 1, 1]));
console.log(findSecondSmallest([5]));
