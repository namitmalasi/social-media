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
