import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { MdContactPhone } from "react-icons/md";
import { IoTimeSharp } from "react-icons/io5";
import { AiFillInfoCircle } from "react-icons/ai";

function Footer() {
  return (
    <div className='d-flex justify-content-center footer'>
      <ul className='nav fs-5 p-3'>
        <li className='footer-nav-item'>
          <Link to="aboutus" className='footer-nav-link'>
            <AiFillInfoCircle className='fs-4 text-white me-2'/> About Us
          </Link>
        </li>
        <li className='footer-nav-item'>
          <Link to="timings" className='footer-nav-link'>
            <IoTimeSharp className='fs-4 text-white me-2'/> Timings
          </Link>
        </li>
        <li className='footer-nav-item'>
          <Link to="contact" className='footer-nav-link'>
            <MdContactPhone className='fs-4 text-white me-2'/> Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
