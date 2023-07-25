import asyncHandler from "express-async-handler";

// @desc    Auth user/set token
// route    POST /api/users/auth
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "auth user",
  });
});

// @desc    Register a new user
// route    POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "register user",
  });
});

// @desc    Logout
// route    POST /api/users/logout
// @access  Public
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "logout user",
  });
});

// @desc    Get user profile
// route    GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "logout user",
  });
});

// @desc    Update user profile
// route    PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "logout user",
  });
});

export { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile };
