import axios from 'axios';

import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';


const CreateUser = () => { 
   const [fn, setFn] = useState('')  
   const [ln, setLn] = useState('') 
   const [em, setEm] = useState('') 
   const [pa, setPa] = useState('') 
  // const [cp, setCp] = useState('') 
   const [de, setDe] = useState('') 
   const [ti, setTi] = useState('') 
   const [ro, setRo] = useState('') 
   const [te, setTe] = useState('') 


   const navigate = useNavigate();
    function handleSubmit(event) {  
	event.preventDefault();      
	axios.post('http://localhost:8081/create', {fn, ln, em, pa, de, ti, ro, te})   
	.then(res => { 
	console.log(res); 
	navigate('/users');       
	}).catch(err => console.log(err));  
	} 
	return (    <div className='ms-5 vh-100 bg-primary justify-content-center align-items-center'>  
	<div className='w-300 bg-white rounded p-3'>       
	<form  onSubmit={handleSubmit}>    
	<h2>Add Student</h2>             
	<div className='mb-2'>           
	<label htmlFor="">FirstName</label>   
	<input type="text" placeholder='Enter FirstName' className='form-control'                     onChange={e => setFn(e.target.value)}   
	/>              
	</div> 
	<div className='mb-2'>           
	<label htmlFor="">LastName</label>   
	<input type="text" placeholder='Enter LastName' className='form-control'  onChange={e => setLn(e.target.value)}   
	/>              
	</div> 
	<div className='mb-2'>           
	<label htmlFor="">Email</label>   
	<input type="email" placeholder='Enter Email' className='form-control'  onChange={e => setEm(e.target.value)}   
	/>              
	</div> 
	<div className='mb-2'>           
	<label htmlFor="">Password</label>   
	<input type="text" placeholder='Enter Password' className='form-control'onChange={e => setPa(e.target.value)}   
	/>              
	</div> 
	<div className='mb-2'>           
	<label htmlFor="">Confirm Password</label>   
	<input type="text" placeholder='Confirm Password' className='form-control'/>              
	</div> 
	<div className='mb-2'>           
	<label htmlFor="">Department</label>   
	<input type="text" placeholder='Enter Department' className='form-control' onChange={e => setDe(e.target.value)}   
	/>              
	</div> 
	<div className='mb-2'>           
	<label htmlFor="">Title</label>   
	<input type="text" placeholder='Enter Title' className='form-control'onChange={e => setTi(e.target.value)}   
	/>              
	</div> 
	<div className='mb-2'>           
	<label htmlFor="">Role</label>   
	<input type="text" placeholder='Enter Role' className='form-control'onChange={e => setRo(e.target.value)}   
	/>              
	</div>         
	<div className='mb-2'>          
	<label htmlFor="">Telphone</label> 
	<input type="text" placeholder='Enter Telphone' className='form-control'onChange={e => setTe(e.target.value)}/>
	</div>                <button className='btn btn-success'>Submit</button>   
	</form>     
	</div>   
	</div>  );
    };
export default CreateUser;