import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/05-pages/HomePage.jsx'
import AboutPage from './components/05-pages/AboutUs.jsx'


function App() {

  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
    </Routes>
  )
}

export default App
