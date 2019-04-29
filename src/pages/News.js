import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import NewsList from "../components/NewsList/NewsList";
import { fetchPosts } from "../store/actions/newsActions";

class News extends Component {
  componentDidMount() {
      this.props.fetchPosts();
  }
  render() {
    const { posts, isFetching } = this.props;
    const Loader = () => <h2 style={{ color: "red" }}>Loading news ...</h2>;
    return isFetching ? <Loader /> : <NewsList posts={posts} />;
  }
}

News.propTypes = {
  posts: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetchPosts: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    posts: state.news.posts,
    isFetching: state.news.isFetching
  };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(News);