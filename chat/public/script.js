const socket = io();

const username=document.getElementById('username');
const message=document.getElementById('message');
const sendButton=document.getElementById('send');
const allmessages=document.getElementById('messages');

socket.on('message',data=>{
  console.log(data);
  const p=document.createElement('p');
  p.innerText=data.username+': '+data.message;
  allmessages.appendChild(p);
})
sendButton.addEventListener('click',()=>{
  socket.emit('message',{
    username:username.value,
    message:message.value
  });
  message.value='';
  message.focus();
})