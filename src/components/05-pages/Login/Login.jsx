import React from 'react'
import { motion } from 'framer-motion'
import MainLayout from '../../04-layouts/MainLayout'



export default function Login() {
  return (
    <MainLayout>
      <motion.section
        className="home-hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
      >
      </motion.section>
    </MainLayout>
  )
}
