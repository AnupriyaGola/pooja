// connecting with sockets.
const socket = io('http://localhost:3000');

const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6IkRsMmg4SVJzdSIsImlhdCI6MTUzMzUzNDk5ODA1NiwiZXhwIjoxNTMzNjIxMzk4LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7InVzZXJJZCI6InZpV2ZBS3daSSIsImZpcnN0TmFtZSI6IkFudXBhbWEiLCJsYXN0TmFtZSI6IlNodWtsYSIsImVtYWlsIjoiYW51cGFtYV9zaHVrbGFAZ21haWwuY29tIiwibW9iaWxlTnVtYmVyIjowfX0.DZb5kAjgurnsqFvCUuvIVV-jEHKx8SkKMM2Bx0LDGtA"
const userId = qYK0flbqX;

let chatMessage = {
  createdOn: Date.now(),
  receiverId:qYK0flbqX,
  receiverName: Sheela,
  senderId: data.senderId,
  senderName: data.senderName
}

let chatSocket = () => {

  socket.on('verifyUser', (data) => {

    console.log("socket trying to verify user");

    socket.emit("set-user", authToken);

  });

  socket.on(userId, (data) => {

    console.log("you received a message from "+data.senderName)
    console.log(data.message)

  });

  socket.on("online-user-list", (data) => {

    console.log("Online user list is updated. some user can online or went offline")
    console.log(data)

  });

  socket.on("typing", (data) => {

    console.log(data+" is typing")
    
    
  });

  $("#send").on('click', function () {

    let messageText = $("#messageToSend").val()
    chatMessage.message = messageText;
    socket.emit("chat-msg",chatMessage)

  })

  $("#messageToSend").on('keypress', function () {

    socket.emit("typing","Mr Xyz")

  })




}// end chat socket function

chatSocket();
