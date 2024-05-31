import React from "react";

const About = (props) => {
  return (
    <div className="view-container">
      <div className="profileBox">
        <div className="profileIcon">
          <img className="iconImg" src={props.iconUrl} />
        </div>
        <div className="profileDetail">
          <div className="detailText">
            <h1 className="userName">{props.userName}</h1>
            <p dangerouslySetInnerHTML={{__html: props.bioDetail}}></p>
          </div>
        </div>
      </div>
      <div className="mySkillsBox">
        
      </div>    
    </div>
  );
};

export default About;
