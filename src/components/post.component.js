import React, { Component } from 'react';
import Dislike from './dislike.component';
import Like from './like.component';
import Love from './love.component';
import Sad from './sad.component';
import Share from './share.component';
 class Post extends Component {
	 render() {		 
		 const {handleLike, handleDislike, handleLove, handleSad, handleShare, handleRemove, id, title, img, date, description, like, dislike, love, sad, share} = this.props
		 return (	
			<>
				<div className="card text-black bg-light mb-3" style = {{marginTop: '5px', marginLeft: '20%', height: '35rem', width: '50rem', border: "1px solid gray", boxShadow : "1px 1px 10px gray", padding: '5px', backgroundColor: 'lightsteelblue'}}>
					<div className = "card-body">
						<h5 className = 'card-title'>{title}</h5>
						<span style = {{color: 'gray'}} className = 'card-text'>{date}</span>
						<br />
						<img style={{width: "70%", height: '15rem', borderRadius: '5px'}} src={img} alt="null" />
						<hr />
						<p className = 'card-text'>{description}</p>
						<hr />
						<input type="text" style={{border: '1px solid white', width: '25rem', borderRadius: '10px'}} placeholder=' Write a comment...' />
						<br />
						<button onClick = {() => handleLike(id)} style = {{margin: '10px', borderRadius: '50px', border: '1px solid white'}} disabled={dislike || love || sad}><Like like = {like}></Like></button>
						<button onClick = {() => handleDislike(id)} style = {{margin: '10px', borderRadius: '50px', border: '1px solid white'}} disabled={like || love || sad}> <Dislike dislike={dislike}></Dislike></button>
						<button onClick = {() => handleLove(id)} style = {{margin: '10px', borderRadius: '50px', border: '1px solid white'}} disabled={dislike || like || sad}> <Love love={love}></Love></button>
						<button onClick = {() => handleSad(id)} style = {{margin: '10px', borderRadius: '50px', border: '1px solid white'}} disabled={dislike || like  || love}> <Sad sad={sad}></Sad></button>
						<button onClick = {() => handleShare(id)} style = {{borderRadius: '50px', border: '1px solid white'}}> <Share share={share}></Share></button>
						<button style = {{borderRadius: '50px', border: '1px solid white', marginLeft: '180px'}} onClick = {() => handleRemove(id)}><i className="fa fa-trash-o"></i></button>
					</div>
				</div>
			<br />
		   </>
		 );
	 }
 }
  
 export default Post;