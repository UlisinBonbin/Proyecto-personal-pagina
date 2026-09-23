import { useEffect, useState } from "react";
import MainLayout from "../../04-layouts/MainLayout";
import { motion } from "framer-motion";
import "./Catalog.css";

const API_URL = import.meta.env.VITE_API_URL;

export default function Catalog() {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const cargarProductos = async () => {
            try {
                const response = await fetch(`${API_URL}/api/v1/productos`);

                if (!response.ok) {
                    throw new Error(`Error HTTP: ${response.status}`);
                }

                const data = await response.json();
                setProductos(data);
            } catch (error) {
                console.error(error);
                setError("No se pudieron cargar los productos.");
            } finally {
                setCargando(false);
            }
        };

        cargarProductos();
    }, []);

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

                    {cargando && <p>Cargando productos...</p>}

                    {error && <p>{error}</p>}

                    {!cargando && !error && (
                        <div className="products-grid">
                            {productos.map((producto) => (
                                <div
                                    className="product-card"
                                    key={producto.id}
                                >
                                    <img
                                        src={producto.imagenUrl}
                                        alt={producto.nombre}
                                    />

                                    <h2>{producto.nombre}</h2>

                                    <p>
                                        ${Number(producto.precio).toLocaleString("es-CL")}
                                    </p>

                                    <p>
                                        Stock: {producto.stock}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}

                    {!cargando && !error && productos.length === 0 && (
                        <p>No hay productos disponibles.</p>
                    )}
                </div>
            </motion.section>
        </MainLayout>
    );
}