const http = require('http');
const url  = require('url');

const server = http.createServer( (request, response) => {
  // the line below will parse the url and then it will parse all 
  // the HTTP parameters and give them to us in a JS object
  // for instance: if the url is /?name=john&age=10
  // then params will be: { name: 'john', age: '10' }
  const params = url.parse(request.url, true).query;
  response.writeHead(200, { 'Content-Type': 'text/html' }); 
  response.write(`<!DOCTYPE html>
                  <html>
                    <head>
                      <title>My First HTML page from HTTP server</title>
                    </head>
                    <body>
                      <h1>Hello World and Hello ${params.name}!</h1>
                    </body>
                  </html>
                `);
  response.end();
});

server.listen(4000);
console.log('HTTP server is up and running on port 4000');