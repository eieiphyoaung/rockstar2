import React from 'react';
import List from './List';
import Add from './Add';

class App extends React.Component{
  state = {
     data : ['Mary','Alice']
  }
 
  add = (name) => {
    this.setState({
      data : [...this.state.data,name]
    })
  }

  remove = (name) =>{
    this.setState({
      data : this.state.data.filter(item => item != name)
    })
  }
  render(){
    return(
        <div>
          <ul>
              <List data={this.state.data} remove={this.remove}/>
          </ul>
         <Add add={this.add} />
        </div>
      )
  }
}
export default App;