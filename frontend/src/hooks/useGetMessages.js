import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import useConversation from "../zustand/useConversation.js";

const useGetMessages = () => {
  const { selectedConversation, setMessages, messages } = useConversation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMessages = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `/api/messages/${selectedConversation._id}`
        );
        const data = await response.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setMessages(data);
      } catch (error) {
        toast.error(
          error.message || "An error occurred while fetching messages."
        );
      } finally {
        setLoading(false);
      }
    };
    getMessages();
  }, [selectedConversation._id, setMessages]);
  return { messages, loading };
};

export default useGetMessages;
