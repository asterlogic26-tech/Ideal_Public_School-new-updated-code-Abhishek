import React, { useEffect, useRef } from "react";
import play from "../assets/playgroup.png";
import nursery from "../assets/nursery.png";
import kg1 from "../assets/kg1.png";
import kg2 from "../assets/kg2.png";
import icon from "../assets/sun.png";
import animal from "../assets/lion.png";
import bird from "../assets/bee.png";
import SideImage from "../assets/img4-study.webp"

function Program() {
  const cards = [
    {
      img: play,
      title: "Play Group",
      content: [
        "Age: 2.5 - 3.5 years",
        "Activity-based learning",
        "Rhymes & Games",
        "Social Development",
      ],
    },
    {
      img: nursery,
      title: "Nursery",
      content: [
        "Age: 3 - 4 years",
        "Early Writing Skills",
        "Creative Activities",
        "Storytelling",
      ],
    },
    {
      img: kg1,
      title: "KG-I",
      content: [
        "Age: 4 - 5 years",
        "Phonics Learning",
        "Basic Numbers",
        "Confidence Building",
      ],
    },
    {
      img: kg2,
      title: "KG-II",
      content: [
        "Age: 5 - 6 years",
        "Reading & Writing",
        "Addition & Subtraction",
        "School Readiness",
      ],
    },
  ];

  //  skill 
  const sunRef = useRef(null);

  // 🌞 Parallax Sun Follow Mouse
  useEffect(() => {
    const moveSun = (e) => {
      const x = (window.innerWidth / 2 - e.clientX) / 30;
      const y = (window.innerHeight / 2 - e.clientY) / 30;
      if (sunRef.current) {
        sunRef.current.style.transform = `translate(${x}px, ${y}px) rotate(${Date.now() / 40}deg)`;
      }
    };
    window.addEventListener("mousemove", moveSun);
    return () => window.removeEventListener("mousemove", moveSun);
  }, []);

  return (
    <div className="overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="hero-premium relative text-white text-center py-32">

        <img src={animal} className="lion-premium" />
        <img src={bird} className="bee-premium" />

        <h1 className="hero-title">
          Discover Our Programs for <br />
          Every Stage of Growth
        </h1>

        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 150"
        >
          <path
            fill="#ffffff"
            d="M0,100 C300,150 900,50 1440,120 L1440,150 L0,150 Z"
          />
        </svg>
      </section>

      {/* ================= ABOUT / PHILOSOPHY SECTION ================= */}

      <section className="about-section relative overflow-hidden py-28 px-6">

        {/* Soft Background Shape */}
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-gray-100 rounded-full blur-2xl opacity-60"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

          {/* LEFT IMAGE */}
          <div className="flex justify-center md:justify-start">
            <img
              src={SideImage}  // 👈 yaha apni image lagana
              alt="Kids Learning"
              className="w-[400px] md:w-[500px] drop-shadow-xl hover:scale-105 transition duration-500"
            />
          </div>

          {/* RIGHT TEXT */}
          <div className="text-[#1e1b8b] space-y-6">

            <h2 className="text-3xl md:text-4xl font-bold leading-snug">
              A Ideal Convent, we believe learning should be joyful and developmentally appropriate.
            </h2>

            <p className="text-lg md:text-xl leading-relaxed text-gray-700">
              Our programs nurture each child’s growth — emotionally, socially,
              and intellectually — through a warm, play-based approach,
              strong teacher-family partnerships, and a caring environment
              where every child feels safe and supported.
            </p>

          </div>

        </div>

        {/* Bottom Green Curve */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 150"
        >
          <path
            fill="#6ee7b7"
            d="M0,120 C400,40 1000,200 1440,120 L1440,150 L0,150 Z"
          />
        </svg>

      </section>


      {/* ================= CARDS ================= */}
      <section className="relative bg-[#fdf9f4] py-32 px-6 overflow-hidden">

        {/* LEFT SIDE FLOATING ELEMENTS */}
        <div className="absolute left-0 top-40 w-72 h-72 bg-pink-200 rounded-full blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute left-10 bottom-20 text-7xl font-extrabold text-yellow-400 opacity-20 animate-float-letter">A</div>

        {/* RIGHT SIDE FLOATING ELEMENTS */}
        <div className="absolute right-0 bottom-40 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute right-10 top-20 text-7xl font-extrabold text-green-400 opacity-20 animate-float-letter">B</div>

        {/* Heading */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-extrabold text-[#1e2a78]">
            Smarty Programs
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Discover joyful learning experiences crafted for every age
          </p>
        </div>

        {/* 2x2 GRID */}
        <div className="grid md:grid-cols-2 gap-20 max-w-6xl mx-auto relative z-10">

          {cards.map((card, index) => (
            <div key={index} className="interactive-card-advanced">

              <div className="card-inner-advanced">

                {/* FRONT */}
                <div className="card-front-advanced">
                  <div className="shine"></div>

                  <img src={card.img} alt={card.title} className="card-image" />

                  <h3>{card.title}</h3>
                </div>

                {/* BACK */}
                <div className="card-back-advanced">
                  <h3>{card.title} Highlights</h3>
                  <ul>
                    {card.content.map((item, i) => (
                      <li key={i}>✔ {item}</li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>
          ))}

        </div>
      </section>


      {/* ================= SKILLS ================= */}
      <section className="skills-ultra relative overflow-hidden py-40 px-6 text-white">

        {/* ⭐ Floating Stars */}
        <div className="star star1"></div>
        <div className="star star2"></div>
        <div className="star star3"></div>

        {/* ☁ Moving Clouds */}
        {/* <img src={cloud} className="cloud cloud1" alt="" />
        <img src={cloud} className="cloud cloud2" alt="" /> */}

        <div className="max-w-6xl mx-auto text-center relative z-10">

          <h2 className="skills-heading-ultra">
            Skills That Children Will Learn
          </h2>

          <div className="grid md:grid-cols-2 gap-32 mt-20">

            <ul className="skills-list-ultra">
              <li>Social Skills Development</li>
              <li>Fun Sensory Activities</li>
            </ul>

            <ul className="skills-list-ultra">
              <li>Focused Learning Moments</li>
              <li>Interactive Circle Time</li>
            </ul>

          </div>
        </div>

        {/* 🌞 Sun */}
        <img ref={sunRef} src={icon} className="sun-ultra" alt="sun" />

      </section>


    </div>
  );
}

export default Program;
