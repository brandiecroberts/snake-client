const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost', // IP address here,
    port: 50541, // PORT number here,host
  });
  conn.on("connect", () => {
    console.log('Successfully connected to the game server');
    conn.write('Name: BCR');
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");


  conn.on("data", (data) => {
    // code that does something when the connection is first established
    console.log(data);
  });
  
  return conn;
};

// console.log("Connecting ...");
// connect();

module.exports = connect;