const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  
  if (req.url === '/') {
    res.statusCode = 200;
    res.end('This is the index page');
  } else if (req.url === '/about') {
    res.statusCode = 200;
    res.end('About page');
  } else {
    res.statusCode = 404;
    res.end('Page not found')
  }
})

server.listen(5000, () => {
  console.log("Server running on port 5000")
})