const express = require("express");
const {
  createPost,
  likeandUnlikePost,
  deletePost,
  updateCaptions,
} = require("../controllers/post");
const { isAuthenticated } = require("../middlewares/auth");

const router = express.Router();

router.route("/post/upload").post(isAuthenticated, createPost);
router
  .route("/post/:id")
  .get(isAuthenticated, likeandUnlikePost)
  .put(isAuthenticated, updateCaptions)
  .delete(isAuthenticated, deletePost);

module.exports = router;
