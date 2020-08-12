import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(["Hi Bro", "Vanakam", "Mahalo"]);
  console.log(input);
  console.log(messages);

  const sendMessage = (event) => {
    setMessages([...messages, input]);
    setInput("");
  };
  return (
    <div className="App">
      <h1>Hello Clever Programmers :🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 </h1>
      {/* Input Field */}

      <input
        value={input}
        onChange={(event) => setInput(event.target.value)}
      ></input>
      {/* Button */}

      <button onClick={sendMessage}>Send Message</button>
      {/* Messages */}

    {messages.map(message =>(
      <p>{message}</p>
    ))}
    </div>
  );
}

export default App;
