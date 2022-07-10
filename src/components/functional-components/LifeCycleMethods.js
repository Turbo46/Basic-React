import React from "react";

class lifeCycleMethods extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            obj: {
                fname: " ",
                lname: " "
            }
        }
    }
    // lifecycle method
    componentDidMount(){
        // console.log("my component is mounted");
        this.setState({counter: 1000})
    }

    static getDerivedStateFromProps(props, state) {
        console.log(props.newObject, state.obj) // This will give you different values
        if (props.newObject !== state.obj) {
            //Change in props
            return {
                obj: props.newObject
            };
        }
        return null; // No change to state
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps.newObject, this.state.obj) // This will give me same object as App.js
        console.log("My component is updated")
    }
    
    componentWillUnmount() {
        console.log("My componennt is unmounted")
    }


    render(){
        // console.log("my counter is: ", this.state.counter);
        return(
            <h1>this is lifecycle: {this.state.counter}</h1>
        )
    }
}
export default lifeCycleMethods;