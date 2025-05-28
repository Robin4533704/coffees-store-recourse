import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayOut from './layout/MainLayOut.jsx';
import Home from './components/Home.jsx';
import AddCoffe from './components/AddCoffe.jsx';
import CoffesDetails from './page/CoffesDetails.jsx';
import UpDateCoffee from './components/UpDateCoffee.jsx';
import Signin from './components/Signin.jsx';
import SignUp from './SignUp.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import Users from './components/Users.jsx';


 const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayOut,
    children: [
      {
       
       index: true,
       path: "/",
     loader: () => fetch('http://localhost:3000/coffees'),
      Component: Home,  
      },
      {
        path: "/addCoffe",
        Component : AddCoffe,
      },
      {
        path: '/coffesdetails/:id',
       Component: CoffesDetails,
      },
      {
        path: "/updateCoffee/:id",
        loader: ({params}) => fetch(`http://localhost:3000/coffees/${params.id}`) ,
        Component : UpDateCoffee,
      },
      {
        path: "signin",
        Component: Signin
      },
      {
      path: "sigup",
      Component: SignUp,
      
      },
      {
        path: "users",
        Component: Users,
        loader: () => fetch('http://localhost:3000/users'), 
      }
     
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>

  <AuthProvider>
      <RouterProvider router={router} />
  </AuthProvider>

  </StrictMode>,
)

// .Provider value={{userInfo: {}}