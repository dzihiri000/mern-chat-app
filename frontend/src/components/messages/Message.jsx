const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src="https://via.placeholder.com/40" alt=":-P" />
        </div>
      </div>
      <div className="chat-bubble text-white bg-blue-500 rounded-full">
        Hi! what is up?
      </div>
      <div className="chat-footer opacity-50 flex gap-1 text-xs items-center">
        12:45
      </div>
    </div>
  );
};

export default Message;
