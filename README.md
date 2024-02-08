# Web Sockets
It is an computer communication protocol
It provide 2 way communication channel over a single TCP (transmission control protocol) connection
It provide real time communication between client and server
Web Sockets are the preferred option when you need rapid, live interactions, such as chat applications, live feeds, online gaming, or collaborative platforms
WebSockets also used with webrtc to transfer the information liek SDP(Session description protocol) it contain various information such as public ip adress,  video on/off, to establish the connection between the clients once the connection is established the server discarded

# Http
This protocol is used for web pages which don't require real time updates
HTTP requests can only flow in one direction, from the client to the server
There is no way for the server to initiate communication with the client; it can only respond to requests

# To use this app
clone this repo
In terminal use -npm i , To install packages
In terminal use - cd server , To change directory
Again use - npm i , To install node packages

# To run this app
To start the client and server concurrently
use- npm run dev on root directory
after that open 2 browser window as client side code in on local host 3000
Open 2 local host 3000 you will see the room Id's 
according to you send and receive messages