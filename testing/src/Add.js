import React from 'react';

class Add extends React.Component{
	input = React.createRef();
	render(){
		return(
             <div>
             	<input type="text" ref={this.input} />
          		<button onClick={() =>{
          			this.props.add(this.input.current.value)
          		}}>+</button>

             </div>
			)
	}
}
export default Add;