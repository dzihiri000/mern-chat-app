import { useState } from "react";
import { useAuthContext } from "./../context/AuthContext";
import { toast } from "react-hot-toast";

/**
 * Custom hook for handling user logout.
 * It clears the user data from local storage and updates the auth context.
 */
const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const logout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      // Clear user data from local storage
      localStorage.removeItem("chat-user");
      // Update auth context
      setAuthUser(null);
      toast.success("Logged out successfully.");
    } catch (error) {
      toast.error(error.message || "An error occurred during logout.");
    } finally {
      setLoading(false);
    }
  };

  return { logout, loading };
};

export default useLogout;
