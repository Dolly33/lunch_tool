import React, {useState}from 'react'; 
import '../App.css';
import CanteenLogo2 from '../Images/CanteenLogo2.png';

function Login(){
           const [id,setId] = useState("");
           const [password,setPassword] = useState("");

           const submitFunction=(e)=>{
               e.preventDefault();
               console.log(id,password);
           }
    return(
        <div>
            <header>
              <img src={CanteenLogo2} classname="logo" alt="logo"/>
              <h1 id="headertext">Lunch Order System</h1>
            </header>

            <div id="signupbox">
                <h1 id="signuptext">Sign In</h1>
                <form onSubmit={submitFunction}>
                    <input type="text" placeholder="Username" className="username" onChange ={(e)=>{setId(e.target.value)}}/>
                    <input type="password" placeholder="Password" onChange ={(e)=>{setPassword(e.target.value)}}/>
                    <button type="submit">Sign In</button>
                 </form>
            </div>

        </div>
    )
}
export default Login;