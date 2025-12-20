import { motion } from 'framer-motion';
import MainLayout from '../../04-layouts/MainLayout';
import React, { useState } from 'react';
import Button from '../../01-atoms/button/Button';
import './Login.css'; // Importa tu CSS

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <MainLayout>
      <motion.section
        className="login-hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
      >
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Iniciar Sesión</h2>

          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label>
            Contraseña
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          <Button type="submit" className="login-button">
            Entrar
          </Button>
        </form>
      </motion.section>
    </MainLayout>
  );
}
