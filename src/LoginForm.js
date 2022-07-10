import React,{useState,useEffect} from 'react';

function LoginForm(){
const [userName,setUsername] = useState("");
const [password,setPassword] = useState("");
const [stats, setStat] = useState(false);

const handleUsername = (ev) =>{
    setUsername(ev.target.value);
};

const handlePswd=(ev)=>{
    setPassword(ev.target.value);
};
const handleSub=(ev)=>{
    ev.preventDefault();
    setStat(!stats);
};
useEffect(()=>{
    console.log(stats);
    if(stats){
        alert("Login")
    }
},[stats])
return(
    <div>
        <form onSubmit={handleSub} className="main">
            <label>Username: </label>
            <input className="username" type="text" value={userName} onChange={handleUsername} placeholder="Username"/>
            <br></br>
            <label>Password: </label>
            <input type="password" value={password} onChange={handlePswd} placeholder="Password"/>
            <br></br>
            <button type="submit">Login</button>
            </form>
    </div>
);
}
export default LoginForm;