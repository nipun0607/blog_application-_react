import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './components/Signup'
import Login from './components/Login'
import AuthProvider from '../src/context/AuthProvider'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import Layout from './components/Layout'
import firebase from './firebase'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Settings from './components/Settings'


function App() {
  const [count, setCount] = useState(0)

  const router=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        
          {
            path:"/dashboard",
            element:<Dashboard/>
          },
          {
            path:"/profile",
            element:<Profile/>
          },
          {
            path:'/settings',
            element:<Settings/>
          },
        
      ]
    },
   
    
    {
      path:"/login",
      element:<Login/>
    },
    {
      path: "/signup",
      element:<Signup/>
    },
   
   

  ])

  return (
    <>
    <AuthProvider>
    <RouterProvider router={router}/>
          </AuthProvider>
    </>
  )
}

export default App
