import React from "react";
import { listOfBook } from "./BookList.js";

class bookComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            listOfBook:false,
        }
}

onHandleClick = () => {
    if(this.state.listOfBook){
        this.setState({
            listOfBook: false,
        })
    }else{
    this.setState({
        listOfBook: true,
    })
}
}

render() {
    return(
        <div>
            <button onClick={this.onHandleClick}>Add Data</button>
                {
                   this.state.listOfBook ?
                    <div>
                        <table style={{border:"5px black solid"}}>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Categories</th>
                            <th>Description</th>
                        </tr>
                        {listOfBook.map((listOfBook =>
                             <tr>
                             <td>{listOfBook.id}</td>
                             <td>{listOfBook.title}</td>
                             <td>{listOfBook.author}</td>
                             <td>{listOfBook.categories}</td>
                             <td>{listOfBook.description}</td>
                         </tr>
                        ))}

                    </table>
                        
                    </div> 
                     :  <div 
                     style={{border:"5px black solid"}}>
                        <h1>No Data.</h1>
                     </div> 
                 
                }
        </div>
    );
}
}
export default bookComponent;