import React, { useEffect } from "react";
import Post from "../Post/Post";
import User from "../User/User";  
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, getPostOfFollowing } from "../../Actions/User";
import Loader from "../Loader/Loader";
import { Typography } from "@mui/material";
import { useAlert } from "react-alert";
const Home = () => {

  const dispatch = useDispatch();

  const { error: likeError, message } = useSelector((state) => state.like);
  const alert = useAlert();

  const { loading, posts, error } = useSelector(
    (state) => state.postOfFollowing
  );

  const { loading: usersLoading, users } = useSelector(
    (state) => state.allUsers
  );

  useEffect(() => {
    dispatch(getPostOfFollowing());
    dispatch(getAllUsers());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "clearErrors" });
    }

    if (likeError) {
      alert.error(likeError);
      dispatch({ type: "clearErrors" });
    }

    if (message) {
      alert.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [alert, error, message, likeError, dispatch]);
  return loading === true || usersLoading === true ? (
    <Loader />
  ) : (
    <div className="home">
      <div className="homeleft">
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <Post
              key={post._id}
              postId={post._id}
              caption={post.caption}
              postImage={post.image.url}
              likes={post.likes}
              comments={post.comments}
              ownerId={post.owner._id}
              ownerName={post.owner.name}
              ownerImage={post.owner.avatar.url}
            />
          ))
        ) : (
          <Typography variant="h6">No posts yet</Typography>
        )}
      </div>
      <div className="homeright">
        {users && users.length > 0 ? (
          users.map((user) => (
            <User
              key={user._id}
              userId={user._id}
              name={user.name}
              avatar={user.avatar.url}
            />
          ))
        ) : (
          <Typography>No Users yet</Typography>
        )}
      </div>
    </div>
  );
};

export default Home;
