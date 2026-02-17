import React, { useEffect, useState } from 'react'
import ImgOne from "../assets/HeroImg1.jpg"
import ImgTwo from "../assets/HeroImg2.webp"
import ImgThree from "../assets/HeroImg3.jpg"
import ImgFour from "../assets/HeroImg4.webp"
import WhyChooseCards from './WhyChooseCards'
import playgroup from "../assets/PlayGroup-Img1.png"
import nursery from "../assets/Nursery-Img2.webp"
import kg1 from "../assets/kg1-Img3.png"
import kg2 from "../assets/kg2.png"
import ProgramCard from './ProgramCard'


const HomePage = () => {

    const slides = [
        {
            img: ImgOne,
            title: "Fun Learning",
            desc: "Engaging activities that make learning enjoyable for every child."
        },
        {
            img: ImgTwo,
            title: "Safe Environment",
            desc: "A secure and nurturing space where children can explore and grow."
        },
        {
            img: ImgThree,
            title: "Little Steps, Big Dreams",
            desc: "A warm and joyful place where young mind grow, explore, and build the foundation for a bright future!."
        },
        {
            img: ImgFour,
            title: "Caring Teachers",
            desc: "Dedicated educators who inspire and nurture each child's unique potential."
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000); // chnage slide every 3 seconds 

        return () => clearInterval(interval);
    }, [slides.length]);


    // email function
    const handleEmail = () => {

        const student = document.querySelector('[name="student"]').value.trim();
        const phone = document.querySelector('[name="phone"]').value.trim();
        const email = document.querySelector('[name="email"]').value.trim();
        const message = document.querySelector('[name="message"]').value.trim();

        //name
        if (student.length > 30) {
            alert("Student name should not exceed 30 characters");
            return;
        }

        // Phone
        const phoneRegex = /^[0-9]{10}$/;

        if (!phoneRegex.test(phone)) {
            alert("Phone number must be exactly 10 digits");
            return;
        }

        //Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address");
            return;
        }


        if (!student || !phone || !email) {
            alert("Please fill all required fields");
            return;
        }

        const subject = "New Admission Enquiry";

        const body = `
Student Name: ${student}
Phone Number: ${phone}
Parent Email: ${email}
Message: ${message}
    `;

        const mailLink = `mailto:idealpublic2025@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // ⭐ Most compatible trigger
        const tempLink = document.createElement("a");
        tempLink.href = mailLink;
        tempLink.click();
    };


    return (
        <>
            <section className='relative h-screen w-full overflow-hidden'>

                {/* Background Image */}
                <img
                    key={slides[currentIndex].img}
                    src={slides[currentIndex].img}
                    alt=""
                    className='absolute inset-0 h-full w-full object-cover animate-imageFade'
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Hero Content */}
                <div className='relative z-10 h-full flex items-center'>
                    <div className='max-w-7xl mx-auto px-6 w-full'>
                        <div className='max-w-2xl text-white'>

                            <h1
                                key={slides[currentIndex].title}
                                className='hero-title text-xl md:text-8xl leading-tight animate-heroTitle'
                            >
                                {slides[currentIndex].title}
                            </h1>

                            <p
                                key={slides[currentIndex].desc}
                                className='hero-desc mt-5 text-lg md:text-xl text-gray-200 animate-heroDesc'
                            >
                                {slides[currentIndex].desc}
                            </p>

                            <div className='mt-10 animate-heroBtn'>
                                <button className='hero-btn'>
                                    Discovery School
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* About section */}
            <section className='relative py-32 bg-white flex items-center justify-center overflow-hidden px-6'>

                {/* Floating Letters */}
                <div className='absolute left-[10%] bottom-[20%] text-[120px] font-extrabold text-yellow-400 rotate-[-25deg] pointer-events-none'>
                    A
                </div>

                <div className='absolute right-[12%] top-[18%] text-[120px] font-extrabold text-blue-500 rotate-[15deg] pointer-events-none'>
                    B
                </div>

                <div className='absolute right-[20%] bottom-[10%] text-[120px] font-extrabold text-red-500 rotate-[10deg] pointer-events-none'>
                    C
                </div>

                <div className='absolute right-[18%] top-[28%] text-3xl pointer-events-none'>
                    ⭐
                </div>


                {/* Center Content */}
                <div className='relative z-10 text-center max-w-4xl mx-auto'>

                    <button className='bg-pink-500 text-white px-6 py-2 rounded-full text-lg shadow-md mb-8 hover:scale-105 transition-transform duration-300'>
                        About Convent
                    </button>

                    <h1 className='font-kid text-[50px] leading-tight font-extrabold text-[#0b155a]'>
                        A loving and inspiring <br />
                        kindergarten where every <br />
                        child grows, learns, and <br />
                        shines, building confidence <br />
                        and lifelong friendships!
                    </h1>

                </div>
            </section>


            {/* Mission Vision */}
            <section className='px-6 py-20 bg-[#faf7f2]'>

                <div className='max-w-7xl mx-auto bg-[#020c6f] rounded-[32px] px-10 py-16 relative'>

                    {/* Dotted Border */}
                    <div className='absolute inset-4 border border-dashed border-white/30 rounded-[24px]'>
                    </div>

                    <div className='relative grid grid-cols-1 md:grid-cols-3 items-center gap-10 text-white'>
                        {/* Mission */}
                        <div className='text-center px-6'>
                            <h2 className='font-kid text-3xl font-bold mb-6'>
                                Our Mission
                            </h2>
                            <p className='text-white/80 leading-relaxed'>
                                We strive to create a nurturing and stimulating environment
                                where young children can develop a love for learning, build
                                foundational skills, and foster creativity, curiosity, and
                                kindness.
                            </p>
                        </div>

                        {/* Center Sun */}
                        <div className='flex justify-center items-center relative'>

                            <div className="sun-animate relative w-16 h-16 z-10 flex items-center justify-center">

                                {/* Rays */}
                                <span className="absolute w-full h-full rounded-full border-4 border-yellow-300 opacity-70"></span>
                                {/* Sun body */}
                                <div className="w-10 h-10 bg-yellow-400 rounded-full shadow-lg"></div>
                            </div>
                        </div>
                        {/* Vision */}
                        <div className='text-center px-6'>
                            <h2 className='font-kid text-3xl font-bold mb-6'>
                                Our Vision
                            </h2>
                            <p className='text-white/80 leading-relaxed'>
                                To be a leading kindergarten that inspires young minds through
                                innovative and inclusive education, ensuring every child
                                receives the support they need to thrive academically,
                                socially, and emotionally.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 relative overflow-hidden mt-4 bg-[#fffafc]">

                {/* 🌈 Animated background blobs */}
                <div className="absolute -left-40 top-20 w-[380px] h-[380px] bg-pink-200/40 rounded-full blur-3xl animate-blob" />
                <div className="absolute -right-40 top-40 w-[420px] h-[420px] bg-blue-200/40 rounded-full blur-3xl animate-blob animation-delay-2000" />
                <div className="absolute left-1/2 bottom-0 w-[360px] h-[360px] bg-yellow-200/40 rounded-full blur-3xl animate-blob animation-delay-4000" />

                {/* ⭐ Floating icons */}
                <span className="absolute left-16 top-24 text-3xl animate-floatSlow">⭐</span>
                <span className="absolute right-24 top-32 text-4xl animate-floatSlow delay-200">🌈</span>
                <span className="absolute left-1/3 bottom-24 text-3xl animate-floatSlow delay-400">✨</span>

                <div className="max-w-5xl mx-auto text-center px-6 relative z-10">

                    {/* pill */}
                    <span className="inline-block bg-pink-500 text-white px-6 py-2 rounded-full text-sm mb-6 shadow-md animate-bounceSlow">
                        Our Core Value
                    </span>

                    {/* Heading */}
                    <h2 className="font-kid text-5xl md:text-6xl font-extrabold text-[#0b155a] mb-6">
                        Why Choose Us?
                    </h2>

                    {/* Desc */}
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        We provide a safe, nurturing, and stimulating environment <br />
                        with quality education, caring teachers, good values and <br />
                        affordable fees.
                    </p>

                    {/* 🐝 Bee animation */}
                    <div className="relative mt-4 flex justify-center">
                        <svg width="450" height="120" viewBox="0 0 450 120" fill="none">
                            <path
                                d="M10 50 C 120 -30, 260 130, 420 50"
                                stroke="#000"
                                strokeDasharray="4 6"
                                strokeWidth="2"
                            />
                        </svg>

                       
                    </div>
                </div>

                {/* 🎴 Cards */}
                <div className="relative z-10 mt-2">
                    <WhyChooseCards />
                </div>
            </section>


            {/* Program Card Section */}
            <section className="relative mt-[-10px] py-28 overflow-hidden bg-[#fffdf8]">

                {/* 🎨 Background blobs */}
                <div className="absolute -left-32 top-24 w-[360px] h-[360px] bg-pink-200/40 rounded-full blur-3xl animate-blob" />
                <div className="absolute -right-40 top-32 w-[420px] h-[420px] bg-blue-200/40 rounded-full blur-3xl animate-blob animation-delay-2000" />
                <div className="absolute left-1/2 bottom-0 w-[380px] h-[380px] bg-yellow-200/40 rounded-full blur-3xl animate-blob animation-delay-4000" />

                {/* ⭐ Floating decorative icons */}
                <span className="absolute left-16 top-32 text-3xl animate-floatSlow">⭐</span>
                <span className="absolute right-24 top-20 text-4xl animate-floatSlow delay-200">🎈</span>
                <span className="absolute left-1/3 bottom-24 text-3xl animate-floatSlow delay-400">✨</span>
                <span className="absolute right-1/4 bottom-16 text-4xl animate-floatSlow delay-600">🧸</span>

                {/* Cards */}
                <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-12 relative z-10">

                    <div className="card-float card-hover">
                        <ProgramCard
                            image={playgroup}
                            title="Play Group"
                            age="(2.5 to 3.5)"
                        />
                    </div>

                    <div className="card-float card-hover" style={{ animationDelay: "0.4s" }}>
                        <ProgramCard
                            image={nursery}
                            title="Nursery"
                            age="(3 to 4)"
                        />
                    </div>

                    <div className="card-float card-hover" style={{ animationDelay: "0.8s" }}>
                        <ProgramCard
                            image={kg1}
                            title="KG-I"
                            age="(4 to 5)"
                        />
                    </div>

                    <div className="card-float card-hover" style={{ animationDelay: "1.2s" }}>
                        <ProgramCard
                            image={kg2}
                            title="KG-II"
                            age="(5 to 6)"
                        />
                    </div>

                </div>
            </section>

            {/* Admission Form  */}
            <section className="bg-[#020c6f] py-24 px-6 relative overflow-hidden -mb-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 text-white">

                    {/* LEFT CONTENT */}
                    <div>
                        <h2 className="font-kid text-5xl leading-tight mb-6">
                            Give Your Child <br />
                            the Perfect Start, <br />
                            Enroll Today!
                        </h2>

                        <p className="text-white/80 max-w-md mb-10">
                            We help children stay curious, feel confident, and enjoy <br />
                            learning from the very first day.
                        </p>

                        {/* CONTACT CARD */}
                        <div className="bg-pink-500 rounded-3xl p-6 max-w-md shadow-xl hover:-translate-y-2 transition-all duration-300">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-white text-pink-500 w-10 h-10 rounded-full flex items-center justify-center">
                                    📍
                                </div>
                                <p className="text-sm">
                                    Bhim Nagar, Isasani Road, Near <br />
                                    Barewar Bartan Godawn, Nagpur
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-white text-pink-500 w-10 h-10 rounded-full flex items-center justify-center">
                                    🎧
                                </div>
                                <p className="text-sm">
                                    idealpublic2025@gmail.com <br />
                                    9145697041 |  9067086674
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT FORM */}
                    <div className="relative">
                        <form
                            className="space-y-6"
                        >

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input
                                    name='student'
                                    maxLength={30}
                                    pattern="[A-Za-z ]+"
                                    title="Only letters allowed"
                                    className="bg-[#1f2b7a] rounded-full px-6 py-4 focus:ring-2 focus:ring-yellow-400 outline-none"
                                    placeholder="Full name of student*"
                                    required
                                />
                                <input
                                    name='phone'
                                    maxLength={10}
                                    pattern="[0-9]{10}"
                                    title="Enter 10 digit phone number"
                                    className="bg-[#1f2b7a] rounded-full px-6 py-4 focus:ring-2 focus:ring-yellow-400 outline-none"
                                    placeholder="Phone number*"
                                    required
                                />
                            </div>

                            <input
                                name='email'
                                type='email'
                                className="bg-[#1f2b7a] rounded-full px-6 py-4 w-full focus:ring-2 focus:ring-yellow-400 outline-none"
                                placeholder="Email address*"
                                required
                            />

                            <textarea
                                name='message'
                                rows="5"
                                className="bg-[#1f2b7a] rounded-3xl px-6 py-4 w-full focus:ring-2 focus:ring-yellow-400 outline-none"
                                placeholder="Information for parents of students"
                            />

                            <button
                                type="button"
                                onClick={handleEmail}
                                className="btn-pulse bg-yellow-400 text-black font-bold px-10 py-4 rounded-full hover:scale-110 transition-all"
                            >
                                Start the Journey Today!
                            </button>
                        </form>



                        {/* FLOATING KIDS */}
                        <div className="absolute -right-10 bottom-0 float-slow text-7xl">
                            🧒✏️
                        </div>

                        {/* STARS */}
                        <div className="absolute right-24 bottom-40 text-yellow-300 text-xl star">★</div>
                        <div className="absolute right-6 bottom-24 text-yellow-300 text-lg star">★</div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default HomePage
