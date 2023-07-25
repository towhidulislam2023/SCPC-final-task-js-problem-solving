// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.

// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3

function findMostFrequentElement(arr) {
  const frequencyCounter = {};

  for (let num of arr) {
    frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;
  }

  let mostFrequentElement;
  let highestFrequency = 0;
  for (let num in frequencyCounter) {
    if (frequencyCounter[num] > highestFrequency) {
      highestFrequency = frequencyCounter[num];
      mostFrequentElement = num;
    }
  }

  return parseInt(mostFrequentElement);
}

const inputArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const output = findMostFrequentElement(inputArray);
console.log(output); // Output: 3
