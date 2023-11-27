// touch .gitignore # Crea una carpeta con el nombre de .gitignore
//El .gitignore evita que no se suba al repositorio el nombre del archivo que deseemos en este caso node_modules

const http = require('node:http');

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'Hello World!',
  }));
});

server.listen(8000);