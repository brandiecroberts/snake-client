const connect = require("./client");
const setupInput = require('./input');

console.log("Connecting ...");
connect();

// const setupInput = function() {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();
//   stdin.on("data", handleUserInput);

//   return stdin;
// };

// const handleUserInput = function(data) {
//   // your code here
//   console.log(data);
//   if (data === '\u0003') {
//     process.exit();
//   }
// };

setupInput();