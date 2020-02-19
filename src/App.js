import React, {Component} from 'react';
import Button from './Button';
import './App.css';

class App extends Component {
  state = {
    count: 0
  }

  incrementCount=()=>{
    this.setState({
      count: this.state.count + 1
    })
  }

  decrementCount(){
    if(this.state.count <=0){
      alert('You cannot decrement this count')
    } else {
      this.setState({
        count: this.state.count - 1
      })
    }
  }

render(){
  let { count } = this.state;
  return(
    <div>
      <h1>count:{count} </h1>
      <Button title="+"
        task= {() => this.incrementCount() } />
      <Button title="-"
        task= {() => this.decrementCount() } />
    </div>
    )
  }
}

export default App;
