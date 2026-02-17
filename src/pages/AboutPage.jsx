import React from 'react'
import LeftImg from "../assets/LeftSide-Img1.webp"
import RightImg from "../assets/RightSide-Img1.webp"
import Leaf from '../components/Leaf'
import ImgOne from "../assets/AboutImg1.webp"

const AboutPage = () => {

    const features = [
        {
            title: "Qualified and Experienced Teachers",
            desc: "Well-trained teachers who care for every child",
            icon: "👩‍🏫",
        },
        {
            title: "Safe & Child-Friendly Campus",
            desc: "Secure environment with caring supervision",
            icon: "🛡️",
        },
        {
            title: "Activity-Based Learning",
            desc: "Learning through play, activities, and creativity",
            icon: "🎨",
        },
        {
            title: "Focus on English, Hindi & Mathematics",
            desc: "Strong basics for future education",
            icon: "📚",
        },
        {
            title: "Moral Values & Good Habits",
            desc: "Teaching discipline, respect, and kindness",
            icon: "🌱",
        },
        {
            title: "Regular Tests & Parent Meetings",
            desc: "Continuous evaluation and parent interaction",
            icon: "📝",
        },
        {
            title: "Affordable Fee Structure",
            desc: "Quality education at reasonable fees",
            icon: "💸",
            center: true,
        },
    ]


    return (
        <>
            <section className='relative bg-[#020c6f] text-white py-20 md:py-28 overflow-hidden'>

                {/* Left Kid Section */}
                <div className='absolute left-8 bottom-24 float-slow hidden md:block'>
                    <img
                        src={LeftImg}
                        alt="Kid with balloons"
                        className='w-48'
                    />
                </div>

                {/* Right kid Section */}
                <div className='absolute right-8 bottom-24 float-slow hidden md:block'>
                    <img
                        src={RightImg}
                        alt="Kid with balloons"
                        className='w-48'
                    />
                </div>


                {/* Content */}
                <div className='max-w-5xl mx-auto text-center px-6 relative z-10 flex flex-col items-center'>

                    <h2 className="font-kid text-5xl font-extrabold md:text-6xl leading-tight text-[#9fd3ff] mb-8">
                        Inspiring Young Hearts <br />
                        and Minds Through <br />
                        Play, Learning, and <br />
                        Connection.
                    </h2>

                    <p className="text-white/80 max-w-3xl mx-auto text-lg leading-relaxed">
                        At our preschool, dedicated teachers lead with love, creativity,
                        and care—nurturing a joyful learning space where children grow
                        confidently each day. Through play and gentle guidance, our little
                        ones build character, curiosity, and skills for a bright future.
                    </p>

                </div>

                {/* Bottom Border */}
                <svg
                    className="absolute bottom-0 left-0 w-full"
                    viewBox="0 0 1440 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,40 C240,120 480,0 720,40 960,80 1200,20 1440,60 L1440,120 L0,120 Z"
                        fill="#ffffff"
                    />
                </svg>

            </section>

            {/* About Info Section */}
            <section className='relative bg-white py-24 overflow-hidden'>

                {/* Conetnt */}
                <div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center px-10 relative z-10'>
                    <div className='rounded-[40px] overflow-hidden shadow-xl'>
                        <img
                            src={ImgOne}
                            alt="School"
                            className='w-full h-full object-cover'
                        />
                    </div>

                    {/* Right Side */}
                    <div className=''>
                        <h2 className='font-kid text-4xl text-[#0b3c8f] mb-6'>
                            About Us
                        </h2>

                        <p className='text-gray-600 leading-relaxed text-lg'>
                            Ideal Public Convent School, Bhimnagar, Nagpur is a learning center focused on the overall development of children.
                            Our aim is to provide quality education along with good values, discipline, and confidence.We offer education from Play Group to Primary classes in a safe, caring, and friendly environment. Our experienced teachers help every child grow academically and morally for a bright future.
                        </p>
                    </div>
                </div>

                {/* Left Side Circle */}
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-200 rounded-tr-[80%] opacity-70 animate-floatSlow" />

                {/* Right side Circle */}
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-300 rounded-tl-[80%] opacity-70 animate-floatSlow delay-200" />

                {/* Curved Base */}
                <svg
                    className="absolute bottom-0 left-0 w-full"
                    viewBox="0 0 1440 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,40 C240,120 480,0 720,40 960,80 1200,120 1440,60 L1440,120 L0,120 Z"
                        fill="#faf7f2"
                    />
                </svg>
            </section>

            {/* Card Section */}
            <section className='relative bg-white pt-24 pb-40 overflow-hidden'>

                <div className="absolute left-[-120px] top-20 w-[380px] h-[380px] 
                  bg-green-200 rounded-full opacity-40 blob"></div>

                <div className="absolute right-[-140px] bottom-20 w-[420px] h-[420px] 
                  bg-green-300 rounded-full opacity-30 blob"></div>

                {/* TOP FLOWERS */}
                <div className="absolute top-24 left-1/4 text-4xl float-slow">🌼</div>
                <div className="absolute top-40 right-1/3 text-3xl float-slow">🌸</div>

                <div className='text-center mb-16 relative z-10'>
                    <h2 className='font-kid text-5xl text-[#0b3c8f] mb-4'>
                        Why Choose Our Convent
                    </h2>

                    <h4 className='max-w-3xl mx-auto text-gray-600 text-lg'>
                        Building a Strong Foundation for Young Learners
                    </h4>
                </div>

                {/* Caards */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-8 relative z-10">
                    {features.map((item, i) => (
                        <div
                            key={i}
                            className={`group relative overflow-hidden bg-[#f7ecff] rounded-[28px] p-8 text-center shadow-md transition-all duration-500 hover:-translate-y-5 hover:shadow-2xl hover:rotate-[0.5deg] animate-[float_6s_ease-in-out_infinite]
                             ${item.center ? "lg:col-span-3 mx-auto max-w-md scale-105 bg-[#fff1fb] border-2 border-pink-300 shadow-xl" : ""}`}
                        >
                            {/* gradient glow */}
                            <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-pink-200/40 via-purple-200/30 to-blue-200/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                            {/* tiny star */}
                            <span className="absolute top-4 right-5 text-xl opacity-30 group-hover:opacity-80 transition">
                                ⭐
                            </span>

                            {/* icon */}
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white flex items-center justify-center text-3xl shadow-md transition-all duration-500 group-hover:scale-125 group-hover:-rotate-6">
                                {item.icon}
                            </div>

                            {/* title */}
                            <h3 className="font-kid text-xl text-[#0b3c8f] mb-3 transition-all duration-300 group-hover:tracking-wide">
                                {item.title}
                            </h3>

                            {/* description */}
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Decorate section */}
                <div className="absolute left-0 top-1/3 w-40 h-40 bg-blue-100 rounded-full blur-2xl animate-floatSlow" />
                <div className="absolute right-0 bottom-24 w-48 h-48 bg-pink-100 rounded-full blur-2xl animate-floatSlow delay-200" />

            

            </section>
        </>
    )
}

export default AboutPage