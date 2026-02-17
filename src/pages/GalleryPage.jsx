import React, { useState } from "react";
import RightLeaf from "../assets/leaf green.webp";
import LeftLeaf from "../assets/yellow leaf.webp";
import { galleryData } from "../data/galleryData";
import bgimg from "../assets/backimg.png";
import boy1 from "../assets/boy1.png";
import girl from "../assets/baby1.png";
import { NavLink } from "react-router-dom";

const tabs = [
  { id: "facilities", label: "Happy Moments" },
  { id: "activities", label: "Daily Activities" },
  { id: "events", label: "Special Events & Celebrations" },
  { id: "smiles", label: "Smiles & Friendships" },
];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("facilities");

  return (
    <div>
      {/* 🌈 HERO SECTION */}
      <section
        className="hero-section relative mx-6 mt-8 text-center"
        style={{
          backgroundImage: `url(${bgimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>

        <img
          src={LeftLeaf}
          alt="leaf"
          className="leaf leaf-left leaf-motion will-change-transform"
        />
        <img
          src={RightLeaf}
          alt="leaf"
          className="leaf leaf-right leaf-motion will-change-transform"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <button className="gallery-btn mb-6">Our Gallery</button>

          <h1 className="text-4xl text-white md:text-6xl font-bold mb-6 leading-tight">
            Joyful Moments from Our <br /> School Days
          </h1>

          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            See how our little learners grow, play, and thrive in a loving and
            creative environment.
          </p>
        </div>

        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C240,100 480,20 720,40 960,70 1200,30 1440,60 L1440,120 L0,120 Z"
            fill="#ffffff"
          />
        </svg>
      </section>

      {/* 🖼️ GALLERY SECTION */}
      <section className="gallery-section floatslow relative overflow-hidden pt-14 pb-32 px-6">

        {/* Soft Background Glow Layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-pink-50 via-white to-yellow-50 opacity-40 -z-20"></div>

        {/* Your Existing Blobs (Opacity Balanced) */}
        <div className="absolute -left-20 top-20 w-72 h-56 bg-purple-200 rounded-[40%_60%_30%] blur-3xl opacity-50 -z-10 float-slow"></div>
        <div className="absolute right-0 top-40 w-72 h-56 bg-pink-200 rounded-[40%_60%_30%] blur-3xl opacity-40 -z-10 float-slower"></div>
        <div className="absolute left-1/3 bottom-10 w-72 h-56 bg-yellow-200 rounded-[40%_60%_30%] blur-3xl opacity-40 -z-10 float-medium"></div>

        {/* Heading Section */}
        <div className="relative z-10 flex justify-center items-center gap-10 mb-20 flex-wrap">

          <img
            src={boy1}
            alt="boy"
            className="w-64 float-slow pointer-events-none drop-shadow-lg"
          />

          <div className="text-center max-w-2xl">
            <h1 className="text-6xl font-bold text-pink-600 mb-6">
              Our Happy Gallery 🌈
            </h1>
            <p className="text-blue-900 font-semibold text-lg leading-relaxed">
              Step into our world of joyful learning, playful moments,
              and happy little hearts in action. 💕
            </p>
          </div>

          <img
            src={girl}
            alt="girl"
            className="w-64 float-slow scale-x-[-1] pointer-events-none drop-shadow-lg"
          />
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-4 rounded-full text-lg font-semibold 
        transition-all duration-300 ease-out
        ${activeTab === tab.id
                  ? "bg-[#f25c2a] text-white shadow-[0_8px_0_#d9480f] active-glow scale-105"
                  : "bg-white text-[#0b3c8f] border shadow-md hover:shadow-xl hover:-translate-y-1"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div
          key={activeTab}
          className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8"
        >
          {galleryData[activeTab]?.map((img, i) => (
            <div
              key={i}
              className="break-inside-avoid rounded-3xl overflow-hidden 
        shadow-lg bg-white
        transition-all duration-500 ease-out
        hover:-translate-y-3 hover:shadow-2xl group animate-stagger"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={img}
                  alt="gallery"
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-white/0 group-hover:bg-yellow-100/20 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

      </section>

    </div>
  );
};

export default Gallery;
