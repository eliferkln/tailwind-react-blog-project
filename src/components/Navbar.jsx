import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1440px] mx-auto px-4 text-white z-10 border-b-2 border-[#dadada63]'>
      <h1 className='text-3xl font-bold text-[#13426ca6] '>Hanife Erkalan</h1>
      <ul className='hidden md:flex'>
        <li className='p-6 text-[#13426ca6] '>Home</li>
        <li className='p-6 text-[#13426ca6] '>About</li>
        <li className='p-6 text-[#13426ca6] '>Contact</li>
        <li className='p-6 text-[#13426ca6] hover:bg-[#13426ca6] hover:text-white bg-[#dadada63] rounded-md '>Sign-in</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden z-10 text-[#13426ca6]'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-10' : 'ease-in-out duration-500 fixed left-[-100%] z-10'}>
      <h1 className='w-full text-3xl font-bold text-[#fff] '>Hanife Erkalan</h1>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4'>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
