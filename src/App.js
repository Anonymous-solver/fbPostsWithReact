import React, { Component } from "react";
import Navbar from "./components/navbar.component";
import Posts from "./components/posts.component";
import img from './images/post.png'

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "সরকারি ওয়েবসাইটে করোনা সংক্রমণের রেড জোনে ঢাকা ও রাঙ্গামাটি",
        img: img,
        date: `${new Date().toDateString()} ${new Date().toLocaleTimeString()}`,
        description:
          "করোনাভাইরাস পরীক্ষা ও শনাক্তের হিসাবে ঢাকা ও রাঙ্গামাটিকে সংক্রমনের রেড জোন বা উচ্চ ঝুঁকিপূর্ণ এলাকা বলে চিহ্নিত করেছে বাংলাদেশের স্বাস্থ্য কর্তৃপক্ষ। এই দুই জেলায় বর্তমানে সংক্রমনের হার ১০ থেকে ১৯ শতাংশের মধ্যে।",
        like: false,
        dislike: false,
        love: false,
        sad: false,
        share: false,
      },
      {
        id: 2,
        title:
          "টেকনাফে জেলেদের জালে ধরা পড়ছে অবিশ্বাস্য পরিমাণ মাছ, এর কারণ কী",
        img: img,
        date: `${new Date().toDateString()} ${new Date().toLocaleTimeString()}`,
        description:
          "কক্সবাজার জেলার টেকনাফের শাহপরীর দ্বীপ সৈকতে এক জেলের জালেই এ সপ্তাহে এক দিনে আটকা পড়েছে প্রায় তিনশ মন মাছ, যা নিয়ে তোলপাড় চলছে এলাকাজুড়ে।ওই জালের মাছ ধরার দৃশ্য ব্যাপকভাবে ছড়িয়ে পড়েছে সামাজিক যোগাযোগ মাধ্যমে যেখানে দেখা যাচ্ছে জেলেরা ঘিরে ধরে জাল তুলছেন আর তার ভিতরে লাফালাফি করছে অসংখ্য মাছ।",
        like: false,
        dislike: false,
        love: false,
        sad: false,
        share: false,
      },
      {
        id: 3,
        title:
          "কোভিড: দুই মাসের মধ্যে অর্ধেক ইউরোপ করোনাভাইরাসের অমিক্রন ভ্যারিয়েন্টে আক্রান্ত হবে, বলছে বিশ্ব স্বাস্থ্য সংস্থা",
        img: img,
        date: `${new Date().toDateString()} ${new Date().toLocaleTimeString()}`,
        description:
          "''বর্তমানে অমিক্রন সংক্রমণের একটি ঢেউ পশ্চিম থেকে পূর্ব দিকে বয়ে যাচ্ছে। যেসব দেশ ২০২১ সালের শেষ দিকে ডেল্টার বিস্তার ঠেকাতে কাজ করছিল, সেসব দেশেও এটি ডেল্টা ভ্যারিয়েন্টকে ছাড়িয়ে যাচ্ছে,'' বলেছেন মি. ক্লুজ।",
        like: false,
        dislike: false,
        love: false,
        sad: false,
        share: false,
      },
      {
        id: 4,
        title:
          "চীনের 'অলৌকিক অর্থনৈতিক' উত্থানে গ্রামীণ জীবনের আত্মাহুতির কাহিনী - ইতিহাসের সাক্ষী",
        img: img,
        date: `${new Date().toDateString()} ${new Date().toLocaleTimeString()}`,
        description:
          "চীনের এই অর্থনৈতিক অগ্রযাত্রা যাকে 'অলৌকিক অর্থনীতি' বলা হয়ে থাকে, তার মূল চালিকাশক্তি বিশাল এক অভিবাসী কর্মী বাহিনী। এই শক্তি দেশটির গ্রামাঞ্চল থেকে শহরে কাজ করতে যাওয়া লাখো লাখো মানুষের জনবল।",
        like: false,
        dislike: false,
        love: false,
        sad: false,
        share: false,
      },
      {
        id: 5,
        title:
          "প্রথমবারের মত এক আমেরিকান ব্যক্তির দেহে প্রতিস্থাপন করা হল শূকরের হৃদপিণ্ড",
        img: img,
        date: `${new Date().toDateString()} ${new Date().toLocaleTimeString()}`,
        description:
          "বিশ্বের প্রথম এই ধরনের অস্ত্রোপচার করার জন্য ইউনিভার্সিটি অফ মেরিল্যান্ড মেডিকেল সেন্টারকে বিশেষ অনুমতি দিয়েছিল যুক্তরাষ্ট্রের চিকিৎসা তদারকি কর্তৃপক্ষ। কারণ, না হলে মি. বেনেটের মৃত্যু ছাড়া আর কোন বিকল্প ছিল না।",
        like: false,
        dislike: false,
        love: false,
        sad: false,
        share: false,
      },
      {
        id: 6,
        title: "বাংলাদেশের ব্যাপারে তুরস্কের এখন আগ্রহ বাড়ছে কেন?",
        img: img,
        date: `${new Date().toDateString()} ${new Date().toLocaleTimeString()}`,
        description:
          "স্বরাষ্ট্র মন্ত্রণালয়ের একজন ঊর্ধ্বতন কর্মকর্তা বিবিসিকে বলেছেন, এই সমঝোতা চুক্তির অধীনে মূলত বাংলাদেশের পুলিশ, র‍্যাব, বিজিবি, আনসার, কোস্টগার্ডসহ বিভিন্ন নিরাপত্তা বাহিনীকে প্রশিক্ষণ দেবে তুরস্ক।",
        like: false,
        dislike: false,
        love: false,
        sad: false,
        share: false,
      },
    ],
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

  handleLike = (id) => {
    const posts = [...this.state.posts];
    const post = posts.find((post) => post.id === id);
    let likeCount = this.state.likeCount;
    if (post.like === false) likeCount++;
    else likeCount--;
    post.like = !post.like;
    this.setState({ posts });
    this.setState({ likeCount: likeCount });
  };

  handleDislike = (id) => {
    const posts = [...this.state.posts];
    const post = posts.find((post) => post.id === id);
    let disLikeCount = this.state.disLikeCount;
    if (post.dislike === false) disLikeCount++;
    else disLikeCount--;
    post.dislike = !post.dislike;
    this.setState({ posts });
    this.setState({ disLikeCount: disLikeCount });
  };

  handleLove = (id) => {
    const posts = [...this.state.posts];
    const post = posts.find((post) => post.id === id);
    let loveCount = this.state.loveCount;
    if (post.love === false) loveCount++;
    else loveCount--;
    post.love = !post.love;
    this.setState({ posts });
    this.setState({ loveCount });
  };

  handleSad = (id) => {
    const posts = [...this.state.posts];
    const post = posts.find((post) => post.id === id);
    let sadCount = this.state.sadCount;
    if (post.sad === false) sadCount++;
    else sadCount--;
    post.sad = !post.sad;
    this.setState({ posts });
    this.setState({ sadCount });
  };

  handleShare = (id) => {
    const posts = [...this.state.posts];
    const post = posts.find((post) => post.id === id);
    let shareCount = this.state.shareCount;
    if (post.share === false) shareCount++;
    else shareCount--;
    post.share = !post.share;
    this.setState({ posts });
    this.setState({ shareCount });
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
    this.setState({ posts });
    this.setState({ likeCount: likeCount });
    this.setState({ disLikeCount: disLikeCount });
    this.setState({ loveCount: loveCount });
    this.setState({ sadCount });
    this.setState({ shareCount });
  };

  handleAdd = () => {
    let show = this.state.show;
    show = !show;
    this.setState({ show: show });
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
    this.setState({ posts });
    let show = this.state.show;
    show = !show;
    this.setState({ show: show });
  };
  
  render() {
	const {likeCount, disLikeCount, loveCount, shareCount, sadCount} = this.state
    return (
      <>
        <Navbar likeCount={likeCount} disLikeCount={disLikeCount} loveCount={loveCount} shareCount={shareCount} sadCount={sadCount}></Navbar>
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
          posts={this.state.posts}
        ></Posts>
      </>
    );
  }
}

export default App;
