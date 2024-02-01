import { useEffect, useMemo } from "react";
import { io } from "socket.io-client";
import { Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";


function App() {

  const [message , setMessage] = useState("");
  const [room,setRoom] = useState("");
  const [socketId,setSocketId] = useState("");


  //we have to pass backend server url to it 
  const socket = useMemo( ()=>{
   return(io("http://localhost:5000")) 
  },[]) 


  const handleSubmit =(e)=>{
    e.preventDefault();
    //emiting or triggering the message event with message data
    socket.emit("message",{message,room});
    setMessage("");
    setRoom("");
  }

  useEffect(()=>{
    socket.on("connect",()=>{
      setSocketId(socket.id)
      console.log("new socket connected id: ",socket.id)
    });

    // socket.on("welcome",(data)=>{
    //   console.log(data)
    // });
    // socket.on("newSocketJoined",(data)=>{
    //   console.log(data)
    // })

    socket.on("receive-message",(message)=>{
      console.log(message);
    })
  },[]);

  return (
    <Container>
      <Typography variant="h1" component="div" gutterBottom>
    Welcome to Socket.io
      </Typography>

      <Typography variant="h5" component="div" gutterBottom>
      This room Id {socketId}
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField value={message} onChange={e=>setMessage(e.target.value)} id="outlined-basic" label="Write Your message" variant="outlined"/>
        <TextField value={room} onChange={e=>setRoom(e.target.value)} id="outlined-basic" label="Write Your room" variant="outlined"/>
        <Button type="submit" variant="contained" color="primary">Send</Button>      
      </form>
    </Container>
  );
}

export default App;
