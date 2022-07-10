import React from "react";
import UserTable from "./UserTable";

class userFetch extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {person: []};
    }
  
    componentDidMount() {
      console.log("Data is here");
      this.UserList();
    }
  
    UserList() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((res) => res.json())
    .then((results) => this.setState({ person: results  }))
    .catch(error => console.log("the error is", error));
    }
  
    render() {
        return(

        <div>
            <UserTable userData={this.state.person}></UserTable>

        </div>
        );
    }
  }
  export default userFetch;