import React from "react";
import './ClassComponents.css';

class ClassComponent extends React.Component{
    constructor(props){
        super(props);
        this.state ={
        //    stateCounterValue: this.props.propsCounterValue
        };

    }
handleChildButton = ()=>{
    this.props.childFunction();
}
    // onHandleClick =() =>{
    //     console.log(0);
    //     if(this.state.status){
    //       this.setState({
    //         status:false
    //       }) ;
    //     }else{
        
    //     this.setState({
    //         displayMyText:true
    //     })
    // } 
    render(){
        let{counter}=this.state;
        let{toggleStateValue}=this.props;
        console.log("My counter value is",counter)
    // console.log("STATE:", this.state)
    //     return(
    //        <div 
    //         style={{border:"1px solid blue"}}>
    //             <div>        
    //         <p>
    //             {this.state.myText}
    //         </p>
    //         <button onClick={this.onHandleClick}>Click me</button>
    //     {
    //       this.state.displayMyText ? <div style={{backgroundColor: "red", width:"100px",height: "100px"}}></div>: null
    //     }
    //         </div>

    //         </div>
    //     );
    // }
    return(<div>
        {toggleStateValue ? <div className="div-container">
            Hey Gilbert
            </div>:null}
            <button onClick={this.handleChildButton}>Child Component</button>
    </div>)
    }
}
export default ClassComponent;