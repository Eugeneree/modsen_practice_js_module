// First, we create a function that returns a promise that resolves after 3 seconds
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  // Then, we create a function that takes a number and returns a promise that resolves with the square of the number
  function square(num) {
    return new Promise(resolve => resolve(num * num));
  }
  
  // Now, we create a chain of three promises
  delay(0)
    .then(() => 5) // The first promise resolves with the number 5
    .then(square) // The second promise takes the result of the first promise and squares it
    .then(delay.bind(null, 3000)) // The third promise waits for 3 seconds
    .then(square) // The fourth promise takes the result of the third promise and squares it
    .then(result => console.log(result)); // The fifth promise logs the final result to the console