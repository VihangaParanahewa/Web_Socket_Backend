const WebSocket = require('ws');

// Create a WebSocket server instance
const wss = new WebSocket.Server({ port: 8080 });

// Event listener for new client connections
wss.on('connection', (ws) => {
  console.log('A new client connected.');

  // Send a message to the client when they connect.
  //const initialMessage = 'Hello, server! This is the client speaking.'
  const initialMessage = {"data" : "{\"subscriptionID\":\"1234567ABC\",\"message\":\"sample_message\",\"K23434_processing_type\":\"Address_Message\",\"address.message.command.timestamp\":\"57923759212\",}", "id" : "12345678", "key" : "sample_key"}

  ws.send(JSON.stringify({"active" : "true"}));
  ws.send(JSON.stringify(initialMessage));
  ws.send(JSON.stringify(initialMessage));
  ws.send(JSON.stringify(initialMessage));


  // Event listener for messages from clients
  ws.on('message', (message) => {
    console.log('Message from client:', message);

    // Example: Send a reply back to the client
    ws.send('Received your message: ' + message);
  });

  // Event listener for client disconnections
  ws.on('close', () => {
    console.log('Client disconnected.');
  });

  // Event listener for errors
  ws.on('error', (error) => {
    console.error('WebSocket error:', error);
  });
});
