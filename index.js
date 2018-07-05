const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  console.log("req.url ", req.url);

  const parsedURL = url.parse(req.url, true);
  console.log("parsedURL: ", parsedURL);

  const path = parsedURL.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, "");
  console.log("trimmedPath: ", trimmedPath);

  const method = req.method.toLowerCase();
  console.log("method: ", method);

  const queryStringObject = parsedURL.query;
  console.log("queryStringObject: ", queryStringObject);

  const headers = req.headers;
  console.log("headers: ", headers);

  res.end("Hello World");
});

const PORT = 5000;

server.listen(PORT, (req, res) => {
  console.log(`We are live on ${PORT}`);
});
