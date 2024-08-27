import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom" 
import RootLayout from './RootLayout';
import RoutingError from './RoutingError';
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import Textbook from './components/Textbook/Textbook';
import './App.css';
function App() {

  const browserRouter= createBrowserRouter([
  {
    path:'',
    element:<RootLayout/>,
    errorElement:<RoutingError/>,
    
  children:[
    {
      path:'',
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