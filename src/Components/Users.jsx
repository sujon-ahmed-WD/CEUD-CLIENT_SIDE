 import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
 
 const Users = () => {
    const lodedeuser=useLoaderData()
    const[users,setUser]=useState(lodedeuser)


    const handleDelte=_id=>{
        console.log('delete',_id);
        fetch(`http://localhost:8080/users/${_id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
             
            console.log(data)
            if(data.deletedCount>0){
                alert('deleted Successfully');
                const remaninge=users.filter(user=>user._id !== _id);
                setUser(remaninge)
            }
        })
    }
     
    return (
        
        <div>

             <h1>All the READ
                {lodedeuser.length}</h1>

             <ol>
                {
                    users.map(use=><li key={use._id}>
                        {use.name} : 
                         <span>{use.email} :  </span>
                         {use._id}
                         <Link to={`/update/${use._id}`}>
                         <button>Update</button>
                         </Link>
                         <button
                         onClick={()=>handleDelte(use._id)}
                         >X</button>
                    </li>)
                }
             </ol>
        </div>
    );
 };
 
 export default Users;