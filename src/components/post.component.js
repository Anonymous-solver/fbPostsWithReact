import React, { Component } from 'react';
import Dislike from './dislike.component';
import Like from './like.component';
import image from '../images/post.png'
 class Post extends Component {
	 render() {		 
		 const {handleLike, handleDislike, handleRemove, id, title, date, comment, like, dislike} = this.props
		 return (	
			<>
				<div className="card text-white bg-success mb-3" style = {{width: '18rem', border: "1px solid gray", boxShadow : "1px 1px 10px gray", margin: '5px', backgroundColor: 'lightsteelblue'}}>
					<div className = "card-body">
						<h5 className = 'card-title'>{title}</h5>
						<img style={{width: "60%"}} src={image} alt="null" />
						<hr />
						<p className = 'card-text'>{date}</p>
						<hr />
						<p className = 'card-text'>{comment}</p>
						<hr />
						<input type="text" placeholder='comment' />
						<br />
						<button onClick = {() => handleLike(id)} style = {{margin: '10px'}} display={!dislike}><Like like = {like}></Like></button>
						<button onClick = {() => handleDislike(id)} style = {{margin: '10px'}} display={!like}> <Dislike dislike={dislike}></Dislike></button>
						<button className="btn btn-danger" onClick = {() => handleRemove(id)}>Remove Post</button>
					</div>
				</div>
			<br />
		  </>
		 );
	 }
 }
  
 export default Post;