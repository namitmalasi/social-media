import React from "react";
import Post from "../Post/Post";
import User from "../User/User";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="homeleft">
        <Post
          postImage={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flongwoodgardens.org%2Fsites%2Fdefault%2Ffiles%2Fhighlight_images%2F130366.jpg&f=1&nofb=1"
          }
          ownerName="sample"
          caption="this is sample post asduiasd asbdjnasd ajhduasd aksjbduiasd"
        />
      </div>
      <div className="homeright">
        <User
          userId={"user._id"}
          name={"Sample"}
          avatar={
            "http://thenewcamera.com/wp-content/uploads/2020/07/Canon-EOS-R5-Sample-Image-3.jpg"
          }
        />
      </div>
    </div>
  );
};

export default Home;
