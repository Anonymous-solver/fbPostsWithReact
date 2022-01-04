import React, { Component } from "react";
import Post from "./post.component";

class Posts extends Component {
  state = {
    posts: [
      {
        title: "Anik",
        date: "1 Jan 2022",
        comment: "Good",
      },
      {
        title: "Farha",
        date: "2 Jan 2022",
        comment: "Not Bad",
      },
      {
        title: "Farhan",
        date: "3 Jan 2022",
        comment: "Tricky",
      },
	  {
        title: "Trisha",
        date: "4 Jan 2022",
        comment: "Moderate",
      },
	  {
        title: "Jannat",
        date: "5 Jan 2022",
        comment: "Awesome",
      },
    ],
  };
  render() {
    return (
      <>
        <div>
          {this.state.posts.map((post) => (
            <Post title={post.title} date = {post.date} comment = {post.comment}></Post>
          ))}
        </div>
      </>
    );
  }
}

export default Posts;
