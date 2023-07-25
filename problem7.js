// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.
function romanToInt(romanNumeral) {
  const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < romanNumeral.length; i++) {
    const currentCharValue = romanValues[romanNumeral[i]];
    const nextCharValue = romanValues[romanNumeral[i + 1]];

    if (nextCharValue > currentCharValue) {
      result += nextCharValue - currentCharValue;
      i++;
    } else {
      result += currentCharValue;
    }
  }

  return result;
}

console.log(romanToInt("LVIII")); 

