import React from 'react'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer";
import {Outlet } from "react-router-dom";
function RootLayout() {
  return (
    <div>
        <Header/>
            <div style={{minHeight:"77.2vh"}} className='container'> 
                <Outlet/>
            </div>
        <Footer/>
    </div>
  )
}

export default RootLayout