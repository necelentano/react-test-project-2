import React, { Component } from "react";
import { connect } from "react-redux";

import NewsList from "../components/NewsList/NewsList";
import { fetchPosts } from "../store/actions/newsActions";

class News extends Component {
  componentDidMount() {
    if(this.props.posts.length === 0) {
      this.props.fetchPosts();
    }
  }
  render() {
    return <NewsList posts={this.props.posts} />;
  }
}

const mapStateToProps = state => {
  return {
    posts: state.news.posts
  };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(News);