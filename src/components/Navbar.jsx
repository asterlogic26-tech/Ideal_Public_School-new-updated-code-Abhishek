import React, { useState } from 'react'
import LogoImg from '../assets/LogoImg.png'
import { FaPen } from 'react-icons/fa6'
import { NavLink, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'program', path: '/program' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact-Us', path: '/contact-us' },
  ]

  return (
   <div className="sticky top-[48px] z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img
            src={LogoImg}
            alt="Logo"
            className="h-14 w-auto hover:scale-105 transition duration-300"
          />

          <div className="hidden sm:flex flex-col leading-tight">
            <p className="text-xl font-bold text-blue-800">
              Ideal Public Convent
            </p>
            <p className="text-sm text-pink-500 font-semibold">
              Play • Learn • Grow 🌈
            </p>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-pink-500 text-white shadow-md"
                    : "text-gray-600 hover:bg-pink-100 hover:text-pink-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden md:block">
          <button
            onClick={() => navigate("/contact-us")}
            className="flex items-center gap-2 bg-pink-500 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            Admission Now!
            <FaPen />
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 font-medium hover:text-pink-600"
            >
              {item.name}
            </NavLink>
          ))}

          <button
            onClick={() => {
              navigate("/contact-us");
              setIsOpen(false);
            }}
            className="w-full bg-pink-500 text-white py-2 rounded-full font-semibold"
          >
            Admission Now!
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar

