import React, { useState ,useEffect} from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import { FormControl, InputLabel, Input } from "@material-ui/core";
import Message from "./Message";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{username:'Vinoth', text:'Hi bro'},{username:"Kiruthika",text:"Hi da"}]);
  const [username,setUsername] = useState('');
  // console.log(input);
  // console.log(messages);

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, {username:username,text:input}]);
    setInput("");
  };
//*Code runs base on a condition
  useEffect(() =>{
    setUsername(prompt('Your Name Please...'))
  },[])
  //*Disabled proeprty -> disables the button when there is no input in the input field

  return (
    <div className="App">
      <h1>VinChat⌨ ⌨ ⌨ ⌨ ⌨ ⌨ ⌨  </h1>
  <h3>Welcome Mr/Mrs {username} 🙂  🙂  🙂  🙂 </h3>
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
        <Message userName = {message.username}text={message.text} />
      ))}
    </div>
  );
}

export default App;