import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { Link } from "react-router-dom";

const Blog = () => {
  const [API, setAPI] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getAPI = async () => {
    const getFetch = await fetch(
      "https://yurari.microcms.io/api/v1/blog", 
      {headers: {"X-MICROCMS-API-KEY": "SoWrYdhI38HUcJMQVWqhITOl3bvtBC4XBmMg"}}
    );
    const getJson = await getFetch.json();
    setAPI(getJson.contents);
    setIsLoading(false);
  } 

  // dayjs init
  dayjs.extend(utc);
  dayjs.extend(timezone);

  useEffect(() => {
    getAPI();
  }, []);
  
  if (isLoading) {
    return (
      <div className="view-container">
        <p>記事の読み込み中です...</p>
      </div>
    )
  }

  const article = API.map((article) => {
    return (
      <div key={article.id} className="articleBox">
        <Link  className="link" to={article.id}>
          <p className="date">{dayjs.utc(article.created_at).tz("Asia/Tokyo").format("YYYY-MM-DD / HH:mm")}</p>
          <h3>{article.title}</h3>
          <p className="head" dangerouslySetInnerHTML={{__html: article.head}} />
          <hr />
        </Link>
      </div>
    )
  })

  return (
    <div className="view-container">
      <h1 className="blogViewTitle">Blog</h1>
      <p className="blogViewDetail">雑記帳・作業スペース</p>
      {article}
    </div>
  );
};

export default Blog;
