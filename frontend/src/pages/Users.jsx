import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import '../sass/css/Users.css';
const Users=()=>{
    const [user, setUser] = useState([])
    useEffect(()=> {
axios.get('http://localhost:8081/student')
.then(res => setUser(res.data))
.catch(err =>alert(err));
    }, [])

    const  HandleDelete = async (id) =>{
try{
    await axios.delete('http://localhost:8081/remove/'+id)
    window.location.reload();
}catch(err){
    console.log(err);
}
    }
    return(

        < div className='ms-5 d-flex vh-100  w-300 bg-primary justify-content-center align-items-center'>
            <div className='w-100 bg-white rounded p-3'>
<Link to="/createnewuser" className='btn btn-success'>ADD</Link>
<table className='table'>
    <thead>
       <tr> 
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
        <th>Department</th>
        <th>Title</th>
        <th>Role</th>
        <th>Telphone</th>
        <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        {
          user.map((data, i)=>(
                <tr key={i}>
                    <td>{data.Firstname}</td>
                    <td>{data.Lastname}</td>
                    <td>{data.Email}</td>
                    <td>{data.Department}</td>
                    <td>{data.Title}</td>
                    <td>{data.Role}</td>
                    <td>{data.Telphone}</td>
                    
                   <td> 
                    <Link to={`updateuser/${data.Id}` }  className='btn btn-primary me-2'>Update</Link>
                    <button  className='btn btn-danger ms-2' onClick={e => HandleDelete(data.Id)}>delete</button>

                   </td>
                   
                    
                </tr>
            ))
        }     
    </tbody>
</table>
            </div>

        </div>

    )
};
export default  Users;