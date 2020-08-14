import React, { useState, useEffect } from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import { FormControl, InputLabel, Input } from "@material-ui/core";
import Message from "./Message";
import db from "./Firebase";
import firebase from 'firebase';

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
      setMessages(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="App">
      <h1>VinChat⌨ ⌨ ⌨ ⌨ ⌨ ⌨ ⌨ </h1>
      <h3>Welcome Mr/Mrs {username} 🙂 🙂 🙂 🙂 </h3>
      <form>
        {/* Input Field */}

        <FormControl>
          <InputLabel>Your reply goes here...</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          ></Input>
          <Button
            type="submit"
            onClick={sendMessage}
            variant="contained"
            color="primary"
            disabled={!input}
          >
            Send Message
          </Button>
        </FormControl>
      </form>

      {/* Messages */}

      {messages.map((message) => (
        <Message username={username} message={message} />
      ))}
    </div>
  );
}

export default App;
