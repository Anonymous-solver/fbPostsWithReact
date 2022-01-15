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
	  state
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
			  state={state}
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
			  comment={post.comment}
			  commentEmpty={post.commentEmpty}
            ></Post>
          ))}
        </div>
      </>
    );
  }
}

export default Posts;
