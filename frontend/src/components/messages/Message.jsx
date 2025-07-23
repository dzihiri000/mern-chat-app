import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation.js";
import { extractTime } from "../../utils/extractTime.js";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const isSender = message.senderId === authUser._id;
  const chatClassName = isSender ? "chat-end" : "chat-start";
  const profilePic = isSender
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const bubbleBgColor = isSender ? "bg-blue-500 text-white" : "text-blue-500";
  const formatedTime = extractTime(message.createdAt);

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt=":-P" />
        </div>
      </div>
      <div className={`chat-bubble ${bubbleBgColor} pb-2`}>
        {message.message}
      </div>
      <div className="chat-footer opacity-50 flex gap-1 text-xs items-center">
        {formatedTime}
      </div>
    </div>
  );
};

export default Message;
