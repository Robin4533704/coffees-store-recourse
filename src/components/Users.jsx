import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const Users = () => {
    const initialUsers = useLoaderData();
    const [users, setUsers] = useState(initialUsers)
    
    const handleDelete = (id) =>{
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
})
.then((result) => {
  if (result.isConfirmed) {

 fetch(`http://localhost:3000/users/${id}`, {
    method : 'DELETE',
    headers: {
        'content-type' : 'application/json'
    }

 })
 .then( res=> res.json())
 .then(data => {
  if(data.deletedCount){

const ramainingUsers = users.filter(user => user._id !== id)
    setUsers(ramainingUsers)
     Swal.fire({
        title: "Deleted!",
        text: "your file has been deleted.",
        icon: "success",
     });
   
    }
 })

//     Swal.fire("Saved!", "", "success");
//   } else if (result.isDenied) {
//     Swal.fire("Changes are not saved", "", "info");
  }
});
    }

    
    return (
        <div>
            <h1>{users.length}</h1>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         NO
        </th>
        <th>Name</th>
        <th>phone</th>
        <th>Email</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {
users.map((user, index) => (
      <tr key={user._id}>
        <th>
         {index + 1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={user.photo}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{user.name}</div>
              <div className="text-sm opacity-50">{user.address}</div>
            </div>
          </div>
        </td>
        <td>
          {user.phone}
          <br />
         
        </td>
        <td>{user.email}</td>
        <th>
          <button className="btn btn-ghost btn-xs">V</button>
          <button className="btn btn-ghost btn-xs">E</button>
          <button onClick={() => handleDelete(user._id)} className="btn btn-ghost btn-xs">X</button>
        </th>
      </tr>
))
    }
     
     
    </tbody>
   
  </table>
</div>
        </div>
    );
};

export default Users;