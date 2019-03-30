import React from 'react';
import Item from './Item';

class List extends React.Component{
	render(){
		return (
			<div>
				<ul>
					{this.props.data.map(item =>
						<Item name={item} remove={this.props.remove}/>
						)}
				</ul>
			</div>
			)
	}
}

export default List;