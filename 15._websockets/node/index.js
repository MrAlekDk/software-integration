import { WebSocketServer } from "ws";

const server = new WebSocketServer({port: 8080});

server.on("connection",(ws)=>{
    console.log("A new user has connected");

    ws.on("message", (message)=>{
        console.log(`Recieved following message from client: ${message}`);
        
        server.clients.forEach((client) =>{
            client.send(`Message from client: ${message}`);
        });
    })

});