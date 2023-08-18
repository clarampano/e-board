
import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios';
import './sass/components/login.scss'
import './Login_validation';
import validation from './Login_validation';

function Login(){
    
        const location = useLocation();
        console.log(location.pathname);
      
    const [values, setValues]= useState({
        email: '',
        password: ''
    })
    const Navigate = useNavigate();
    const [errors, setErrors]=useState({})
    const handleInput=(event)=>{
        setValues(prev =>({...prev, [event.target.name]:[event.target.value]}))
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        setErrors(validation(values));

        if(errors.email === "" && errors.password === ""){
            // calling insertin API
            axios.post('http://localhost:8081/Login', values)
            .then(res =>{
                if(res.data === "Success"){
                    Navigate('/Home');
                }
                else{
                    alert(" No record Existed ");
                    alert(res.data);
                }
            
            })
            .catch(err => {
                alert(err);
            });
                    }
    }
    return(
        <div className="container" >
        <div className="main">
 <h2>Login</h2>
        <p>Please fill in your credentials to login.</p>
        <form action="" onSubmit={handleSubmit}>
            <div className="form-group ">
                <label>Username</label>
                <input type="text" name="email" onChange={handleInput} className="form-control"/>
                {errors.email &&<span className='text-danger'>{errors.email}</span>}
            </div>    
            <div className="form-group ">
                <label>Password</label>
                <input type="password" name="password" onChange={handleInput} className="form-control"/>
                {errors.password &&<span className='text-danger'>{errors.password}</span>}
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Login</button>
            </div>
            <p>Don't have an account? <Link to= "/Signup">create account</Link></p>
            
        </form>
        
</div>


</div>



    )
}
export default Login