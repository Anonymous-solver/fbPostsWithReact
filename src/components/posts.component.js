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
			  handleLove={this.props.handleLove}
			  handleSad={this.props.handleSad}
			  handleShare={this.props.handleShare}
              id={post.id}
              title={post.title}
			  img= {post.img}
              date={post.date}
              description={post.description}
              like={post.like}
              dislike={post.dislike}
			  love={post.love}
			  sad={post.sad}
			  share={post.share}
            ></Post>
          ))}
        </div>
      </>
    );
  }
}

export default Posts;
