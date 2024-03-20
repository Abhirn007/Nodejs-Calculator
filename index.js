// index.js

//  import the crypto module
const crypto = require('crypto');


//  get a commands using process.argv
const args = process.argv.slice(2);
const operation = args[0];
const numbers = args.slice(1).map(Number);

// Function to perform addition
const add = (nums) => {
    return nums.reduce((acc, num) => acc + num, 0);
};

// Function to perform subtraction
const sub = (nums) => {
    return nums.reduce((acc, num) => acc - num);
};

// Function to perform multiplication
const mult = (nums) => {
    return nums.reduce((acc, num) => acc * num, 1);
};

// Function to perform division
const divide = (nums) => {
    return nums.reduce((acc, num) => acc / num);
};

// Function to return sine of a number
const sin = (num) => {
    return Math.sin(num);
};

// Function to return cosine of a number
const cos = (num) => {
    return Math.cos(num);
};

// Function to return tangent of a number
const tan = (num) => {
    return Math.tan(num);
};
// Function to generate a random number of the desired length
const random = (length) => {
  if (!length) {
      return "Provide length for random number generation.";
  }
  const bytes = crypto.randomBytes(Math.ceil(length / 2));
  return bytes.toString('hex').slice(0, length);
};
// complete the  function


switch (operation) {
  case 'add':
      console.log(add(numbers));
      break;
  case 'sub':
      console.log(sub(numbers));
      break;
  case 'mult':
      console.log(mult(numbers));
      break;
  case 'divide':
      console.log(divide(numbers));
      break;
  case 'sin':
      console.log(sin(numbers[0]));
      break;
  case 'cos':
      console.log(cos(numbers[0]));
      break;
  case 'tan':
      console.log(tan(numbers[0]));
      break;
  case 'random':
      console.log(random(numbers[0]));
      break;
  default:
      console.log("Invalid operation.");
}

