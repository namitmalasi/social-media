const express = require("express");
const {
  register,
  login,
  followUser,
  getPostOfFollowing,
} = require("../controllers/user");
const { isAuthenticated } = require("../middlewares/auth");

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/follow/:id").get(isAuthenticated, followUser);

router.route("/posts").get(isAuthenticated, getPostOfFollowing);

module.exports = router;
