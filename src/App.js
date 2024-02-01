import { io } from "socket.io-client";


function App() {

  //we have to pass backend server url to it 
  const socket = io("http://localhost:5000");

  return (
    <div >
  App
    </div>
  );
}

export default App;
