import React, { Component } from 'react';
 
class Love extends Component {
	render() { 
		return (
			<>
			{
				this.props.love
				? <i className="fa fa-heart" style={{color:'red'}}></i>
				: <i className="fa fa-heart-o"></i>
			}
			</>
		);
	}
}
 
export default Love;