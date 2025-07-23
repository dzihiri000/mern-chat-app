import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversation.js";
import { getRandomEmoji } from "../../utils/emojis.js";

const Conversations = () => {
  const { conversations, loading } = useGetConversations();
  return (
    <div className="flex flex-col overflow-auto py-2 ">
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id || conversation.id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversations.length - 1}
        />
      ))}

      {loading ? <span className="loading loading-spinner mx-auto" /> : null}
    </div>
  );
};

export default Conversations;
