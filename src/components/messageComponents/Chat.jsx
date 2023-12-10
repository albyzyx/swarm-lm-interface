import { useEffect, useState } from "react";
import UserMessage from "./UserMessage";
import AIMessage from "./AIMessage";
import AILoading from "./AILoading";
import Navbar from "../Navbar";

function Chat() {
  const [aiLoading, setAiLoading] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "AI",
      message: "Hi there, matey.",
    },
  ]);
  const prePrompt = [
    {
      name: "SYSTEM",
      message:
        "You are a helpful assistant who speaks in the tone of a pirate!",
    },
  ];
  const sendMessage = () => {
    let newMessages = [...messages];
    newMessages.push({
      name: "USER",
      message: userInput,
    });
    setMessages(newMessages);
    newMessages = [...prePrompt, ...newMessages];

    setAiLoading(true);
    const formattedString =
      newMessages
        .map((message) => {
          let prefix = message.name === "AI" ? "### Assistant:" : "### User:";
          if (message.name === "SYSTEM") prefix = "### System:";
          return `${prefix}\n${message.message}`;
        })
        .join("\n") + "\n### Assistant:";
    console.log(formattedString);
    fetch("http://130.250.185.236:31321/api/v1/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        model: "stabilityai/StableBeluga-7B",
        useraddr: "0x32F1E485a7D823d767691e70bE9FBA00fdf7e3cB",
        inputs: formattedString,
        max_new_tokens: "35",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        let op = data.outputs.split("###")[0];
        op = op.split("</s>")[0];
        const formatted = {
          name: "AI",
          message: op,
        };
        console.log(newMessages);
        newMessages.shift();
        const newMessages2 = [...newMessages, formatted];
        console.log(newMessages2);
        setMessages(newMessages2);
        setAiLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Navbar />
      <section>
        <div className="chatContainer">
          <div className="messages">
            {messages.map((message) => {
              return message.name === "USER" ? (
                <UserMessage data={message} />
              ) : (
                <AIMessage data={message} />
              );
            })}
            {aiLoading && <AILoading />}
          </div>
        </div>
        <form action="" className="messageSubmitForm" autoComplete="off">
          <div className="buttons">
            <button className="formBtn">Export as ScreenShot.</button>
            <button className="formBtn">Regenerate</button>
            <button className="formBtn">Continue</button>
          </div>
          <div className="userBox hSecondary">USER</div>
          <input
            className="messageInput hSecondary"
            type="text"
            placeholder="Enter a user message.."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                sendMessage();
                setUserInput("");
              }
            }}
          />
        </form>
      </section>
    </>
  );
}

export default Chat;
