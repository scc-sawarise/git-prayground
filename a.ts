// reduce array to single value
const numbers = [1, 2, 3, 4, 5];
export const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum); // Output: 15
