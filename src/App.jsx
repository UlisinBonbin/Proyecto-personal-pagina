import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import HomePage from './components/05-pages/Home/HomePage'
import AboutPage from './components/05-pages/About/AboutUs'
import Catalog from './components/05-pages/Catalog/Catalog'
import Contact from './components/05-pages/Contact/Contact'
import Login from './components/05-pages/Login/Login'
import Register from './components/05-pages/Register/Register'
import Faq from './components/05-pages/Faq/Faq'
import Car from './components/05-pages/Cart/Cart'
import ControlPanel from './components/05-pages/ControlPanel/ControlPanel'


import ScrollToTop from './components/ScrollToTop'



function App() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/cart' element={<Car />} />
          <Route path='/control-panel' element={<ControlPanel />} />
          </Routes>
        </AnimatePresence>
    </>
  )
}

export default App
