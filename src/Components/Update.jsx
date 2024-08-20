import { useLoaderData } from "react-router-dom";

 
const Update = () => {
    const loadedUser=useLoaderData();

    const handleUpdate =event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        console.log(name,email);
        const Updateduser={name,email}
         
    
// CLiet data Server patha 
    fetch(`http://localhost:8080/users/${loadedUser._id}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(Updateduser)
    })
    .then(res=>res.json())
    .then(data=>{

        console.log(data)
        if(data.modifiedCount>0){
            alert("data is update")
        }
    })
    }
    return (
        <div>
            <h3>Update information of{loadedUser.name}</h3>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={loadedUser?.name} id="" />
                <br />
                <input type="email" defaultValue={loadedUser?.email} name="email" id="" />
                <br />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Update;