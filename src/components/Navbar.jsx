import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" bg-black text-gray-400 h-[100px]  max-w-[1200px] mx-auto flex justify-between items-center">
      <h1 className=" text-4xl font-bold ml-4 primary-color">Khalid Miya</h1>
      <ul className=" hidden md:flex">
        <li className=" p-5">
          <a href="#about">About</a>
        </li>
        <li className=" p-5">
          <a href="#work">Projects</a>
        </li>
        <li className=" p-5">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className=" block md:hidden mr-6" onClick={handleNav}>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div className={nav?"fixed z-40 h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500": 'fixed left-[-100%]'}>
        <h1 className=" bg-[#202121] text-3xl font-bold m-4">Khalid Miya</h1>
        <ul className=" p-8 text-2xl">
          
          <li className=" p-2">
            <a href="#about">About</a>
          </li>
          <li className=" p-2">
            <a href="#projects" className=" scroll-smooth">Projects</a>
          </li>
         

          <li className=" p-2">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
