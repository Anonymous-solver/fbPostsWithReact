import React, { Component } from 'react';
import Like from './like.component';
 class Post extends Component {
	 state = {
		like: false,
	 }
	 handleLike = () => {
		 const like = this.state.like
		 this.setState({like: !like})
	 }
	
	 render() { 
		 const {title, date, comment} = this.props
		 return (
			<>
			<div className="card" style = {{width: '18rem', border: "1px solid gray", boxShadow : "1px 1px 10px gray", margin: '5px', backgroundColor: 'lightsteelblue', display: 'block'}}>
				<div className = "card-body">
					<h5 className = 'card-title'>{title}</h5>
					<hr />
					<p className = 'card-text'>{date}</p>
					<hr />
					<p className = 'card-text'>{comment}</p>
					<hr />
					<input type="text" placeholder='comment' />
					<button onClick = {this.handleLike} style = {{margin: '10px'}}><Like like = {this.state.like}></Like></button>
				</div>
			</div>
			<br />
		  </>
		 );
	 }
 }
  
 export default Post;