import React, { useState } from "react";
import bgImage from "../assets/PlayGroup-Img1.png";
import leftImage from "../assets/study.png";
import Duck from "../assets/duck.png";
import bird from "../assets/Bird.png";

const ContactUs = () => {
  const [selectedClass, setSelectedClass] = useState("");


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
    <div className="overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-[#020c6f] w-full h-screen overflow-hidden">

        {/* Background Image */}
        <img
          src={bgImage}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-start px-6 md:px-20">
          <div className="max-w-2xl text-white">

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Every Conversation <br />
              <span className="text-yellow-400 drop-shadow-xl">
                Starts With Your Child
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-200">
              We're here to answer your questions and support your family’s journey with us.
            </p>

            <button className="mt-8 bg-yellow-400 hover:scale-105 transition px-8 py-3 rounded-full font-semibold text-black shadow-lg hover:shadow-[0_0_40px_rgba(250,204,21,0.8)]">
              Get In Touch
            </button>

          </div>
        </div>

        {/* Bottom Wave */}
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



      {/* ================= CONTACT SECTION ================= */}
      <section className="bg-[#020c6f] py-24 px-6 relative overflow-hidden">

        {/* Floating Glow */}
        <div className="absolute w-[400px] h-[400px] bg-pink-500/20 blur-[120px] rounded-full -top-20 -left-20"></div>
        <div className="absolute w-[400px] h-[400px] bg-yellow-400/20 blur-[120px] rounded-full -bottom-20 -right-20"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start relative z-10">

          {/* LEFT SIDE */}
          <div className="space-y-10 section-fade">

            <img
              src={leftImage}
              alt="kids"
              className="rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
            />

            <div className="bg-[#ec4899] text-white p-8 rounded-3xl shadow-xl hover:shadow-[0_0_40px_rgba(236,72,153,0.6)] transition">
              <h2 className="text-xl font-bold mb-4 text-center">
                School Address
              </h2>

              <p>📍 Bhim Nagar, Isasani Road, Nagpur</p>
              <p className="mt-3">⏰ School: 11:00 AM - 3:00 PM</p>
              <p className="mt-3">✉ idealpublic2025@gmail.com</p>
              <p className="mt-3">📞 91456 97041</p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="relative section-fade">

            <img
              src={bird}
              alt="bird"
              className="absolute -top-10 right-0 w-32 soft-float"
            />

            <form className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/20 shadow-2xl space-y-6">

              <h2 className="text-3xl font-bold text-white text-center">
                Send Us a Message
              </h2>

              <input
                name='student'
                maxLength={30}
                pattern="[A-Za-z ]+"
                title="Only letters allowed"
                className="premium-input bg-white rounded-2xl px-6 py-4 w-full outline-none"
                placeholder="Full name of student*"
                required
              />

              <input
                name='phone'
                maxLength={10}
                pattern="[0-9]{10}"
                title="Enter 10 digit phone number"
                className="premium-input bg-white rounded-2xl px-6 py-4 w-full outline-none"
                placeholder="Phone number*"
                required
              />

              <input
                name='email'
                type='email'
                className="premium-input bg-white rounded-full px-6 py-4 w-full outline-none"
                placeholder="Email address*"
                required
              />


              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="premium-input bg-white rounded-full px-6 py-4 w-full outline-none"
              >
                <option value="">Select Class</option>
                <option value="playgroup">Play Group</option>
                <option value="nursery">Nursery</option>
                <option value="kg1">KG-I</option>
                <option value="kg2">KG-II</option>
              </select>

              <textarea
                name='message'
                rows="5"
                className="premium-input bg-white rounded-2xl px-6 py-4 w-full outline-none"
                placeholder="Information for parents of students"
              />

              <button
                type="button"
                onClick={handleEmail}
                className="premium-btn w-full bg-yellow-400 text-black font-bold py-4 rounded-full"
              >
                Start the Journey Today!
              </button>

            </form>

            <img
              src={Duck}
              alt="duck"
              className="absolute bottom-0 left-0 w-24 soft-float"
            />
          </div>

        </div>
      </section>

      {/* ================= GOOGLE MAP ================= */}
       <div className="bg-[#020c6f] w-[100%] h-[500px] px-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.3449414221623!2d79.00018657387847!3d21.
          0988097853716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd49572813ed19d%3A0xdb1841d433fc73bb!2s
          Bhimnagar!5e0!3m2!1sen!2sin!4v1770698196276!5m2!1sen!2sin"
          className="w-full h-full p-5 rounded-4xl"
          loading="lazy"
          allowFullScreen={true}
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: 0 }}
          title="map"
        ></iframe>
      </div>

    </div>
  );
};

export default ContactUs;
