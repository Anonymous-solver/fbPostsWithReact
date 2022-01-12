import React, { Component } from 'react';
 
class Share extends Component {
	render() { 
		return (
			<>
			<span>
			{
				this.props.share
				? <i style={{color: 'blue', padding: '10px'}} className="fa fa-share">Shared</i>
				: <i style={{color: 'gray', padding: '10px'}} className="fa fa-share">Share</i>
			}
			</span>
			</>
		);
	}
}
 
export default Share;