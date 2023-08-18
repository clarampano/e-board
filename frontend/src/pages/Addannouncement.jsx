import React, { useState } from "react";
import '../sass/css/Addannouncement.css';
import axios from "axios";


const Add_Announcent=()=>{
  const[file, setFile] = useState();
  const[images, setImages] = useState([]);
  const Handlefile = (e) =>{
    setFile(e.target.files[0])
  }
  const Handleupload = () =>{
    const formdata = new FormData();
    formdata.append('image', file);
    axios.post('http://localhost:8081/upload', formdata)
    .then(res =>{

    })
    .catch(err=> console.log(err));
  }

    return(
        
      <div className='ms-5 vh-100  w-600 bg-primary justify-content-center align-items-center'>  
      <div className='w-300 bg-white rounded p-3'> 
      <form className='form'>
      
      <div className='me-5 w-200'>           
	<label htmlFor="">Attach File</label>   
	<input type="file" accept="image/jpg" className='form-control' onChange={Handlefile}/>  
  </div>
          
	         
	<label htmlFor="">Choose Category Of Your Annoucent</label> 
  <div className='me-5 '>  
	<input type="radio" value='Module Timetable' name="mt" /> 
  <label>Module Announcent </label>
   
	<input type="radio" value="Cat Timetable" name="ct" /> 
  <label>Cat Timetable </label>
   
	<input type="radio" value="Exam Timetable" name="et" /> 
  <label>Exam Timetable </label>
    
	<input type="radio" value="Internal Memo" name="im" /> 
  <label>Internal Memo </label>
  
	<input type="radio" value="General Announcement" name="ga" /> 
  <label>General Announcement </label>
   
	<input type="radio" value="Others" name="ot"/> 
  <label>Others </label>
  </div>
  <button  className='btn btn-success' onClick={Handleupload}> Submit</button>
  </form>  
          
          
     </div>
    </div>
            
    )
};
export default Add_Announcent;


