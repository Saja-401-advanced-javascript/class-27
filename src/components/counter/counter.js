import React from 'react';



class Counter extends React.Component{
    constructor(props){
      super(props);
      this.state ={
        counter : 0,
      }
    }
  
    handleChange = e => {
      let counter = e.target.value;
      this.setState ({counter})
    }
  
    increaseClicks = c => {
      c.preventDefault();
      let counter = ++this.state.counter;
      this.setState({counter})
      console.log('inc counter',this.state);
      
    }
  
    decreaseClicks = c => {
      c.preventDefault();
      let counter = --this.state.counter;
      this.setState({counter})
      console.log('dec counter',this.state);
  
    }
  
    render (){
      return(
        <section>
          <h3 style={{ color: Math.sign(this.state.counter) >= 0 ? 'green' : 'orange' }}>
            {this.state.counter}
          </h3>
          <button onClick={this.increaseClicks} id="one">
            click to increase counter
          </button>
          <button onClick={this.decreaseClicks} id="two">
            click to decrease counter
          </button>
        </section>
      )
    }
  }

  export default Counter;