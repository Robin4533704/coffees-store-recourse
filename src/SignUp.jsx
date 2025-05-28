import React, {  useContext } from 'react'; // useContext ব্যবহার করুন
import { AuthContext } from './contex/AuthContex';
import Swal from 'sweetalert2';

const SignUp = () => {
 const {createUser} = useContext(AuthContext);
  console.log(createUser);

const handleSingup = (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const { email, password, ...restFormData } = Object.fromEntries(formData.entries());

  createUser(email, password)
    .then((result) => {
      console.log(result.user);

      const userProfile = {
        email,
        ...restFormData,
        creationTime: result.user?.metadata?.creationTime,
        lastSignInTime: result.user?.metadata?.lastSignInTime,
      };

      return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userProfile)
      });
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error('Failed to save user to backend');
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      if (data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
    .catch((error) => {
      console.error("Error during signup:", error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message || 'Something went wrong during signup.',
      });
    });
};

 
   return (
     <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
       <div className="card-body">
         <h1 className="text-5xl font-bold">Login now!</h1>
         <form onSubmit={handleSingup} className="fieldset">
           <label className="label">Name</label>
           <input type="text" name='name' className="input" placeholder="tipe your name" />

           <label className="label">Address</label>
           <input type="text" name='address' className="input" placeholder="add your address" />
           <label className="label">Photo</label>
           <input type="text" name='photo' className="input" placeholder=" photo URL" />
           <label className="label">Phone Number</label>
           <input type="text" name='number' className="input" placeholder=" type your phone number" />
           <label className="label">Email</label>
           <input type="email" name='email' className="input" placeholder="Email" />
           <label className="label">Password</label>
           <input type="password" name='password' className="input" placeholder="Password" />
           <div><a className="link link-hover">Forgot password?</a></div>
           <button className="btn btn-neutral mt-4">Sign Up</button>
         </form>
       </div>
     </div>
   );
};

export default SignUp;