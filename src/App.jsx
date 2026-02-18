
import React, { Suspense, lazy } from 'react'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'

const AboutPage = lazy(() => import('./pages/AboutPage'))
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'))
const GalleryPage = lazy(() => import('./pages/GalleryPage'))
const ContactUsPage = lazy(() => import('./pages/ContactUsPage'))
const Program = lazy(() => import('./pages/ProgramPage'))

const App = () => {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-lg">Loading...</div>}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/program" element={<Program />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
