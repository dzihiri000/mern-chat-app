import Message from "./Message";
import MessageSceleton from "../sceletons/MessageSceleton";
import useGetMessages from "../../hooks/useGetMessages";
import { useEffect, useRef } from "react";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }, 50);
  }, [messages]);

  return (
    <div className="flex-1 px-4 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div ref={lastMessageRef} key={message._id}>
            <Message message={message} />
          </div>
        ))}

      {loading &&
        [...Array(3)].map((_, index) => <MessageSceleton key={index} />)}

      {!loading && messages.length === 0 && (
        <p className="text-gray-500">
          Send a message to start the conversation
        </p>
      )}
    </div>
  );
};

export default Messages;
