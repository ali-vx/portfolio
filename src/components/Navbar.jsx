import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaDribbble,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#212529] text-white'>
      <div>
        <img src={Logo} alt='Logo' style={{ width: '50px' }} />
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='projects' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to='design' smooth={true} duration={500}>
            Design
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#212529] flex flex-col justify-center items-center'
        }
      >
        <li className='py-5 text-3xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-5 text-3xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-5 text-3xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-5 text-3xl'>
          {' '}
          <Link onClick={handleClick} to='projects' smooth={true} duration={500}>
          Projects
          </Link>
        </li>
        <li className='py-5 text-3xl'>
          {' '}
          <Link onClick={handleClick} to='design' smooth={true} duration={500}>
          Design
          </Link>
        </li>
        <li className='py-5 text-3xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li className='py-5 text-3xl inline-flex justify-between'>
          {' '}
          <a
              className='mr-10 text-white'
              href='/'
            >
              <FaLinkedin size={30} />
            </a>
            <a
              className='mr-10 text-white'
              target="_blank" rel="noopener noreferrer" 
              href='https://github.com/ali-vx'
            >
              <FaGithub size={30}/>
            </a>
            <a
              className='mr-10 text-white'
              target="_blank" rel="noopener noreferrer"
              href='https://dribbble.com/d_ali'
            >
              <FaDribbble size={30}/>
            </a>
            <a
              className='text-white'
              href='mailto:amuhammad161@gmail.com'
            >
              <HiOutlineMail size={30}/>
            </a>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-white'
              href='/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-white'
              target="_blank" rel="noopener noreferrer" 
              href='https://github.com/ali-vx'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-white'
              href='mailto:amuhammad161@gmail.com'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#EA4C89]'>
            <a
              className='flex justify-between items-center w-full text-white'
              target="_blank" rel="noopener noreferrer"
              href='https://dribbble.com/d_ali'
            >
              Dribbble <FaDribbble size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
