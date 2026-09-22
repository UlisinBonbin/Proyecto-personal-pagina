import { motion } from "framer-motion";
import MainLayout from "../../04-layouts/MainLayout";
import "./HomePage.css";
import PeluchesGrid from "../../03-organisms/PeluchesGrid";
import peluches, { peluchesSoon } from "../../../data/Peluches";
import CategorySection from "../../03-organisms/CategorySection";
import { useAuth } from "react-oidc-context";

const clientId = "1oncqn9ke80cbq41f3irnqtsk4";

const logoutUri = "http://localhost:5173";

const cognitoDomain =
    "https://us-east-1f7srefcco.auth.us-east-1.amazoncognito.com";

const destacados = peluches.slice(0, 9);
const proximamente = peluchesSoon.slice(0, 3);

export default function HomePage() {

    const auth = useAuth();

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
                        Peluchitos Bonbin es una tienda que acaba de surgir,
                        vendemos los mejores peluches relacionados al mundo
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
                                    ¡Hola, {auth.user?.profile.email}!
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

                    <h2>Nuestros peluchitos más vendidos C:</h2>

                    <PeluchesGrid peluches={destacados} />

                </div>

                <div className="category-peluches">

                    <h2>Explora nuestras categorías</h2>

                    <CategorySection />

                </div>

                <div className="peluches-proximamente">

                    <h2>Nuestros próximos peluches que llegarán</h2>

                    <PeluchesGrid peluches={proximamente} />

                </div>

            </motion.section>

        </MainLayout>
    );
}