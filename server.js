// require http module web

const http = require('http')

// create PORT
const PORT = 5000

// Create server

http
  .createServer((request, response) => {
    response.end("<h1>Hello & Welcome to NodeJS !</h1>");
  })
  .listen(PORT);

console.log(`Server is running on  http://localhost:${PORT}`);