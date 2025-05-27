import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';


const UpDateCoffee = () => {
   const nav = useNavigate()
   console.log(nav)

 const {_id,name,supplier,quantity,price,teste,photo,details} = useLoaderData()


   const handleUpdateCoffe = e =>{
    e.preventDefault()
     const form = e.target;
        const formData = new FormData(form);
      const  updateCoffees = Object.fromEntries(formData.entries());
      console.log( updateCoffees);

 fetch(`http://localhost:3000/coffees/${_id}`,
      {
  method: 'PUT',
  headers: {
    'content-type':'application/json',
  },
  body: JSON.stringify(updateCoffees),
  
})
.then(res => res.json())
.then(data =>{
    if(data.modifiedCount){
        Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Coffess update successful",
  showConfirmButton: false,
  timer: 1500
});
    }
})
   }
    return (
          <div className='p-16 '>
            <div className='p-12 text-center space-x-4'>
                <h1 className='text-4xl'>Update New Coffee</h1>

            </div>
            <form onSubmit={handleUpdateCoffe} className='   rounded'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
                  <fieldset className="fieldset bg-blue-200  border-blue-300 rounded-box  border p-2">
  <label className="label">Name</label>
  <input type="text" defaultValue={name} name='name' className="input w-full" placeholder="My cooffee name" />
  </fieldset>
                  <fieldset className="fieldset bg-blue-200 border-blue-300 rounded-box  border p-2">
  <label className="label">Quantity</label>
  <input type="text" name='quantity' defaultValue={quantity} className="input w-full" placeholder="My chef name" />
  </fieldset>
                  <fieldset className="fieldset bg-blue-200 border-blue-300 rounded-box  border p-2">
  <label className="label">Supplier</label>
  <input type="text" name='supplier' className="input w-full" defaultValue={supplier} placeholder="enter foffee supplier" />
  </fieldset>
                  <fieldset className="fieldset bg-blue-200 border-blue-300 rounded-box  border p-2">
  <label className="label">Taste</label>
  <input type="text" defaultValue={teste} name='taste' className="input w-full" placeholder="enter cooffee name" />
  </fieldset>

  <fieldset className="fieldset bg-blue-200 border-blue-300 rounded-box  border p-2">
  <label className="label">Price</label>
  <input type="text" name="price" defaultValue={price} className="input w-full" placeholder="Enter coffess price" />
</fieldset>


                  <fieldset className="fieldset bg-blue-200 border-blue-300 rounded-box  border p-2">
  <label className="label">Details</label>
  <input type="text" name='details' defaultValue={details} className="input w-full" placeholder="enter coffee details" />
  </fieldset>
                 
            </div>
              <fieldset className="fieldset bg-blue-200 border-blue-300 rounded-box my-6   border p-2">
  <label className="label">Photo</label>
  <input type="text" name='photo' defaultValue={photo} className="input w-full" placeholder="photo URL" />
  </fieldset>
  <button type="submit" className="btn btn-block bg-amber-300">
  Add Coffee
</button>


            </form>
        </div>
    );
};

export default UpDateCoffee;