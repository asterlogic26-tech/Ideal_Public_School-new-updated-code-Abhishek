
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'
import AboutPage from './pages/AboutPage'
import PrivacyPage from './pages/PrivacyPage'
import GalleryPage from './pages/GalleryPage'
import ContactUsPage from './pages/ContactUsPage'
import Program from './pages/ProgramPage'

const App = () => {
  return (
    <Routes>
      <Route element={ <Layout /> } >
         <Route index element={ < HomePage /> } />
         <Route path='/about' element={ < AboutPage /> }/>
         <Route path='/privacy' element={ <PrivacyPage/> } />
         <Route path='/gallery' element={ <GalleryPage/> } />
         <Route path='/contact-us' element={ <ContactUsPage/> } />
         <Route path='/program' element={ <Program/> } />
      </Route>
    </Routes>
  )
}

export default App