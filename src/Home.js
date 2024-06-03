import React from "react";

const Home = (props) => {
  return (
    <div className="container">
      <div className="item">
        <img src={props.iconUrl} alt="img" />
      </div>
      <div className="item">
        <h1 className="userName">{props.userName}</h1>
        <p>{props.bio}</p>
      </div>
    </div>
  );
};

export default Home;
