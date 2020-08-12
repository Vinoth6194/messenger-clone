import React, { useState } from "react";
import "./App.css";

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
  return (
    <div className="App">
      <h1>Hello Clever Programmers :🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 </h1>
      <form>
        {/* Input Field */}

        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        ></input>
        {/* Button */}

        <button type="submit" onClick={sendMessage}>Send Message</button>
      </form>

      {/* Messages */}

      {messages.map((message) => (
        <p>{message}</p>
      ))}
    </div>
  );
}

export default App;
