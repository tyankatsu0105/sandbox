const { Server } = require('ws');
const server = new Server({port:5001});

server.on('connection',(ws) => {
  ws.on('message',(message) =>{
      console.log(`Received: ${message}`);

      server.clients.forEach((client) =>{
          client.send(`${message} : ${new Date()}`);
      });
  });

  ws.on('close',() =>{
      console.log('I lost a client');
  });
});