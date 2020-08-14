import React, { useState, useEffect } from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import { FormControl, InputLabel, Input } from "@material-ui/core";
import Message from "./Message";
import db from "./Firebase";
import firebase from 'firebase';
import  FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';


function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");
  // console.log(input);
  // console.log(messages);

  const sendMessage = (event) => {
    event.preventDefault();
    //setMessages([...messages, { username: username, text: input }]);
    db.collection('messages').add({
      message:input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
    })
    setInput("");
  };
  //*Code runs base on a condition
  useEffect(() => {
    setUsername(prompt("Your Name Please..."));
  }, []);
  //*Disabled proeprty -> disables the button when there is no input in the input field

  useEffect(() => {
    db.collection("messages")
    .orderBy('timestamp','desc')
    .onSnapshot((snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({id:doc.id,message:doc.data()})));
    });
  }, []);

  return (
    <div className="App">
      <h1>VinChat⌨ ⌨ ⌨ ⌨ ⌨ ⌨ ⌨ </h1>
      <h3>Welcome Mr/Mrs {username} 🙂 🙂 🙂 🙂 </h3>
      <form className="app__form">
        {/* Input Field */}

        <FormControl className ="app__formControl">
          {/* <InputLabel>Your reply goes here...</InputLabel> */}
          <Input
          className="app__input"
          placeholder = "Your reply goes here..."
            value={input}
            onChange={(event) => setInput(event.target.value)}
          ></Input>
          <IconButton
          className ="app__iconButton"
           type="submit"
           onClick={sendMessage}
           variant="contained"
           color="primary"
           disabled={!input}
           >
            <SendIcon></SendIcon>
          </IconButton>
          {/* <Button
            type="submit"
            onClick={sendMessage}
            variant="contained"
            color="primary"
            disabled={!input}
          >
            Send Message
          </Button> */}
          
        </FormControl>

      </form>

      {/* Messages */}
<FlipMove>
{messages.map(({id,message}) => (
        <Message key={id} username={username} message={message} />
      ))}
</FlipMove>
      
    </div>
  );
}

export default App;
