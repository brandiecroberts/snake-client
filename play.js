// const myClient = ("../client");
// // console.log(myClient);

const net = require("net");
// const client = require('../client');

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    
    host: 'localhost', // IP address here,
    port: 50541 // PORT number here,
    
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on("data", (data) => {
    // code that does something when the connection is first established
    console.log(data);
  });
  
  return conn;
};

console.log("Connecting ...");
connect();
