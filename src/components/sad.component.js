import React, { Component } from 'react';
 
class Sad extends Component {
	render() { 
		return (
			<>
			{
				this.props.sad
				? <i className="fa fa-frown-o" style={{color:'blue'}}></i>
				: <i class="fa fa-frown-o"></i>
			}
			</>
		);
	}
}
 
export default Sad;