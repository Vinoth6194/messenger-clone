import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState("");
  const [messages,setMessages] = useState(["Hi Bro","Vanakam", "Mahalo"]);
  console.log(input);
  console.log(messages);

  const sendMessage = (event)  =>{
    setMessages([...messages,input]);
    setInput('');
  }
  return (
    <div className="App">
    <h1>Hello Clever Programmers :🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 </h1>
    <input value ={input} onChange ={event =>setInput(event.target.value)}></input>
    <button onClick ={sendMessage}>Send Message</button>
    {/* Input Field */}
    {/* Button */}
    {/* Messages */}
    </div>
  );
}

export default App;
