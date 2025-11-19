import React, { useState } from "react";
import { FaPaperPlane, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full h-16 flex items-center justify-between px-6 md:px-10 bg-white shadow-sm">
      
      {/* Left - Logo */}
      <div className="text-lg font-bold">logo</div>

      {/* Hamburger - Mobile Only */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setOpen(!open)}
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      {/* Center - Menu (Desktop Only) */}
      <ul className="hidden md:flex relative rounded-full shadow-input justify-center items-center space-x-4 px-8 py-4">
        <li className="backdrop-blur-sm bg-black/60 whitespace-nowrap uppercase text-white text-sm px-4 py-1 rounded-full">HOME</li>
        <li className="backdrop-blur-sm bg-black/60 whitespace-nowrap uppercase text-white text-sm px-4 py-1 rounded-full">ABOUT US</li>
        <li className="backdrop-blur-sm bg-black/60 whitespace-nowrap uppercase text-white text-sm px-4 py-1 rounded-full">SERVICES</li>
        <li className="backdrop-blur-sm bg-black/60 whitespace-nowrap uppercase text-white text-sm px-4 py-1 rounded-full">BLOGS</li>
        <li className="backdrop-blur-sm bg-black/60 whitespace-nowrap uppercase text-white text-sm px-4 py-1 rounded-full">PROJECTS</li>
        <li className="backdrop-blur-sm bg-black/60 whitespace-nowrap uppercase text-white text-sm px-4 py-1 rounded-full">CONTACT US</li>
      </ul>

      {/* Right - Button (Desktop Only) */}
      <div className="hidden md:block">
        <button className="cta-button group bg-[#5c66ab] text-white rounded px-4 py-2 text-sm flex items-center gap-2 hover:bg-[#4b558f] active:scale-95 transition duration-300">
          <span>Discuss a Project</span>
          <span className="plane-wrapper text-white"><FaPaperPlane /></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-start px-6 py-4 space-y-4 md:hidden z-50">
          <li className="uppercase text-gray-800 text-sm border-b pb-2 w-full">HOME</li>
          <li className="uppercase text-gray-800 text-sm border-b pb-2 w-full">ABOUT US</li>
          <li className="uppercase text-gray-800 text-sm border-b pb-2 w-full">SERVICES</li>
          <li className="uppercase text-gray-800 text-sm border-b pb-2 w-full">BLOGS</li>
          <li className="uppercase text-gray-800 text-sm border-b pb-2 w-full">PROJECTS</li>
          <li className="uppercase text-gray-800 text-sm border-b pb-2 w-full">CONTACT US</li>

          {/* Mobile CTA Button */}
          <button className="bg-[#5c66ab] text-white rounded px-4 py-2 text-sm flex items-center gap-2 mt-4 w-full justify-center hover:bg-[#4b558f] transition duration-300">
            <span>Discuss a Project</span>
            <FaPaperPlane />
          </button>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
