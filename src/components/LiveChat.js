import React from "react";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  return (
    <div className="h-[500px] w-full border border-black mx-2 rounded-lg bg-slate-100">
      <ChatMessage name="Himanshu Yadav" message="This is Youtube Live chat" />
      <ChatMessage name="Himanshu Yadav" message="This is Youtube Live chat" />
      <ChatMessage name="Himanshu Yadav" message="This is Youtube Live chat" />
      <ChatMessage name="Himanshu Yadav" message="This is Youtube Live chat" />
      <ChatMessage name="Himanshu Yadav" message="This is Youtube Live chat" />
    </div>
  );
};

export default LiveChat;
