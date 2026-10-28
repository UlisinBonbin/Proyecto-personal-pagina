import { motion } from "framer-motion";
import MainLayout from "../../04-layouts/MainLayout";
import "./HomePage.css";
import { useAuth } from "react-oidc-context";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const clientId = import.meta.env.VITE_COGNITO_CLIENT_ID;

const logoutUri =
    import.meta.env.VITE_COGNITO_LOGOUT_URI ||
    window.location.origin;

const cognitoDomain = import.meta.env.VITE_COGNITO_DOMAIN;

const API_URL = import.meta.env.VITE_API_URL;

export default function HomePage() {
    const auth = useAuth();

    const [randomProducts, setRandomProducts] = useState([]);
    const [loadingProducts, setLoadingProducts] = useState(true);

    /*
     * Obtener grupos de Cognito
     */
    const grupos = auth.user?.profile?.["cognito:groups"] || [];

    const isAdmin = Array.isArray(grupos)
        ? grupos.includes("ADMINISTRADOR")
        : grupos === "ADMINISTRADOR";
    

    const isOperator = Array.isArray(grupos)
        ? grupos.includes("OPERADOR")
        : grupos === "OPERADOR";

    /*
     * Obtener información del usuario desde usuario-service
     */
    useEffect(() => {
        const cargarUsuario = async () => {
            if (!auth.isAuthenticated || !auth.user?.access_token) {
                return;
            }

            try {
                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}/api/v1/usuarios/me`,
                    {
                        headers: {
                            Authorization: `Bearer ${auth.user.access_token}`,
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error(
                        `Error HTTP: ${response.status}`
                    );
                }

                const data = await response.json();

                console.log("Usuario desde backend:", data);
            } catch (error) {
                console.error(
                    "Error obteniendo usuario:",
                    error
                );
            }
        };

        cargarUsuario();
    }, [auth.isAuthenticated, auth.user]);

    /*
     * Cargar productos destacados
     */
    useEffect(() => {
        const cargarProductosDestacados = async () => {
            try {
                const response = await fetch(
                    `${API_URL}/api/v1/productos`
                );

                if (!response.ok) {
                    throw new Error(
                        `Error HTTP: ${response.status}`
                    );
                }

                const data = await response.json();

                // Obtener los primeros 3 productos
                const firstThree = data.slice(0, 3);

                setRandomProducts(firstThree);
            } catch (error) {
                console.error(
                    "Error obteniendo productos:",
                    error
                );
            } finally {
                setLoadingProducts(false);
            }
        };

        cargarProductosDestacados();
    }, []);

    /*
     * Cerrar sesión
     */
    const signOutRedirect = async () => {
    await auth.removeUser();

    if (!clientId || !cognitoDomain) {
        console.error(
            "Falta configurar el dominio o el App Client de Cognito."
        );
        return;
    }

    const domain = cognitoDomain.replace(/\/$/, "");

    const logoutUrl =
        `${domain}/logout` +
        `?client_id=${encodeURIComponent(clientId)}` +
        `&logout_uri=${encodeURIComponent(logoutUri)}`;

    window.location.href = logoutUrl;
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

                <div className="auth-section">
                    {auth.isLoading && (
                        <p className="auth-message">
                            Cargando sesión...
                        </p>
                    )}

                    {auth.error && (
                        <p className="auth-message auth-error">
                            Error al iniciar sesión:{" "}
                            {auth.error.message}
                        </p>
                    )}

                    {auth.isAuthenticated && (
                        <div className="auth-user-info">
                            <p className="auth-greeting">
                                ¡Hola,{" "}
                                {auth.user?.profile?.email ||
                                    "usuario"}
                                !
                            </p>

                            <button
                                className="btn-logout"
                                onClick={signOutRedirect}
                            >
                                Cerrar sesión
                            </button>
                        </div>
                    )}
                </div>

                <div className="hero-content">

                    <h1>
                        Bienvenido a Peluchitos Bonbin
                    </h1>

                    <p>
                        Peluchitos Bonbin es una tienda que acaba de surgir.
                        Vendemos los mejores peluches relacionados al mundo
                        del anime, videojuegos, series y más.
                    </p>

                    <div className="featured-products">
                        <h2>Peluches destacados</h2>

                        {loadingProducts ? (
                            <p>Cargando productos...</p>
                        ) : randomProducts.length > 0 ? (
                            <>
                                <div className="featured-grid">
                                    {randomProducts.map((producto) => (
                                        <div
                                            className="featured-card"
                                            key={producto.id}
                                        >
                                            <img
                                                src={producto.imagenUrl}
                                                alt={producto.nombre}
                                            />
                                            <h3>{producto.nombre}</h3>
                                            <p>
                                                $
                                                {Number(
                                                    producto.precio
                                                ).toLocaleString(
                                                    "es-CL"
                                                )}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <Link to="/catalog">
                                    <button className="btn-view-more">
                                        Ver más
                                    </button>
                                </Link>
                            </>
                        ) : (
                            <p>No hay productos disponibles.</p>
                        )}
                    </div>

                </div>

            </motion.section>

        </MainLayout>
    );
}