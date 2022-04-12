import axios from "axios";

export const likePost = (id) => async (dispatch) => {
  try {
    dispatch({ type: "likeRequest" });

    const { data } = await axios.get(`/api/v1/post/${id}`);

    dispatch({ type: "likeSuccess", payload: data.message });
  } catch (error) {
    dispatch({ type: "likeFailure", payload: error.response.data.message });
  }
};

export const addCommentOnPost = (id, comment) => async (dispatch) => {
  try {
    dispatch({ type: "addCommentRequest" });

    const { data } = await axios.put(
      `/api/v1/post/comment/${id}`,
      { comment },
      { headers: { "Content-Type": "application/json" } }
    );

    dispatch({ type: "addCommentSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "addCommentFailure",
      payload: error.response.data.message,
    });
  }
};

export const deleteCommentOnPost = (id, commentId) => async (dispatch) => {
  try {
    dispatch({ type: "deleteCommentRequest" });

    const { data } = await axios.put(`/api/v1/post/comment/${id}`, {
      data: commentId,
    });

    dispatch({ type: "deleteCommentSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "deleteCommentFailure",
      payload: error.response.data.message,
    });
  }
};

export const getMyPosts = () => async (dispatch) => {
  try {
    dispatch({ type: "myPostsRequest" });

    const { data } = await axios.get("/api/v1/my/posts");

    dispatch({ type: "myPostsSuccess", payload: data.posts });
  } catch (error) {
    dispatch({
      type: "myPostsFailure",
      payload: error.response.data.message,
    });
  }
};

export const createNewPost = (image, caption) => async (dispatch) => {
  try {
    dispatch({ type: "newPostRequest" });

    const { data } = await axios.post(
      `/api/v1/post/upload`,
      {
        caption,
        image,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({ type: "newPostSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "newPostFailure",
      payload: error.response.data.message,
    });
  }
};

export const updatePost = (caption, id) => async (dispatch) => {
  try {
    dispatch({ type: "updateCaptionRequest" });

    const { data } = await axios.put(
      `/api/v1/post/${id}`,
      {
        caption,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({ type: "updateCaptionSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "updateCaptionFailure",
      payload: error.response.data.message,
    });
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    dispatch({ type: "deletePostRequest" });

    const { data } = await axios.delete(`/api/v1/post/${id}`);

    dispatch({ type: "deletePostSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "deletePostFailure",
      payload: error.response.data.message,
    });
  }
};

export const getUserPosts = (id) => async (dispatch) => {
  try {
    dispatch({ type: "userPostsRequest" });

    const { data } = await axios.get(`/api/v1/userposts/${id}`);

    dispatch({ type: "userPostsSuccess", payload: data.posts });
  } catch (error) {
    dispatch({
      type: "userPostsFailure",
      payload: error.response.data.message,
    });
  }
};

export const getUserProfile = (id) => async (dispatch) => {
  try {
    dispatch({ type: "userProfileRequest" });

    const { data } = await axios.get(`/api/v1/user/${id}`);

    dispatch({ type: "userProfileSuccess", payload: data.user });
  } catch (error) {
    dispatch({
      type: "userProfileFailure",
      payload: error.response.data.message,
    });
  }
};

export const followAndUnfollowUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: "followUserRequest" });

    const { data } = await axios.get(`/api/v1/follow/${id}`);

    dispatch({ type: "followUserSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "followUserFailure",
      payload: error.response.data.message,
    });
  }
};
