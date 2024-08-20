 
import { Link } from 'react-router-dom';
import './App.css'

function App() {

  const handleAddUser=event=>{
    // const user=null;
    event.preventDefault();
    const form=event.target;
    const name=form.name.value;
    const email=form.email.value;
    const user={name,email};
    console.log(user);
  

  fetch('http://localhost:8080/users',{
    method:"POST",
    headers:{
      "content-type":"application/json"
    },
     body: JSON.stringify(user)

  })
  .then(res=>res.json())
  .then(data=> {
    console.log(data);
    if(data.insertedId){
      alert('USer data is added')
      form.reset();
    }
  })
}

  return (
    <>
 
      <h1>This is CRUD</h1>
      
      <Link to='/users'><button>Read</button></Link>

    <form onSubmit={handleAddUser}>
      <input type="text" name="name" id="" />
      <br />
      <input type="email" name="email" id="" />
      <br />
      <button>ADDUSER</button>
     </form>
    </>
  )
}

export default App
