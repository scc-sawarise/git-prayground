// reduce array to single value
const numbers = [1, 2, 3, 4, 5];
export const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum); // Output: 15

// find first even number in array
export const firstEven = numbers.find((num) => num % 2 === 0);
console.log(firstEven); // Output: 2

// filter out odd numbers from array
export const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// map array to double each number
export const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
