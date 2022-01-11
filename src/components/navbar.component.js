import React, { Component } from "react";
import Posts from "./posts.component";

class Navbar extends Component {
	state = {
		posts: [
		  {
			id: 0,
			title: "Post-1",
			date: "1 Jan 2022",
			comment: "Good",
			like: false,
			dislike: false
		  },
		  {
			id: 1,
			title: "Post-2",
			date: "2 Jan 2022",
			comment: "Not Bad",
			like: false,
			dislike: false,
		  },
		  {
			id: 2,
			title: "Post-3",
			date: "3 Jan 2022",
			comment: "Tricky",
			like: false,
			dislike: false
		  },
		  {
			id: 3,
			title: "Post-4",
			date: "4 Jan 2022",
			comment: "Moderate",
			like: false,
			dislike: false
		  },
		  {
			id: 4,
			title: "Post-5",
			date: "5 Jan 2022",
			comment: "Awesome",
			like: false,
			dislike: false
		  },
		  {
			id: 5,
			title: "Post-6",
			date: "6 Jan 2022",
			comment: "Pretty",
			like: false,
			dislike: false
		  },
		],
		likeCount: 0,
		disLikeCount: 0,
	  };
	
	  handleLike = (id) => {
		const posts = [...this.state.posts];
		const post = posts.find((post) => post.id === id);
		let likeCount = this.state.likeCount;
		if (post.like === false) likeCount++;
		else likeCount--;
		post.like = !post.like;
		this.setState({ posts });
		this.setState({likeCount: likeCount})
	  };
	
	  handleDislike = (id) => {
		const posts = [...this.state.posts];
		const post = posts.find((post) => post.id === id);
		let disLikeCount = this.state.disLikeCount;
		if (post.dislike === false) disLikeCount++;
		else disLikeCount--;
		post.dislike = !post.dislike;
		this.setState({ posts });
		this.setState({disLikeCount: disLikeCount})
	  };
	
	  handleRemove = (id) => {
		let posts = [...this.state.posts];
		const post = posts.find((post) => post.id === id);
		let likeCount = this.state.likeCount;
		let disLikeCount = this.state.disLikeCount;
		if(post.like === true) likeCount--;
		else if (post.dislike === true) disLikeCount--;
		posts = posts.filter((post) => post.id !== id);
		this.setState({ posts });
		this.setState({likeCount: likeCount})
		this.setState({disLikeCount: disLikeCount})
	  };
	
	  handleAdd = () => {
		  console.log("Added New Post");
	  }
  render() {
    return (
      <>
        <nav className="navbar fixed-top navbar-light bg-dark">
          <a className="navbar-brand" href="#" style = {{marginLeft: '2%', color: 'white'}}>Facebook</a>
		  <h5 className="navbar-brand" style = {{marginRight: '20px', color: 'white'}} >Like {this.state.likeCount}</h5>
		  <h5 className="navbar-brand" style = {{color: 'white'}} >Dislike {this.state.disLikeCount}</h5>
        </nav>
		<button style={{marginTop: '60px'}} onClick={this.handleAdd}>Add new post</button>
		<Posts handleLike={this.handleLike} handleDislike={this.handleDislike} handleRemove={this.handleRemove} handleAdd={this.handleAdd} posts={this.state.posts}></Posts>
		</>
    );
  }
}

export default Navbar;
