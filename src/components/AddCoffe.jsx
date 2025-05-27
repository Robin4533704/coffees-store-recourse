import React from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


const AddCoffe = () => {

    const handleAddCoffe = e =>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
      const newCoffee = Object.fromEntries(formData.entries());
      console.log(newCoffee);

    fetch('http://localhost:3000/coffees',
      {
  method: 'POST',
  headers: {
    'content-type':'application/json',
  },
  body: JSON.stringify(newCoffee),
  
}).then(res=>res.json())
.then(data => {
  console.log('Server response:', data);
  if (data.insertedId) {
    Swal.fire({
      title: "Coffee Added Successfully!",
      icon: "success"
    });
    e.target.reset(); 
  } else {
    Swal.fire({
      title: "Failed to add coffee!",
      icon: "error"
    });
  }
      })

    }

    return (
        <div className='p-24 '>
            <div className='p-12 text-center space-x-4'>
                <h1 className='text-4xl'>Add New Coffee</h1>
            <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleAddCoffe} className='   rounded'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
                  <fieldset className="fieldset bg-blue-200  border-blue-300 rounded-box  border p-2">
  <label className="label">Name</label>
  <input type="text" name='name' className="input w-full" placeholder="My cooffee name" />
  </fieldset>
                  <fieldset className="fieldset bg-blue-200 border-blue-300 rounded-box  border p-2">
  <label className="label">Quantity</label>
  <input type="text" name='quantity' className="input w-full" placeholder="My chef name" />
  </fieldset>
                  <fieldset className="fieldset bg-blue-200 border-blue-300 rounded-box  border p-2">
  <label className="label">Supplier</label>
  <input type="text" name='supplier' className="input w-full" placeholder="enter foffee supplier" />
  </fieldset>
                  <fieldset className="fieldset bg-blue-200 border-blue-300 rounded-box  border p-2">
  <label className="label">Taste</label>
  <input type="text" name='taste' className="input max-w-full" placeholder="enter cooffee name" />
  </fieldset>

  <fieldset className="fieldset bg-blue-200 border-blue-300 rounded-box  border p-2">
  <label className="label">Price</label>
  <input type="text" name="price" defaultValue="120" className="input w-full" placeholder="Enter coffess price" />
</fieldset>


                  <fieldset className="fieldset bg-blue-200 border-blue-300 rounded-box  border p-2">
  <label className="label">Details</label>
  <input type="text" name='details' className="input w-full" placeholder="enter coffee details" />
  </fieldset>
                 
            </div>
              <fieldset className="fieldset bg-blue-200 border-blue-300 rounded-box my-6   border p-2">
  <label className="label">Photo</label>
  <input type="text" name='photo' className="input w-full" placeholder="photo URL" />
  </fieldset>
  <button type="submit" className="btn btn-block bg-amber-300">
  Add Coffee
</button>


            </form>
        </div>
    );
};

export default AddCoffe;