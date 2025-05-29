import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id; // Get the logged-in user's ID from the request object

    // Find all users except the one with userId
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password -__v -createdAt -updatedAt");

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error("Error in getUsersForSidebar:", error.message);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};
