import { motion } from 'framer-motion';
import MainLayout from '../../04-layouts/MainLayout';
import React, { useState } from 'react';
import Button from '../../01-atoms/button/Button';
import './Register.css';

export default function Register() {
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [direccion, setDireccion] = useState("");
  const [email, setEmail] = useState("");
  const [clave1, setClave1] = useState("");
  const [clave2, setClave2] = useState("");
  const [errores, setErrores] = useState({
    nombre: "",
    apellidos: "",
    direccion: "",
    email: "",
    clave1: "",
    clave2: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Limpiar errores previos
    setErrores({
      nombre: "",
      apellidos: "",
      direccion: "",
      email: "",
      clave1: "",
      clave2: ""
    });

    let error = false;
    const newErrores = {};

    if (nombre.length < 3) {
      newErrores.nombre = "El nombre debe tener al menos 3 caracteres.";
      error = true;
    }

    if (apellidos.trim() === "") {
      newErrores.apellidos = "Ingrese sus apellidos.";
      error = true;
    }

    if (direccion.trim() === "") {
      newErrores.direccion = "Ingrese su dirección.";
      error = true;
    }

    if (!email.includes("@")) {
      newErrores.email = "Ingrese un correo válido.";
      error = true;
    }

    if (clave1.length < 8) {
      newErrores.clave1 = "La contraseña debe tener al menos 8 caracteres.";
      error = true;
    }

    if (clave1 !== clave2 || clave2 === "") {
      newErrores.clave2 = "Las contraseñas no coinciden.";
      error = true;
    }

    if (error) {
      setErrores(newErrores);
      return;
    }

    // Si no hay errores, crear usuario
    const nuevoUsuario = {
      nombre,
      apellido: apellidos,
      correo: email,
      contrasena: clave1,
      direccion
    };

    console.log("Nuevo usuario:", nuevoUsuario);
    alert("Cuenta creada exitosamente!");

    // Limpiar campos
    setNombre("");
    setApellidos("");
    setDireccion("");
    setEmail("");
    setClave1("");
    setClave2("");
    setErrores({
      nombre: "",
      apellidos: "",
      direccion: "",
      email: "",
      clave1: "",
      clave2: ""
    });
  };

  return (
    <MainLayout>
      <motion.section
        className="register-hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
      >
        <form onSubmit={handleSubmit} className="register-form">
          <h2>Crear Cuenta</h2>

          <label>
            Nombre
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Juan"
              className={errores.nombre ? "input-error" : ""}
            />
            {errores.nombre && <span className="error">{errores.nombre}</span>}
          </label>

          <label>
            Apellidos
            <input
              type="text"
              value={apellidos}
              onChange={(e) => setApellidos(e.target.value)}
              placeholder="Pérez Muñoz"
              className={errores.apellidos ? "input-error" : ""}
            />
            {errores.apellidos && <span className="error">{errores.apellidos}</span>}
          </label>

          <label>
            Dirección
            <input
              type="text"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              placeholder="Los Molles #25"
              className={errores.direccion ? "input-error" : ""}
            />
            {errores.direccion && <span className="error">{errores.direccion}</span>}
          </label>

          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="juanperez@gmail.com"
              className={errores.email ? "input-error" : ""}
            />
            {errores.email && <span className="error">{errores.email}</span>}
          </label>

          <label>
            Contraseña
            <input
              type="password"
              value={clave1}
              onChange={(e) => setClave1(e.target.value)}
              placeholder="Clave1234"
              className={errores.clave1 ? "input-error" : ""}
            />
            {errores.clave1 && <span className="error">{errores.clave1}</span>}
          </label>

          <label>
            Repetir contraseña
            <input
              type="password"
              value={clave2}
              onChange={(e) => setClave2(e.target.value)}
              placeholder="Clave1234"
              className={errores.clave2 ? "input-error" : ""}
            />
            {errores.clave2 && <span className="error">{errores.clave2}</span>}
          </label>

          <div className="actions">
            <button
              type="button"
              className="btn reset"
              onClick={() => {
                setNombre("");
                setApellidos("");
                setDireccion("");
                setEmail("");
                setClave1("");
                setClave2("");
                setErrores({
                  nombre: "",
                  apellidos: "",
                  direccion: "",
                  email: "",
                  clave1: "",
                  clave2: ""
                });
              }}
            >
              Limpiar campos
            </button>
            <Button type="submit" className="register-button">
              Crear Cuenta
            </Button>
          </div>
        </form>
      </motion.section>
    </MainLayout>
  );
}
