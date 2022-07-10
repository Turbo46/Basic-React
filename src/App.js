import './App.css';
import React from 'react';
import BookComponent from './components/book-components/BookComponent.js';
import IncDecComponents from './components/incdec-components/IncDecComponents';
import FunctionalComponent from './components/functional-components/FunctionalComponents';
import ClassComponent from './components/class-components/ClassComponents';
import LifeCycleMethods from './components/functional-components/LifeCycleMethods';
import LoginForm from './LoginForm';
import UserFetch from './UserFetch';
import {Link} from 'react-router-dom';
class App extends React.Component {
constructor(props) {
  super(props);
  
}
componentDidMount(){
  console.log("app.js is mounted");
}

render() {
  return (
    <div className="App">
        <FunctionalComponent></FunctionalComponent>
        <Link to="/login">Go to Forms Component</Link>
    </div>
  );
}
}
export default App;