import React, { Component } from 'react';
import Dislike from './dislike.component';
import Like from './like.component';
 class Post extends Component {
	 render() {		 
		 const {handleLike, handleDislike, handleRemove, id, title, img, date, comment, like, dislike} = this.props
		 return (	
			<>
				<div className="card text-white bg-success mb-3" style = {{marginTop: '5px', marginLeft: '30%', width: '30rem', border: "1px solid gray", boxShadow : "1px 1px 10px gray", padding: '5px', backgroundColor: 'lightsteelblue'}}>
					<div className = "card-body">
						<h5 className = 'card-title'>{title}</h5>
						<img style={{width: "70%", borderRadius: '5px'}} src={img} alt="null" />
						<hr />
						<p className = 'card-text'>{date}</p>
						<hr />
						<p className = 'card-text'>{comment}</p>
						<hr />
						<input type="text" style={{border: '1px solid gray', width: '25rem', borderRadius: '10px'}} placeholder=' comment' />
						<br />
						<button onClick = {() => handleLike(id)} style = {{margin: '10px'}} disabled={dislike}><Like like = {like}></Like></button>
						<button onClick = {() => handleDislike(id)} style = {{margin: '10px'}} disabled={like}> <Dislike dislike={dislike}></Dislike></button>
						<button className="btn btn-danger" onClick = {() => handleRemove(id)}>Remove Post</button>
					</div>
				</div>
			<br />
		   </>
		 );
	 }
 }
  
 export default Post;