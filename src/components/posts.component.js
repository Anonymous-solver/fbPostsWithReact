import React, { Component } from "react";
import Post from "./post.component";

class Posts extends Component {
  render() {
    const {
      posts,
      handleRemove,
      handleDislike,
      handleLove,
      handleSad,
      handleShare,
      handleLike,
    } = this.props;
    return (
      <>
        <div>
          {posts.map((post) => (
            <Post
              key={post.id}
              handleRemove={handleRemove}
              handleLike={handleLike}
              handleDislike={handleDislike}
              handleLove={handleLove}
              handleSad={handleSad}
              handleShare={handleShare}
              id={post.id}
              title={post.title}
              img={post.img}
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
