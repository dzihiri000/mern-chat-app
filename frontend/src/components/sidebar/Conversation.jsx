const Conversation = () => {
  return (
    <>
      <div className="flex items-center gap-2 p-2 py-1 hover:bg-sky-500 rounded cursor-pointer">
        <div className="avatar online">
          <div className="w-2 rounded-full">
            <img src="https://via.placeholder.com/40" alt="User Avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="text-gray-200 font-bold">User Name</p>
            <span className="text-xl">😛</span>
          </div>
        </div>
      </div>

      <div className="divider my-0 py-0 h-1" />
    </>
  );
};

export default Conversation;
