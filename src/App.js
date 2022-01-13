import React, { Component } from "react";
import Navbar from "./components/navbar.component";
import Posts from "./components/posts.component";
import img from "./images/post.png";
import getPostData from "./service/get-posts.service";

class App extends Component {
  state = {
    posts: [],
    likeCount: 0,
    disLikeCount: 0,
    loveCount: 0,
    sadCount: 0,
    shareCount: 0,
    count: 6,
    show: false,
    title: "",
    description: "",
  };

  componentDidMount() {
    const posts = getPostData();
    this.setState({ posts });
  }

  handleLike = (id) => {
    const posts = [...this.state.posts];
    const post = posts.find((post) => post.id === id);
    let likeCount = this.state.likeCount;
    if (post.like === false) likeCount++;
    else likeCount--;
    post.like = !post.like;
    this.setState({ posts, likeCount });
  };

  handleDislike = (id) => {
    const posts = [...this.state.posts];
    const post = posts.find((post) => post.id === id);
    let disLikeCount = this.state.disLikeCount;
    if (post.dislike === false) disLikeCount++;
    else disLikeCount--;
    post.dislike = !post.dislike;
    this.setState({ posts, disLikeCount });
  };

  handleLove = (id) => {
    const posts = [...this.state.posts];
    const post = posts.find((post) => post.id === id);
    let loveCount = this.state.loveCount;
    if (post.love === false) loveCount++;
    else loveCount--;
    post.love = !post.love;
    this.setState({ posts, loveCount });
  };

  handleSad = (id) => {
    const posts = [...this.state.posts];
    const post = posts.find((post) => post.id === id);
    let sadCount = this.state.sadCount;
    if (post.sad === false) sadCount++;
    else sadCount--;
    post.sad = !post.sad;
    this.setState({ posts, sadCount });
  };

  handleShare = (id) => {
    const posts = [...this.state.posts];
    const post = posts.find((post) => post.id === id);
    let shareCount = this.state.shareCount;
    if (post.share === false) shareCount++;
    else shareCount--;
    post.share = !post.share;
    this.setState({ posts, shareCount });
  };

  handleRemove = (id) => {
    let posts = [...this.state.posts];
    const post = posts.find((post) => post.id === id);
    let likeCount = this.state.likeCount;
    let disLikeCount = this.state.disLikeCount;
    let loveCount = this.state.loveCount;
    let sadCount = this.state.sadCount;
    let shareCount = this.state.shareCount;
    if (post.like === true) likeCount--;
    else if (post.dislike === true) disLikeCount--;
    else if (post.love === true) loveCount--;
    else if (post.sad === true) sadCount--;
    if (post.share === true) shareCount--;
    posts = posts.filter((post) => post.id !== id);
    this.setState({ posts, likeCount, disLikeCount, loveCount, sadCount, shareCount });
  };

  handleAdd = () => {
    let show = this.state.show;
    show = !show;
    this.setState({ show });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let count = this.state.count + 1;
    this.setState({ count });
    const newPost = {
      id: count,
      title: this.state.title,
      date: `${new Date().toDateString()} ${new Date().toLocaleTimeString()}`,
      img: img,
      description: this.state.description,
      like: false,
      dislike: false,
      love: false,
      sad: false,
      share: false,
    };
    let posts = [...this.state.posts, newPost];
    let show = this.state.show;
    show = !show;
	this.setState({posts, show, title: '', description: ''})
  };

  render() {
    const { likeCount, disLikeCount, loveCount, shareCount, sadCount, posts } =
      this.state;
    return (
      <>
        <Navbar
          likeCount={likeCount}
          disLikeCount={disLikeCount}
          loveCount={loveCount}
          shareCount={shareCount}
          sadCount={sadCount}
        ></Navbar>
        <button
          style={{
            color: "gray",
            marginLeft: "25%",
            width: "50%",
            marginTop: "90px",
            borderRadius: "50px",
            border: "1px solid lightblue",
          }}
          onClick={this.handleAdd}
        >
          What's on your mind?
        </button>

        {this.state.show ? (
          <div>
            <form
              onSubmit={this.handleSubmit}
              style={{ textAlign: "center", margin: "20px" }}
            >
              <input
                style={{
                  paddingLeft: "10px",
                  marginTop: "5px",
                  borderRadius: "50px",
                  border: "1px solid gray",
                }}
                type="text"
                name="title"
                id="title"
                value={this.state.title}
                onChange={(event) => {
                  this.setState({ title: event.target.value });
                }}
                placeholder="title"
                required
              />
              <br />
              <input
                style={{
                  paddingLeft: "10px",
                  marginTop: "5px",
                  borderRadius: "50px",
                  border: "1px solid gray",
                }}
                type="text"
                name="description"
                id="description"
                value={this.state.description}
                onChange={(event) => {
                  this.setState({ description: event.target.value });
                }}
                placeholder="description"
                required
              />
              <br />
              <input
                className="btn btn-primary"
                style={{
                  paddingLeft: "10px",
                  marginTop: "5px",
                  borderRadius: "10px",
                  border: "1px solid white",
                }}
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        ) : (
          <div></div>
        )}

        <Posts
          handleLike={this.handleLike}
          handleDislike={this.handleDislike}
          handleLove={this.handleLove}
          handleSad={this.handleSad}
          handleShare={this.handleShare}
          handleRemove={this.handleRemove}
          handleAdd={this.handleAdd}
          posts={posts}
        ></Posts>
      </>
    );
  }
}

export default App;
