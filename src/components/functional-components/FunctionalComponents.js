import React,{useState,useEffect} from "react";

function FunctionalComponent(props){
    const[counter,setCounter] = useState(0);
    const [fname,setFname]=useState("");
    const [quantity,setQuantity]=useState(0);
    //This block will run only one time
    useEffect(() => {
        setFname("Gilbert")
        // console.log("This will run only first time")

    }, []);


    //This will run on every re render
    useEffect(() => {
        // console.log("I am rendered")
    });


    //This code will run on every change in props.showComponent
    // useEffect(() => {
    //     console.log("My dependency is updated Code Block 1", props.showComponent)

    // }, [props.showComponent])


    //This code will run on every change in fname
    useEffect(() => {
        console.log("My dependency is updated Code Block 2", fname)

    }, [fname])

    //This code will run on every change in fname or props.showComponent
    useEffect(() => {
        console.log("My dependency is updated Code Block 3", fname, props.showComponent)

    }, [fname, props.showComponent])

const handleIncrement=()=>{
    setCounter(counter=>counter+1)
}
const changeValue=()=>{
    setCounter(counter=>counter=90)
}
const resetValue=()=>{
    setCounter(counter=>counter=0)
}
const onChangeQuantity=(event)=>{
    console.log(event.target.value)
    setQuantity(event.target.value)
}
    // const handleIncrement=()=>{
    //     setCounter(counter=> counter +1)
    // }
    
//     return(
//         <React.Fragment>
//             <h1>This is functional components</h1>
//         <ClassComponent></ClassComponent>
//         </React.Fragment>
//     );
// }
// export function printConsole(){
//     console.log("Hey Guys")
return(
    <div>
        <h1>This is functional components</h1>
        <h2>This is my counter{counter}</h2>
        <button onClick={resetValue}>Reset</button>
        <button onClick={handleIncrement}>+</button>
        <button onClick={changeValue}>Change</button>
        <input type="number" name="" id="" onChange={onChangeQuantity}/>
        <button disabled={quantity<=0}>add</button>
        <h3>My Name is {fname}</h3>
    </div>
)
}

export default FunctionalComponent;