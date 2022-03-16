const express = require("express");
const {
  createPost,
  likeandUnlikePost,
  deletePost,
  updateCaptions,
  commentOnPost,
} = require("../controllers/post");
const { getPostOfFollowing } = require("../controllers/user");
const { isAuthenticated } = require("../middlewares/auth");

const router = express.Router();

router.route("/post/upload").post(isAuthenticated, createPost);
router
  .route("/post/:id")
  .get(isAuthenticated, likeandUnlikePost)
  .put(isAuthenticated, updateCaptions)
  .delete(isAuthenticated, deletePost);

router.route("/posts").get(isAuthenticated, getPostOfFollowing);

router.route("/post/comment/:id").put(isAuthenticated, commentOnPost);
module.exports = router;
