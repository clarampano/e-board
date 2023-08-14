import React,{ useState }from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './sass/components/signup.scss'
import './Signup_validation';
import validation from './Signup_validation';
import axios from 'axios';
function Signup(){
const navigate=useNavigate();
    const [values, setValues]= useState({
        email: '',
        password: '',
        confirm_password: ''


    })
    const [errors, setErrors]= useState({})
    const handleInput=(event)=>{
        setValues(prev =>({...prev, [event.target.name]:[event.target.value]}))
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        setErrors(validation(values));
        if(errors.email === "" && errors.password === "" && errors.confirmpassword === ""){
                             // calling insertin API
axios.post('http://localhost:8081/Signup', values)
.then(res =>{
navigate('/');
})
.catch(err => {
    alert(err);
});
// Ends by here
                }
            
        }
    

    return(
        <div className="container" >
        <div className="main">
 <h2>Create New Account</h2>
        <p>Please fill in your credentials For sign up.</p>
        <form action="" onSubmit={handleSubmit}>
            <div className="form-group ">
                <label>User Email</label>
                <input type="text" name="email" onChange={handleInput} className="form-control"/>
                {errors.email &&<span className='text-danger'>{errors.email}</span>}
            </div>    
            <div className="form-group ">
                <label>New Password</label>
                <input type="password" name="password" onChange={handleInput} className="form-control"/>
                {errors.password &&<span className='text-danger'>{errors.password}</span>}
            </div>
            <div className="form-group ">
                <label>Confirm Password</label>
                <input type="password" name="confirmpassword" onChange={handleInput} className="form-control"/>
                {errors.confirmpassword &&<span className='text-danger'>{errors.confirmpassword}</span>}
            </div>
            <div className="form-group">
            <button type="submit"  className="btn btn-primary">Submit</button>
            </div>
            <p>Already Have Account? <Link to= "/">Login</Link></p>
            
        </form>
</div>


</div>

    )
}
export default Signup;