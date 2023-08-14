import React from "react";
import '../sass/css/ProductList.css';
import { Link } from "react-router-dom";
const LoginPage=()=>{
    return(
        <div>
    
            <h1>Welcome UoK notice board</h1><br/>
            <form action="action_page.php" method="post">
           <div class="container">
                <label for="uname"><b>Username</b></label>
<input type="text" placeholder="Enter User name" name="uname" required/><br/>
<label for="psw">
    <b>Password</b>
</label>
<input type="password" placeholder="Enter the password" name="psw" required/><br/>
<button type="submit">Login</button><br/>

     </div>
            <div class="container">
                <button type="button" class="cancelbtn"> Cancel

                </button>
<span class="psw">Forgot <Link to="#">Password?</Link></span>
            </div>
            </form > 
            </div> 
        
        
    );
};
export default  LoginPage;