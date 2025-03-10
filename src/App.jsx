/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Notfound from './components/Notfound/Notfound';
import '@fortawesome/fontawesome-free/css/all.min.css';


let routers =  createBrowserRouter([
  
{
  path:"" , element: <Layout /> , children:[
    {index:true,element: <Home />},
    {path: "about",element: <About />},
    {path: "portfolio",element: <Portfolio /> },
    {path: "contact",element: <Contact /> },
    {path: "*",element: <Notfound />},

  ]
}

]);



function App() {
  

  return <>
  
  <RouterProvider router={routers}>
      </RouterProvider>
  
  </>
}

export default App
