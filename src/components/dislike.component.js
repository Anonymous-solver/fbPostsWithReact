import React, { Component } from 'react';
 
class Dislike extends Component {
	render() { 
		return (
			<>
			{
				this.props.dislike
				? <i className = 'fa fa-thumbs-down' style={{color:'blue'}}/>
				: <i className = "fa fa-thumbs-o-down"/>	
			}
			</>
		);
	}
}
 
export default Dislike;