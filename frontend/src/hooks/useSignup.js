import { useState } from "react";
import { useAuthContext } from "./../context/AuthContext";
import { toast } from "react-hot-toast";

/** * Custom hook for handling user signup.
 * It validates input, sends a request to the server, and updates the auth context.
 */

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });

    if (!success) return;
    setLoading(true);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message || "An error occurred during signup.");
      console.error("Signup error:", error);
      return;
    } finally {
      setLoading(false);
    }
  };
  return { signup, loading };
};

export default useSignup;

const handleInputErrors = ({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}) => {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill in all fields.");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Passwords do not match.");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password must be at least 6 characters long.");
    return false;
  }
  return true;
};
