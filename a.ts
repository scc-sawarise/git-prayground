// reduce array to single value
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const improveSum = numbers.reduce(
  (accumulator, currentValue) => accumulator - currentValue,
  0
);
console.log(improveSum); // Output: 55

// find first even number in array
export const firstEven = numbers.find((num) => num % 2 === 0);
console.log(firstEven); // Output: 2

// filter out odd numbers from array
export const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// map array to double each number
export const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
