const WebSocket = require("ws");

// Créer un serveur Websocket

const wss = new WebSocket.Server({port: 8080}, () => {
    console.log("Server started");
});

// Ecouter les connexions
wss.on("connection", connection => {
    console.log("Someone is connected");
    // Ecouter les messages
    connection.on("message", message => {
        // console.log(message)
        console.log(message.toString());
        // Transmettre un message à tous les autres utilisateurs connectés (broadcast)
        wss.clients.forEach(client => {
          if (client !== connection && client.readyState === WebSocket.OPEN) {
            client.send(message);
          }
        });
      });
    });