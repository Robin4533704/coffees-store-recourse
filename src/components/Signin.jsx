import React, { useContext } from 'react';
import { AuthContext } from '../contex/AuthContex';


const Signin = () => {
  const {signInUser} = useContext(AuthContext);

 const handlesigin = e =>{
   e.preventDefault();
   const form = e.target;
  const email = form.email.value;
  const password = form.password.value;
   console.log(email, password);
  
  //  firebase sign in 
  signInUser(email, password)
   .then(result => {
    console.log(result.user)
   // update last sing in time and creation time
    const signInInfo = {
      email,
      lastSignInTime: result.user.metadata.lastSignInTime,
    }

    fetch('http://localhost:3000/users', {
      method: 'PATCH',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(signInInfo)
    })
    .then(res => res.json())
    .then(data =>{
      console.log('after update',data);
    })
    
   })
   .catch(error => {
    console.log(error);
   })
 }


    return (
     <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
         <h1 className="text-5xl font-bold">Login now!</h1>
        <form onSubmit={handlesigin} className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" name='password' placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Sigin</button>
        </form>
      </div>
    </div>

    );
};

export default Signin;
