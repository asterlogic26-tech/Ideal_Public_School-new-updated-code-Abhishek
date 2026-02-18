import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import AdmissionAnimation from "../components/AdmissionAnimation"
import ScrollToTop from '../components/ScrollToTop'
import leftImage from '../assets/study.png'

const Layout = () => {
  const [showAdmissionModal, setShowAdmissionModal] = useState(false)

  const closeModal = () => {
    setShowAdmissionModal(false)
  }

  const [student, setStudent] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [selectedClass, setSelectedClass] = useState('')
  const [message, setMessage] = useState('')

  const handleAdmissionEmail = () => {
    const trimmedStudent = student.trim()
    const trimmedPhone = phone.trim()
    const trimmedEmail = email.trim()
    const trimmedMessage = message.trim()

    if (trimmedStudent.length > 30) {
      alert('Student name should not exceed 30 characters')
      return
    }

    const phoneRegex = /^[0-9]{10}$/

    if (!phoneRegex.test(trimmedPhone)) {
      alert('Phone number must be exactly 10 digits')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(trimmedEmail)) {
      alert('Please enter a valid email address')
      return
    }

    if (!trimmedStudent || !trimmedPhone || !trimmedEmail) {
      alert('Please fill all required fields')
      return
    }

    const subject = 'New Admission Enquiry'

    const body = `
Student Name: ${trimmedStudent}
Phone Number: ${trimmedPhone}
Parent Email: ${trimmedEmail}
Selected Class: ${selectedClass || 'Not selected'}
Message: ${trimmedMessage}
    `

    const mailLink = `mailto:idealpublic2025@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    const tempLink = document.createElement('a')
    tempLink.href = mailLink
    tempLink.click()

    closeModal()
  }

  return (
    <>
      <ScrollToTop />
      <AdmissionAnimation />
      
      <Navbar onOpenAdmission={() => setShowAdmissionModal(true)} />

      <Outlet />

      <Footer />

      {showAdmissionModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60">
          <div className="bg-[#020c6f] max-w-5xl w-full mx-4 rounded-3xl p-6 md:p-10 relative">
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-2xl leading-none px-2 rounded-full hover:bg-white/20"
            >
              ×
            </button>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-6">
                <img
                  src={leftImage}
                  alt="kids learning"
                  className="rounded-3xl shadow-2xl w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="bg-pink-500 text-white p-4 rounded-2xl shadow-lg text-sm">
                  <p>Bhim Nagar, Isasani Road, Near Barewar Bartan Godawn, Nagpur</p>
                  <p className="mt-2">School Time: 11:00 AM - 3:00 PM</p>
                  <p className="mt-1">✉ idealpublic2025@gmail.com</p>
                  <p className="mt-1">📞 91456 97041</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl p-6 md:p-8 rounded-3xl border border-white/20 shadow-2xl space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
                  Admission Details
                </h2>

                <input
                  value={student}
                  onChange={(e) => setStudent(e.target.value)}
                  maxLength={30}
                  pattern="[A-Za-z ]+"
                  title="Only letters allowed"
                  className="premium-input bg-white rounded-2xl px-6 py-3 w-full outline-none"
                  placeholder="Full name of student*"
                  required
                />

                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  maxLength={10}
                  pattern="[0-9]{10}"
                  title="Enter 10 digit phone number"
                  className="premium-input bg-white rounded-2xl px-6 py-3 w-full outline-none"
                  placeholder="Phone number*"
                  required
                />

                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="premium-input bg-white rounded-full px-6 py-3 w-full outline-none"
                  placeholder="Email address*"
                  required
                />

                <select
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                  className="premium-input bg-white rounded-full px-6 py-3 w-full outline-none"
                >
                  <option value="">Select Class</option>
                  <option value="playgroup">Play Group</option>
                  <option value="nursery">Nursery</option>
                  <option value="kg1">KG-I</option>
                  <option value="kg2">KG-II</option>
                </select>

                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="4"
                  className="premium-input bg-white rounded-2xl px-6 py-3 w-full outline-none"
                  placeholder="Information for parents of students"
                />

                <button
                  type="button"
                  onClick={handleAdmissionEmail}
                  className="premium-btn w-full bg-yellow-400 text-black font-bold py-3 md:py-4 rounded-full"
                >
                  Start the Journey Today!
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Layout
