import { isThisMonth } from "date-fns/esm";
import enIE from "date-fns/esm/locale/en-IE/index.js";
import React from "react";


class formComponent extends React.Component{
    constructor() {
        super();
        this.state = {
            fname: "",
            lname: "",
            status: false
        }
    }

    handleFirstNameChange = (event) => {
        console.log(event.target.value);
        this.setState({ fname: event.target.value})
    }

    handleLastNameChange = (event) => {
        console.log(event.target.value);
        this.setState({ lname: event.target.value})
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({status: true})
        console.log(this.state.fname, this.state.lname);
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Enter your first name:
                    <input
                        type="text"
                        value={this.state.fname}
                        onChange={this.handleFirstNameChange}
                    />
                     <br></br>

                </label>
                <label>Enter your last name:
                    <input
                        type="text"
                        value={this.state.lname}
                        onChange={this.handleLastNameChange}
                    />
                </label>
                <input type="submit" value="submit" ></input>
                {
                    this.state.status ? <h1> Your name : {this.state.fname} {this.state.lname} </h1> 
                    : null
                }
            </form>
        )
    }

}

export default formComponent;