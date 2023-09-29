import Input from "./Input";
import {useState} from "react"
import Message from "./Message";
export default function Chats() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const handleSubmit = async () => {
    const prompt = [{
      role: "user",
      content: input,
    }];

    setMessages([...messages, prompt[0]]);
    await fetch("http://localhost:8000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
         prompt
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        const res = data.output;
        setMessages((messages) => [
          ...messages,
          {
            role: "assistant",
            content: res,
          },
        ]);
       
        setInput("");
      });
  };




  return (
    <>
    <main>
     
        <div className="Content">
          {messages.map((el, i) => {
            return <Message key={i} role={el.role} content={el.content} />;
          })}
        </div>
        
  

    </main>
    <Input
    value={input}
    onChange={(e) => setInput(e.target.value)}
    onClick={input ? handleSubmit : undefined}
  />

</>
  );
}
