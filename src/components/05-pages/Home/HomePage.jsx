import { motion } from "framer-motion";
import MainLayout from "../../04-layouts/MainLayout";
import "./HomePage.css";
import { useAuth } from "react-oidc-context";
import { useEffect } from "react";

const clientId = "1oncqn9ke80cbq41f3irnqtsk4";

const logoutUri = "http://localhost:5173";

const cognitoDomain =
    "https://us-east-1f7srefcco.auth.us-east-1.amazoncognito.com";

export default function HomePage() {
    const auth = useAuth();


    useEffect(() => {
    const cargarUsuario = async () => {
        if (!auth.isAuthenticated || !auth.user?.access_token) {
            return;
        }

        const response = await fetch(
            `${import.meta.env.VITE_API_URL}/api/v1/usuarios/me`,
            {
                headers: {
                    Authorization: `Bearer ${auth.user.access_token}`,
                },
            }
        );

        const data = await response.json();

        console.log("Usuario desde backend:", data);
    };

    cargarUsuario();
}, [auth.isAuthenticated, auth.user]);




    const signOutRedirect = async () => {
        await auth.removeUser();

        window.location.href =
            `${cognitoDomain}/logout` +
            `?client_id=${clientId}` +
            `&logout_uri=${encodeURIComponent(logoutUri)}`;
    };

    return (
        <MainLayout>
            <motion.section
                className="home-hero"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
            >
                <div className="hero-content">

                    <h1>Bienvenido a Peluchitos Bonbin</h1>

                    <p>
                        Peluchitos Bonbin es una tienda que acaba de surgir.
                        Vendemos los mejores peluches relacionados al mundo
                        del anime, videojuegos, series y más.
                    </p>

                    <div
                        className="auth-container"
                        style={{
                            margin: "2rem 0",
                            padding: "1rem",
                            background: "rgba(255,255,255,0.1)",
                            borderRadius: "10px"
                        }}
                    >

                        {auth.isLoading && (
                            <p>Cargando sesión...</p>
                        )}

                        {auth.error && (
                            <p>
                                Error al iniciar sesión: {auth.error.message}
                            </p>
                        )}

                        {!auth.isLoading && !auth.isAuthenticated && (
                            <div>
                                <p>
                                    ¿Aún no tienes cuenta o no has iniciado sesión?
                                </p>

                                <button
                                    className="btn-login"
                                    onClick={() => auth.signinRedirect()}
                                >
                                    Iniciar sesión
                                </button>
                            </div>
                        )}

                        {auth.isAuthenticated && (
                            <div>
                                <h2>
                                    ¡Hola, {auth.user?.profile?.email}!
                                </h2>

                                <button
                                    className="btn-logout"
                                    onClick={signOutRedirect}
                                >
                                    Cerrar sesión
                                </button>
                            </div>
                        )}

                    </div>

                </div>
            </motion.section>
        </MainLayout>
    );
}