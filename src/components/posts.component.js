import React, { Component } from "react";
import Post from "./post.component";

class Posts extends Component {
  render() {
    return (
      <>
		<div>
        {this.props.posts.map((post) => (
          <Post
            key={post.id}
            handleRemove={this.props.handleRemove}
            handleLike={this.props.handleLike}
			handleDislike={this.props.handleDislike}
            id={post.id}
            title={post.title}
            date={post.date}
            comment={post.comment}
            like={post.like}
			dislike={post.dislike}
          ></Post>
        ))}
		</div>
      </>
    );
  }
}

export default Posts;
