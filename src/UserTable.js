import React from "react";

class userTables extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            displayData: false,
        }
    }

    onHandeData = () => {
        console.log(this.state.displayData);
        this.setState({
            displayData: !this.state.displayData,
        })
    }

    render() {
        return (
            <div>
                 <button onClick={this.onHandeData}>Press Me Harder!</button>
                 <br></br>
                 <br></br>
                {
                    this.state.displayData ?
                    
                        <div >
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>UserName</th>
                                    <th>Email</th>
                                    <th>Address</th>
                                    <th>Phone</th>
                                    <th>Website</th>
                                </tr>
                                {this.props.userData.map((myData =>
                                    <tr>
                                        <td>{myData.id}</td>
                                        <td>{myData.name}</td>
                                        <td>{myData.username}</td>
                                        <td>{myData.email}</td>
                                        <td>{myData.address.street}</td>
                                        <td>{myData.phone}</td>
                                        <td>{myData.website}</td>
                                    </tr>
                                ))}
                        </div>
                        : <div
                            style={{ color: "Blue",fontWeight: 'bold' }}>No No No, No Such Data</div>


                }
               
            </div>
        );
    }

}
export default userTables;