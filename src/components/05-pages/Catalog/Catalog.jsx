import { useEffect, useState } from "react";
import MainLayout from "../../04-layouts/MainLayout";
import { motion } from "framer-motion";
import { useAuth } from "react-oidc-context";
import { addProductToCart } from "../../../services/pedidoService";
import "./Catalog.css";

const API_URL = import.meta.env.VITE_API_URL;

export default function Catalog() {
    const auth = useAuth();

    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState("");
    const [agregando, setAgregando] = useState(null);

    useEffect(() => {
        const cargarProductos = async () => {
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

                setProductos(data);
            } catch (error) {
                console.error(error);
                setError(
                    "No se pudieron cargar los productos."
                );
            } finally {
                setCargando(false);
            }
        };

        cargarProductos();
    }, []);

    const agregarAlCarrito = async (producto) => {
        if (!auth.isAuthenticated) {
            await auth.signinRedirect();
            return;
        }

        try {
            setAgregando(producto.id);
            setError("");

            await addProductToCart(
                auth.user.access_token,
                producto.id,
                1
            );

            alert(
                `${producto.nombre} añadido al carrito 🧸`
            );
        } catch (error) {
            console.error(error);
            setError(
                "No se pudo agregar el producto al carrito."
            );
        } finally {
            setAgregando(null);
        }
    };

    return (
        <MainLayout>
            <motion.section
                className="catalog-hero"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
            >
                <div className="catalog-content">
                    <h1>Nuestros productos</h1>

                    {cargando && (
                        <p>Cargando productos...</p>
                    )}

                    {error && (
                        <p className="catalog-error">
                            {error}
                        </p>
                    )}

                    {!cargando &&
                        !error && (
                            <div className="products-grid">
                                {productos.map(
                                    (producto) => (
                                        <div
                                            className="product-card"
                                            key={producto.id}
                                        >
                                            <img
                                                src={
                                                    producto.imagenUrl
                                                }
                                                alt={
                                                    producto.nombre
                                                }
                                            />

                                            <h2>
                                                {
                                                    producto.nombre
                                                }
                                            </h2>

                                            <p>
                                                $
                                                {Number(
                                                    producto.precio
                                                ).toLocaleString(
                                                    "es-CL"
                                                )}
                                            </p>

                                            <p>
                                                Stock:{" "}
                                                {
                                                    producto.stock
                                                }
                                            </p>

                                            <button
                                                onClick={() =>
                                                    agregarAlCarrito(
                                                        producto
                                                    )
                                                }
                                                disabled={
                                                    producto.stock <=
                                                        0 ||
                                                    agregando ===
                                                        producto.id
                                                }
                                            >
                                                {agregando ===
                                                producto.id
                                                    ? "Agregando..."
                                                    : producto.stock <=
                                                        0
                                                    ? "Sin stock"
                                                    : "Añadir al carrito"}
                                            </button>
                                        </div>
                                    )
                                )}
                            </div>
                        )}

                    {!cargando &&
                        !error &&
                        productos.length === 0 && (
                            <p>
                                No hay productos disponibles.
                            </p>
                        )}
                </div>
            </motion.section>
        </MainLayout>
    );
}