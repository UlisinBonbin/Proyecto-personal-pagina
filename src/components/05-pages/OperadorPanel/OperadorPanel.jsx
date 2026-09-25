import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "react-oidc-context";

import MainLayout from "../../04-layouts/MainLayout";
import {
    getAllOrders,
    updateOrderStatus,
} from "../../../services/operadorService";

import "./OperadorPanel.css";

const ESTADOS = [
    "PAGADO",
    "EN_PREPARACION",
    "ENVIADO",
    "ENTREGADO",
    "CANCELADO",
];

export default function OperatorPanel() {

    const auth = useAuth();

    const [pedidos, setPedidos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const grupos =
        auth.user?.profile?.["cognito:groups"] || [];

    const isOperator = Array.isArray(grupos)
        ? grupos.includes("OPERADOR")
        : grupos === "OPERADOR";


    const cargarPedidos = async () => {

        try {

            setLoading(true);
            setError("");

            const data = await getAllOrders(
                auth.user.access_token
            );

            setPedidos(data);

        } catch (error) {

            console.error(error);

            setError(
                "No se pudieron cargar los pedidos."
            );

        } finally {

            setLoading(false);
        }
    };


    useEffect(() => {

        if (
            auth.isAuthenticated &&
            isOperator
        ) {
            cargarPedidos();
        }

    }, [
        auth.isAuthenticated,
        isOperator
    ]);


    const cambiarEstado = async (
        pedidoId,
        nuevoEstado
    ) => {

        try {

            await updateOrderStatus(
                auth.user.access_token,
                pedidoId,
                nuevoEstado
            );

            await cargarPedidos();

        } catch (error) {

            console.error(error);

            setError(
                "No se pudo actualizar el estado."
            );
        }
    };


    if (auth.isLoading) {

        return (
            <MainLayout>
                <section className="operator-panel">
                    <h1>Cargando...</h1>
                </section>
            </MainLayout>
        );
    }


    if (
        !auth.isAuthenticated ||
        !isOperator
    ) {

        return (
            <MainLayout>

                <section className="operator-panel">

                    <h1>
                        Acceso denegado
                    </h1>

                    <p>
                        No tienes permisos para acceder
                        al panel de operador.
                    </p>

                </section>

            </MainLayout>
        );
    }


    return (
        <MainLayout>

            <motion.section
                className="operator-panel"
                initial={{
                    opacity: 0,
                    y: 20
                }}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    duration: 0.4
                }}
            >

                <div className="operator-panel-content">

                    <h1>
                        Panel de Operador
                    </h1>

                    <p>
                        Gestiona pedidos, cambios de estado
                        y operación diaria.
                    </p>

                    {error && (
                        <div className="error-message">
                            {error}
                        </div>
                    )}

                    {loading ? (

                        <p>
                            Cargando pedidos...
                        </p>

                    ) : pedidos.length === 0 ? (

                        <p>
                            No hay pedidos registrados.
                        </p>

                    ) : (

                        <div className="orders-list">

                            {pedidos.map((pedido) => (

                                <div
                                    className="order-card"
                                    key={pedido.id}
                                >

                                    <div>
                                        <h2>
                                            Pedido #{pedido.id}
                                        </h2>

                                        <p>
                                            Usuario:{" "}
                                            {pedido.usuarioSub}
                                        </p>

                                        <p>
                                            Estado actual:{" "}
                                            <strong>
                                                {pedido.estado}
                                            </strong>
                                        </p>

                                        <p>
                                            Fecha:{" "}
                                            {pedido.fechaCreacion}
                                        </p>
                                    </div>


                                    <div>

                                        <label>
                                            Cambiar estado:
                                        </label>

                                        <select
                                            value={pedido.estado}
                                            onChange={(e) =>
                                                cambiarEstado(
                                                    pedido.id,
                                                    e.target.value
                                                )
                                            }
                                        >

                                            {ESTADOS.map(
                                                (estado) => (

                                                    <option
                                                        key={estado}
                                                        value={estado}
                                                    >
                                                        {estado}
                                                    </option>

                                                )
                                            )}

                                        </select>

                                    </div>


                                    <div>

                                        <h3>
                                            Productos
                                        </h3>

                                        {pedido.items?.map(
                                            (item) => (

                                                <p
                                                    key={item.id}
                                                >
                                                    {item.nombreProducto}
                                                    {" × "}
                                                    {item.cantidad}
                                                </p>

                                            )
                                        )}

                                    </div>

                                </div>

                            ))}

                        </div>

                    )}

                </div>

            </motion.section>

        </MainLayout>
    );
}