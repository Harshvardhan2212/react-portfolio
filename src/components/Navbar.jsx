import React from 'react';
import logo from '../assets/logo.svg'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from 'react-icons/fa';


const Navbar = () => {
  return (
    <nav className='mb-20 flex item-center justify-between py-6'>
      <div className="flex flex-shrink-0 items-center">
        <span className='mx-2 w-10 font-semibold text-3xl'>Hz</span>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/harshvardhan-zala-203b31337">
        <FaLinkedin/>
        </a>
        <a href="https://github.com/Harshvardhan2212">
        <FaGithub/>
        </a>
        <FaSquareXTwitter/>
        <FaInstagram/>
      </div>
    </nav>
  )
}

export default Navbar
