import { motion } from "framer-motion";
import { useState } from "react";
import { useAuth } from "react-oidc-context";

import MainLayout from "../../04-layouts/MainLayout";
import "./Login.css";

export default function Login() {
    const auth = useAuth();
    const [loginError, setLoginError] = useState("");

    const handleLogin = async () => {
        setLoginError("");

        try {
            await auth.signinRedirect();
        } catch (error) {
            console.error("Error al iniciar sesión:", error);

            setLoginError(
                error.message || "No se pudo iniciar sesión."
            );
        }
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
                <div className="login-form">
                    <h2>Iniciar sesión</h2>

                    <p>
                        Inicia sesión con tu cuenta de Peluchitos Bonbin.
                    </p>

                    {auth.isLoading && (
                        <p>Conectando con Cognito...</p>
                    )}

                    {auth.error && (
                        <p className="error">
                            Error de autenticación: {auth.error.message}
                        </p>
                    )}

                    {loginError && (
                        <p className="error">
                            {loginError}
                        </p>
                    )}

                    <button
                        type="button"
                        className="login-button"
                        onClick={handleLogin}
                        disabled={auth.isLoading}
                    >
                        Iniciar sesión con Cognito
                    </button>
                </div>
            </motion.section>
        </MainLayout>
    );
}