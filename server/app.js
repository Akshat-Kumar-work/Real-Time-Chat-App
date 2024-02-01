//got express instance
const express = require("express");
//created backend app using express
const app = express();

//got http instance
const http = require('http');
//created http server by passing our backend app in it
const HttpServer = http.createServer(app);

//de-structured Server method form socket.io library 
const {Server} = require("socket.io");
//created web-socket server by Server method of socket.io library
const io = new  Server(HttpServer,{
    cors:{
        origin:"*",
        methods:["GET","POST"],
        credentials:true
    }
})

const cors = require("cors");
app.use(cors( {
    origin:"*",
    credentials:true
}));

const PORT = 5000;


app.get("/",(req,res)=>{
    res.send("Hello")
});

//console socket id on socket connection event , here socket is a current particular user or client
io.on("connection",(socket)=>{
    console.log("New User Connected, Socket Id: ",socket.id);
    
    //we are sending the Welcome to server message on triggering of welcome event
   // socket.emit("welcome", `Welcome socket Id ${socket.id}`);

    //for notifications 
    //socket.broadcast.emit("newSocketJoined",`${socket.id} joined the server`);

    //message-> on triggered message event console the data
    socket.on("message", ({message,room})=>{
        io.to(room).emit("receive-message",message)
    })
})

HttpServer.listen(PORT,()=>{
    console.log(`app started on port ${PORT}`);
})