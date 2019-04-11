import React from "react";

import NewsItem from "../NewsItem/NewsItem";

const NewsList = props => {
  const posts = props.posts;
  const listOfItems = posts.map(item => {
    return <NewsItem key={item.id} title={item.title} body={item.body} />;
  });
  return <div>{listOfItems}</div>;
};

export default NewsList;