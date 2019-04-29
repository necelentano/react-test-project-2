import React from "react";
import PropTypes from 'prop-types';

import NewsItem from "../NewsItem/NewsItem";

const NewsList = props => {
  const posts = props.posts;
  const listOfItems = posts.map(item => {
    return <NewsItem key={item.id} title={item.title} body={item.body} />;
  });
  return <div>{listOfItems}</div>;
};

NewsList.propTypes = {
  posts: PropTypes.array.isRequired
}

export default NewsList;