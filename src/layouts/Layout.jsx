import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import AdmissionAnimation from "../components/AdmissionAnimation"
import ScrollToTop from '../components/ScrollToTop'

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <AdmissionAnimation />
      
      <Navbar />

      <Outlet />

      <Footer />
    </>
  )
}

export default Layout