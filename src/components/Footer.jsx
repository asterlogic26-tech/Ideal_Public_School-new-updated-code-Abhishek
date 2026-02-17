import React from 'react'
import LogoImg from '../assets/LogoImg.png'
import { Dot } from "lucide-react";
import { NavLink } from 'react-router-dom';

const Footer = () => {

    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Program', path: '/program' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact-Us', path: '/contact-us' }
    ];


    return (
        <footer className='relative overflow-hidden bg-gradient-to-r from-[#0b5fa5] to-[#0a3f6e] text-white'>

            {/* top Wave */}
            <div className="overflow-hidden leading-none">
                <svg
                    viewBox="0 0 500 80"
                    preserveAspectRatio="none"
                    className="w-full h-32 md:h-52 block"
                >
                    <path
                        d="M0,40 C150,80 350,0 500,30 L500,0 L0,0 Z"
                        className="fill-[#020c6f]"
                    />
                </svg>
            </div>


            {/* Floating Elements */}
            <div className="absolute left-10 top-20 text-4xl floating">🎈</div>
            <div className="absolute right-20 top-16 text-3xl floating delay-200">⭐</div>
            <div className="absolute left-45 top-16 text-3xl floating delay-200">⭐</div>
            <div className="absolute left-1/2 top-6 text-5xl floating delay-500">🧸</div>


            <div className='max-w-7xl mx-auto px-8 py-14 grid grid-cols-1 md:grid-cols-3 gap-12 items-start relative z-10'>

                {/* Logo : Left Section */}
                <div className='flex flex-col gap-4'>
                    <img src={LogoImg} alt="Logo" className='w-40' />
                    <p className='text-sm text-white/80 leading-relaxed'>
                        © 2026 Ideal Convent School. All Rights Reserved. <br />
                        Designed by <span className="text-yellow-300 font-semibold">Asterlogic Pvt.Ltd.</span> for little learners.
                    </p>
                    <p className='mt-2 text-sm text-white/90'>
                        ❤️ Trusted by 500+ Happy Parents
                    </p>
                </div>


                {/* Menu Items / Qucik Links */}
                <div className=''>
                    <h2 className='text-xl font-semibold mb-4'>
                        Quick Links
                    </h2>
                    <ul className='space-y-3  text-lg'>
                        {menuItems.map((item) => (
                            <NavLink key={item.name} to={item.path}>
                                <li className="cursor-pointer transition-all duration-300 hover:translate-x-2 hover:text-yellow-300">
                                    ➤ {item.name}
                                </li>
                            </NavLink>
                        ))}
                    </ul>
                </div>

                {/* Right Section  */}
                <div>
                    <h2 className='text-xl font-semibold mb-4'>
                        Contact Us
                    </h2>

                    <ul className="space-y-4 text-lg cursor-pointer">
                        <li className="flex gap-4 items-start hover:translate-x-1 transiition-all">
                            <span className='text-2xl floating'>📍</span>
                            <span>
                                Bhim Nagar, Isasani Road, Near Barewar Bartan Godawn,
                                Nagpur
                            </span>
                        </li>

                        <li className="flex gap-4 hover:translate-x-1 transition-all">
                            <span className='text-2xl'>✉️</span>
                            <span>idealpublic2025@gmail.com</span>
                        </li>

                        <li className="flex gap-4 hover:translate-x-1 transition-all">
                            <span className='text-2xl'>⏰</span>
                            <span>
                                School Time : 11:00 AM – 3:00 PM <br />
                                Office Time : 11:00 AM – 3:00 PM
                            </span>
                        </li>

                        <li className="flex gap-4 hover:translate-x-1 transition-all">
                            <span className='text-2xl'>📞</span>
                            <span>91456 97041 &nbsp; | &nbsp; 90670 86674</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-white/20 py-4">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center gap-10 text-base text-whhite/90">
                    <NavLink to="/privacy">
                        <span className="flex items-center gap-2 hover:text-yellow-300 transition-all cursor-pointer">
                            <Dot size={32} /> condition and terms
                        </span>
                    </NavLink>

                    <NavLink to="/privacy">
                        <span className="flex items-center gap-2 hover:text-yellow-300 transition-all cursor-pointer">
                            <Dot size={32} /> privacy policy
                        </span>
                    </NavLink>
                </div>
            </div>
        </footer>
    )
}

export default Footer