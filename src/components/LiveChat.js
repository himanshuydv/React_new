import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generaterandomString } from "../utils/helper";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  const [textMessage, setTextMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.message);
  console.log(chatMessage);
  useEffect(() => {
    const i = setInterval(() => {
      console.log("API Polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generaterandomString(12),
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  const handleChatMessage = () => {};

  return (
    <>
      <div className="h-[500px] w-full border border-black mx-2 rounded-lg bg-slate-100 overflow-y-scroll flex flex-col-reverse">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addMessage({
                name: "Himanshu Yadav",
                message: textMessage,
              })
            );
            setTextMessage("");
          }}
        >
          <input
            className="ml-1 w-3/4"
            type="text"
            value={textMessage}
            onChange={(e) => setTextMessage(e.target.value)}
          />
          <button className="px-1 m-1 bg-blue-400">Send</button>
        </form>

        {chatMessage.map((chat, i) => (
          <ChatMessage key={i} name={chat.name} message={chat.message} />
        ))}
      </div>
    </>
  );
};

export default LiveChat;
