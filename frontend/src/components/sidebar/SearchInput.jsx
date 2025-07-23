import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import toast from "react-hot-toast";

import useConversation from "../../zustand/useConversation";
import useGetConversation from "../../hooks/useGetConversation";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.length < 3) {
      toast.error("Please enter more then 3 characters");
      return;
    }
    const foundConversation = conversations.find((conversation) =>
      conversation.fullName.toLowerCase().includes(search.toLowerCase())
    );
    if (foundConversation) {
      setSelectedConversation(foundConversation);
    } else {
      toast.error("No conversation found");
    }
    setSearch("");
  };

  return (
    <div>
      <form className="flex items-center gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered rounded-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="btn btn-circle bg-sky-500 text-white">
          <FaSearch className="w-6 h-6 outline-none" />
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
