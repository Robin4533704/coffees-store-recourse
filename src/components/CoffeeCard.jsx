import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({coffee, coffees, setCoffees }) => {
const handleDelete = (_id) =>{
  
  Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
 
  if (result.isConfirmed) {

fetch(`http://localhost:3000/coffees/${_id}`, {
  method: "DELETE"
})
.then(res => res.json())
.then(data =>{
 if(data.deletedCount){
Swal.fire({
      title:"Deleted!",
      text: "Your file has been deleted.",
      icon: "success",
      
    });
    // remov the coffees
   const remainingCoffees = coffees.filter(cof => cof._id !== _id);
setCoffees(remainingCoffees);
  
 }
})  
  }
});

}

  const {_id, photo, name, quantity, price } = coffee;

  return (
    <div className="card lg:card-side bg-base-100 shadow-md border p-4">
      <figure className="w-full md:w-1/3">
        <img
          src={photo}
          alt=''
          className="object-cover w-full h-48 rounded"
        />
      </figure>
      <div className="flex justify-around  w-full border- mt-6">
     
         <div>
           <h2>NAME:{name}</h2>
          <p>Price:{price}</p>
          <p>Quantity:{quantity}</p>
         </div>
          <div className="join join-vertical space-y-2">
 <Link to={`/coffesdetails/${_id}`}>
  <button className="btn join-item">View</button>
 </Link>
 <Link to= {`/updateCoffee/${_id}`}>
  <button className="btn join-item">Edit</button>
 </Link>
  <button onClick={() =>handleDelete(_id)} className="btn join-item">Deleat</button>
</div>
   </div>
   <div>
   
   </div>
    </div>
  );
};

export default CoffeeCard;
