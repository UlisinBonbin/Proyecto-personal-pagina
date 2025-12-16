import React from 'react'
import Header from '../03-organisms/Header'
import Footer from '../03-organisms/Footer'

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer /> 
    </>
  )
}

export default MainLayout
