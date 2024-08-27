import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom" 
import RootLayout from './RootLayout';
import RoutingError from './RoutingError';
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import Textbook from './components/Textbook/Textbook';
import Timings from './components/Timings/Timings';
import Contact from './components/Contact/Contact';
import Aboutus from './components/Aboutus/Aboutus';
import './App.css';
function App() {

  const browserRouter= createBrowserRouter([
  {
    path:'',
    element:<RootLayout/>,
    errorElement:<RoutingError/>,
    
  children:[
    {
      path:'/home',
      element:<Home/>,
    },
    {
      path:'/catalog',
      element:<Catalog/>,
    },
    {
      path:'/textbook',
      element:<Textbook/>,
    },
    {
      path:'/timings',
      element:<Timings/>,
    },
    {
      path:'/aboutus',
      element:<Aboutus/>,
    },
    {
      path:'/contact',
      element:<Contact/>,
    },
   

  ]
}

])
  return (
    <div>
      <div className='main'>
        <RouterProvider router={browserRouter}/>
  
      </div>
      

    </div>
  )
}

export default App