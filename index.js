const WebSocket = require("ws");

// Créer un serveur Websocket

const wss = new WebSocket.Server({port: 8080}, () => {
    console.log("Server started");
});

// Ecouter les connexions
wss.on("connection", connection => {
    // Ecouter les messages
})