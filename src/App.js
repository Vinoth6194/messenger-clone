import React, { useState } from "react";
import "./App.css";
import Button from "@material-ui/core/Button";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(["Hi Bro", "Vanakam", "Mahalo"]);
  console.log(input);
  console.log(messages);

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, input]);
    setInput("");
  };

  //*Disabled proeprty -> disables the button when there is no input in the input field

  return (
    <div className="App">
      <h1>Hello Clever Programmers :🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 </h1>
      <form>
        {/* Input Field */}

        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        ></input>

        <Button
          type="submit"
          onClick={sendMessage}
          variant="contained"
          color="primary"
          disabled={!input}
        >
          Send Message
        </Button>
      </form>

      {/* Messages */}

      {messages.map((message) => (
        <p>{message}</p>
      ))}
    </div>
  );
}

export default App;
