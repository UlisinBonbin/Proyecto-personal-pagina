import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/05-pages/Home/HomePage'
import AboutPage from './components/05-pages/About/AboutUs'


function App() {

  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
    </Routes>
  )
}

export default App
