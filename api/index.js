const http = require("http");
const data = require("./data");
const port = 8000;

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(data));
    // res.write(`hello rohit, I am at port number: ${port}`);
    res.end();
  })
  .listen(port);
