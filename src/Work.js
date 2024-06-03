import React from "react";
import { Link } from "react-router-dom";

const Work = (props) => {
  // const workContents = props.works.contents;
  const works = props.works.contents;
  const worksItem = works.map((item) => {
    return (
      <div key={item.id} className="workItem">
        <Link className="link" to={item.id}>
          <img src={item.work_img.url} alt="img" />
          <div className="workItemData">
            <h3>{item.title}</h3>
            <p>id: {item.id}</p>
          </div>
        </Link>
      </div>
    )
  });

  return (
    <div className="view-container">
      <div className="workTitle">
        <h1>Work</h1>
        <p>制作した作品</p>
        <div className="workContainer">
          {worksItem}
        </div>
      </div>
    </div>
  );
};

export default Work;
