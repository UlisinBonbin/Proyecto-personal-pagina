import React, { useEffect, useState } from "react";
import MainLayout from "../../04-layouts/MainLayout";
import { motion } from "framer-motion";
import { useAuth } from "react-oidc-context";
import {
    getCart,
    updateCartProduct,
    removeCartProduct,
    buyCart,
} from "../../../services/pedidoService";
import "./Cart.css";
import Button from "../../01-atoms/Button";

export default function Cart() {
    const auth = useAuth();

    const [cart, setCart] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [procesando, setProcesando] = useState(false);
    const [error, setError] = useState("");

    const cargarCarrito = async () => {
        if (!auth.isAuthenticated || !auth.user?.access_token) {
            setCargando(false);
            return;
        }

        try {
            setError("");

            const data = await getCart(
                auth.user.access_token
            );

            setCart(data);
        } catch (error) {
            console.error(error);
            setError("No se pudo cargar el carrito.");
        } finally {
            setCargando(false);
        }
    };

    useEffect(() => {
        cargarCarrito();
    }, [auth.isAuthenticated, auth.user]);

    const cambiarCantidad = async (
        productoId,
        nuevaCantidad
    ) => {
        if (nuevaCantidad <= 0) {
            return;
        }

        try {
            setProcesando(true);

            const actualizado =
                await updateCartProduct(
                    auth.user.access_token,
                    productoId,
                    nuevaCantidad
                );

            setCart(actualizado);
        } catch (error) {
            console.error(error);
            setError("No se pudo actualizar la cantidad.");
        } finally {
            setProcesando(false);
        }
    };

    const eliminarProducto = async (productoId) => {
        try {
            setProcesando(true);

            const actualizado =
                await removeCartProduct(
                    auth.user.access_token,
                    productoId
                );

            setCart(actualizado);
        } catch (error) {
            console.error(error);
            setError("No se pudo eliminar el producto.");
        } finally {
            setProcesando(false);
        }
    };

    const comprar = async () => {
        if (!cart?.items?.length) {
            return;
        }

        try {
            setProcesando(true);
            setError("");

            const pedidoPagado =
                await buyCart(
                    auth.user.access_token
                );

            console.log(
                "Compra realizada:",
                pedidoPagado
            );

            // Después de comprar, pedimos nuevamente
            // el carrito. El backend creará uno nuevo
            // porque el anterior ahora está PAGADO.
            const nuevoCarrito =
                await getCart(
                    auth.user.access_token
                );

            setCart(nuevoCarrito);

            alert("Compra realizada correctamente.");
        } catch (error) {
            console.error(error);
            setError(
                "No se pudo realizar la compra."
            );
        } finally {
            setProcesando(false);
        }
    };

    const total = cart?.items?.reduce(
        (total, item) =>
            total +
            Number(item.precioUnitario) *
                item.cantidad,
        0
    ) || 0;

    if (!auth.isAuthenticated) {
        return (
            <MainLayout>
                <motion.section
                    className="cart-hero"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <div className="cart-content">
                        <h1>Tu carrito</h1>

                        <p>
                            Debes iniciar sesión para
                            ver tu carrito.
                        </p>

                        <Button
                            variant="secondary"
                            onClick={() =>
                                auth.signinRedirect()
                            }
                        >
                            Iniciar sesión
                        </Button>
                    </div>
                </motion.section>
            </MainLayout>
        );
    }

    if (cargando) {
        return (
            <MainLayout>
                <motion.section className="cart-hero">
                    <div className="cart-content">
                        <h1>Tu carrito</h1>
                        <p>
                            Cargando carrito...
                        </p>
                    </div>
                </motion.section>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <motion.section
                className="cart-hero"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
            >
                <div className="cart-content">
                    <h1>Tu carrito</h1>

                    {error && (
                        <p className="cart-error">
                            {error}
                        </p>
                    )}

                    {!cart?.items?.length ? (
                        <p>
                            Tu carrito está vacío 🧸
                        </p>
                    ) : (
                        <>
                            <div className="cart-items">
                                {cart.items.map(
                                    (item) => (
                                        <div
                                            key={item.id}
                                            className="cart-item"
                                        >
                                            <div>
                                                <h3>
                                                    {
                                                        item.nombreProducto
                                                    }
                                                </h3>

                                                <p>
                                                    Precio:
                                                    $
                                                    {Number(
                                                        item.precioUnitario
                                                    ).toLocaleString(
                                                        "es-CL"
                                                    )}
                                                </p>

                                                <div className="cart-quantity">
                                                    <button
                                                        onClick={() =>
                                                            cambiarCantidad(
                                                                item.productoId,
                                                                item.cantidad -
                                                                    1
                                                            )
                                                        }
                                                        disabled={
                                                            procesando ||
                                                            item.cantidad <=
                                                                1
                                                        }
                                                    >
                                                        -
                                                    </button>

                                                    <span>
                                                        {
                                                            item.cantidad
                                                        }
                                                    </span>

                                                    <button
                                                        onClick={() =>
                                                            cambiarCantidad(
                                                                item.productoId,
                                                                item.cantidad +
                                                                    1
                                                            )
                                                        }
                                                        disabled={
                                                            procesando
                                                        }
                                                    >
                                                        +
                                                    </button>
                                                </div>

                                                <p>
                                                    Subtotal:
                                                    $
                                                    {(
                                                        Number(
                                                            item.precioUnitario
                                                        ) *
                                                        item.cantidad
                                                    ).toLocaleString(
                                                        "es-CL"
                                                    )}
                                                </p>

                                                <button
                                                    onClick={() =>
                                                        eliminarProducto(
                                                            item.productoId
                                                        )
                                                    }
                                                    disabled={
                                                        procesando
                                                    }
                                                >
                                                    Eliminar
                                                </button>
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>

                            <div className="cart-summary">
                                <h2>
                                    Total: $
                                    {total.toLocaleString(
                                        "es-CL"
                                    )}
                                </h2>

                                <Button
                                    variant="secondary"
                                    onClick={comprar}
                                    disabled={procesando}
                                >
                                    {procesando
                                        ? "Procesando..."
                                        : "Comprar"}
                                </Button>
                            </div>
                        </>
                    )}
                </div>
            </motion.section>
        </MainLayout>
    );
}