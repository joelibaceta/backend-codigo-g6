var socket = io();

var username = "unknow";

let chatInput = document.getElementById("messageInput");

chatInput.addEventListener('keydown', (e) => {
    socket.emit('onTyping', username)
})

function sendMessage() {
    let messageInput = document.getElementById("messageInput")

    socket.emit('message', {
        user: username,
        message: messageInput.value
    })
}

function joinToRoom() {
    let usernameInput = document.getElementById("username")
    username = usernameInput.value;
    socket.emit("joinToRoom", username);
    let chatBox = document.getElementById("chatBox")
    chatBox.style.display = "block";
    let welcomeBox = document.getElementById("welcomeBox")
    welcomeBox.style.display = "none";
}

socket.on("message", (msg)=>{
    let divMessage = document.createElement("div");
    divMessage.textContent = msg;
    let messages = document.getElementById("messages");
    messages.appendChild(divMessage);
    
})

socket.on("typing", (username) => {
    let statusLabel = document.getElementById('statusLabel');
    statusLabel.textContent= username + ' esta escribiendo...';
    setTimeout(()=>{
        statusLabel.textContent=""
    }, 1000)
})