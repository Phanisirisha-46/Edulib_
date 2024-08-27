import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaHome } from "react-icons/fa";
import { GrCatalogOption } from "react-icons/gr";
import { IoBookSharp } from "react-icons/io5";
import logo from '../../assets/edulogo.png';
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { IoPerson } from "react-icons/io5";
import { IoToggle } from "react-icons/io5";

function Header() {
  return (
    <div className='d-flex justify-content-between align-items-center header'>
      <div className='d-flex align-items-center'>
        <img src={logo} alt="logo" className='logo-image' />
        <h3 className='text-dark ms-3'>EduLib</h3>

        <ul className='nav fs-5 ms-5'>
          <li className='nav-item'>
            <Link to="home" className='nav-link'>
              <FaHome className='fs-4 text-black'/> Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to="textbook" className='nav-link'>
              <IoBookSharp className='fs-4 text-black'/> TextBooks
            </Link>
          </li>
          <li className='nav-item'>
            <Link to="catalog" className='nav-link'>
              <GrCatalogOption className='fs-4 text-black'/> Catalog
            </Link>
          </li>
        </ul>
      </div>

      <div className='d-flex align-items-center'>
        <button className='icon-button'>
          <BsFillBrightnessHighFill className='fs-4 large-icon' />
        </button>
        <button className='icon-button'>
          <IoToggle className='fs-4 large-icon' />
        </button>
        <button className='icon-button'>
          <IoPerson className='fs-4 large-icon' />
        </button>
      </div>
    </div>
  );
}

export default Header;
