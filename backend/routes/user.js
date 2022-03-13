const express = require("express");
const {
  register,
  login,
  followUser,
  getPostOfFollowing,
  logout,
  updatePassword,
  updateProfile,
} = require("../controllers/user");
const { isAuthenticated } = require("../middlewares/auth");

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/follow/:id").get(isAuthenticated, followUser);

router.route("/posts").get(isAuthenticated, getPostOfFollowing);

router.route("/update/password").put(isAuthenticated, updatePassword);
router.route("/update/profile").put(isAuthenticated, updateProfile);

module.exports = router;
