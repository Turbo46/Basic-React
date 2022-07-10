import React from "react";
import './IncDecComponents.css';
class incDecComponents extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
  
    incFunc = () => {
      this.setState({ count: this.state.count + 1 });
    };
  
    decFunc = () => {
      this.setState({ count: this.state.count - 1 });
    };
  
    render() {
      return (
        <div>
          <h1> Count your number in 
          { 
            (this.state.count % 15 === 0) ? " "+"FizzBuzz" :
            (this.state.count % 3 === 0)  ? " "+"Fizz"     : 
            (this.state.count % 5 === 0)  ? " "+"Buzz"     : 
            this.state.count
          }
        </h1>
          <button id="Tambah" onClick={this.incFunc}> Tambah</button>
          <button id="Kurang" onClick={this.decFunc}> Kurang </button>
        </div>
      );
    }
  }
  
  export default incDecComponents;