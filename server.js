const express = require("express");
const http = require("http");
const { Server: SocketServer } = require("socket.io");

const app = express();
const httpServer = http.createServer(app);
const socketServer = new SocketServer(httpServer);

app.use(express.static("./public"));
app.get("/", (req, res) => {
  res.sendFile("index.html");
});

socketServer.on("connection", (client) => {
  console.log("usuario conectado");
});

const PORT = process.env.PORT || 8085;
httpServer.listen(PORT, () => {
  console.log(`Servidor escuchando al puerto ${PORT}`);
});
