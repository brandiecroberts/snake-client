const connect = require("./client");
const conn = connect();

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function(data) {
  // your code here
  console.log(data);
  if (data === '\u0003') {
    process.exit();
  }
  if (data === "w") {
    // connect.on("data", () => {
    conn.write("Move: up");
    // });
  }
  if (data === "a") {
    // connect.on("data", () => {
    conn.write("Move: left");
    // });
  }
  if (data === "s") {
    // connect.on("data", () => {
    conn.write("Move: down");
    // });
  }
  if (data === "d") {
    // connect.on("data", () => {
    conn.write("Move: right");
    // });
  }
};

setupInput();

module.exports = setupInput;