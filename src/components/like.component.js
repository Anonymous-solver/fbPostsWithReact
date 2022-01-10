import React, { Component } from 'react';
 
class Like extends Component {
	render() { 
		return (
			<>
			{
				this.props.like
				? <i className = 'fa fa-thumbs-up'/>
				: <i className = "fa fa-thumbs-o-up"/>	
			}
			</>
		);
	}
}
 
export default Like;