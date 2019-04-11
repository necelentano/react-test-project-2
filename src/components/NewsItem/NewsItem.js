import React from "react";

import "./NewsItem.css";

const NewsItem = ({ id, title, body }) => {
  return (
    <div className="news-item" key={id}>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default NewsItem;
