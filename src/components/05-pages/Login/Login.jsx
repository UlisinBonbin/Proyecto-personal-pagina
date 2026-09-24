import { motion } from 'framer-motion';
import MainLayout from '../../04-layouts/MainLayout';
import React, { useState } from 'react';
import Button from '../../01-atoms/Button';
import './Login.css'; 

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errores, setErrores] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones simplificadas
    const erroresActuales = {
      email: email.trim() === "" ? "Ingrese su correo." : "",
      password: password.trim() === "" ? "Ingrese su contraseña." : "",
    };

    const hayErrores = Object.values(erroresActuales).some(msg => msg !== "");

    if (hayErrores) {
      setErrores(erroresActuales);
      return;
    }

    // Si no hay errores
    setErrores({ email: "", password: "" });

    console.log('Email:', email);
    console.log('Password:', password);
    alert("Inicio de sesión exitoso!");
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
              placeholder="correo@gmail.com"
              className={errores.email ? "input-error" : ""}
            />
            {errores.email && <span className="error">{errores.email}</span>}
          </label>

          <label>
            Contraseña
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="micontraseña123"
              className={errores.password ? "input-error" : ""}
            />
            {errores.password && <span className="error">{errores.password}</span>}
          </label>

          <Button type="submit" className="login-button">
            Entrar
          </Button>
        </form>
      </motion.section>
    </MainLayout>
  );
}
