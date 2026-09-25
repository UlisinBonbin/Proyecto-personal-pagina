import { useEffect, useState } from "react";
import MainLayout from "../../04-layouts/MainLayout";
import { motion } from "framer-motion";
import { useAuth } from "react-oidc-context";
import "./ControlPanel.css";

import ProductTable from "../../03-organisms/ProductTable";
import Modal from "../../02-molecules/Modal";
import ProductForm from "../../02-molecules/ProductForm";
import Button from "../../01-atoms/Button";

const API_URL = import.meta.env.VITE_API_URL;

export default function ControlPanel() {

    const auth = useAuth();

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);

    const [formLoading, setFormLoading] = useState(false);

    const [deleteConfirm, setDeleteConfirm] = useState(null);

    const [operationMessage, setOperationMessage] = useState({
        type: "",
        text: ""
    });

    /*
     * Comprobar grupo ADMINISTRADOR
     */
    const grupos = auth.user?.profile?.["cognito:groups"] || [];

    const isAdmin = Array.isArray(grupos)
        ? grupos.includes("ADMINISTRADOR")
        : grupos === "ADMINISTRADOR";

    /*
     * Cargar productos
     * GET es público, por lo que no necesita JWT.
     */
    const fetchProducts = async () => {

        try {

            setLoading(true);
            setError("");

            const response = await fetch(
                `${API_URL}/api/v1/productos`
            );

            if (!response.ok) {
                throw new Error(
                    `Error HTTP: ${response.status}`
                );
            }

            const data = await response.json();

            setProducts(data);

        } catch (error) {

            console.error(error);

            setError(
                "No se pudieron cargar los productos."
            );

        } finally {

            setLoading(false);
        }
    };

    useEffect(() => {

        if (
            !auth.isLoading &&
            auth.isAuthenticated &&
            isAdmin
        ) {
            fetchProducts();
        } else if (!auth.isLoading) {
            setLoading(false);
        }

    }, [
        auth.isLoading,
        auth.isAuthenticated,
        isAdmin
    ]);

    /*
     * Crear producto
     */
    const handleCreateProduct = async (productData) => {

        try {

            setFormLoading(true);

            const response = await fetch(
                `${API_URL}/api/v1/productos`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                        Authorization:
                            `Bearer ${auth.user.access_token}`,
                    },

                    body: JSON.stringify(productData),
                }
            );

            if (!response.ok) {
                throw new Error(
                    `Error HTTP: ${response.status}`
                );
            }

            await fetchProducts();

            setIsModalOpen(false);
            setEditingProduct(null);

            showOperationMessage(
                "success",
                "Producto creado exitosamente"
            );

        } catch (error) {

            console.error(error);

            showOperationMessage(
                "error",
                "Error al crear el producto"
            );

        } finally {

            setFormLoading(false);
        }
    };

    /*
     * Actualizar producto
     */
    const handleUpdateProduct = async (productData) => {

        try {

            setFormLoading(true);

            const response = await fetch(
                `${API_URL}/api/v1/productos/${editingProduct.id}`,
                {
                    method: "PUT",

                    headers: {
                        "Content-Type": "application/json",
                        Authorization:
                            `Bearer ${auth.user.access_token}`,
                    },

                    body: JSON.stringify(productData),
                }
            );

            if (!response.ok) {
                throw new Error(
                    `Error HTTP: ${response.status}`
                );
            }

            await fetchProducts();

            setIsModalOpen(false);
            setEditingProduct(null);

            showOperationMessage(
                "success",
                "Producto actualizado exitosamente"
            );

        } catch (error) {

            console.error(error);

            showOperationMessage(
                "error",
                "Error al actualizar el producto"
            );

        } finally {

            setFormLoading(false);
        }
    };

    /*
     * Eliminar producto
     */
    const handleDeleteProduct = async (product) => {

        try {

            const response = await fetch(
                `${API_URL}/api/v1/productos/${product.id}`,
                {
                    method: "DELETE",

                    headers: {
                        Authorization:
                            `Bearer ${auth.user.access_token}`,
                    },
                }
            );

            if (!response.ok) {
                throw new Error(
                    `Error HTTP: ${response.status}`
                );
            }

            await fetchProducts();

            setDeleteConfirm(null);

            showOperationMessage(
                "success",
                "Producto eliminado exitosamente"
            );

        } catch (error) {

            console.error(error);

            showOperationMessage(
                "error",
                "Error al eliminar el producto"
            );
        }
    };

    /*
     * Abrir modal para crear
     */
    const handleOpenCreateModal = () => {

        setEditingProduct(null);
        setIsModalOpen(true);
    };

    /*
     * Abrir modal para editar
     */
    const handleEditProduct = (product) => {

        setEditingProduct(product);
        setIsModalOpen(true);
    };

    /*
     * Confirmar eliminación
     */
    const handleDeleteClick = (product) => {

        setDeleteConfirm(product);
    };

    /*
     * Cancelar eliminación
     */
    const handleCancelDelete = () => {

        setDeleteConfirm(null);
    };

    /*
     * Cerrar modal
     */
    const handleCloseModal = () => {

        setIsModalOpen(false);
        setEditingProduct(null);
    };

    /*
     * Mostrar mensaje
     */
    const showOperationMessage = (type, text) => {

        setOperationMessage({
            type,
            text
        });

        setTimeout(() => {

            setOperationMessage({
                type: "",
                text: ""
            });

        }, 3000);
    };

    /*
     * Manejar formulario
     */
    const handleFormSubmit = (productData) => {

        if (editingProduct) {

            handleUpdateProduct(productData);

        } else {

            handleCreateProduct(productData);
        }
    };

    /*
     * Mientras Cognito comprueba la sesión
     */
    if (auth.isLoading) {

        return (
            <MainLayout>

                <section className="control-panel-hero">

                    <div className="control-panel-content">

                        <h1>
                            Cargando...
                        </h1>

                    </div>

                </section>

            </MainLayout>
        );
    }

    /*
     * No autenticado o no administrador
     */
    if (!auth.isAuthenticated || !isAdmin) {

        return (
            <MainLayout>

                <section className="control-panel-hero">

                    <div className="control-panel-content">

                        <h1>
                            Acceso denegado
                        </h1>

                        <p>
                            No tienes permisos para acceder
                            al panel de administración.
                        </p>

                    </div>

                </section>

            </MainLayout>
        );
    }

    /*
     * Panel
     */
    return (
        <MainLayout>

            <motion.section
                className="control-panel-hero"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
            >

                <div className="control-panel-content">

                    <div className="control-panel-header">

                        <h1>
                            Panel de Control de Productos
                        </h1>

                        <Button
                            onClick={handleOpenCreateModal}
                        >
                            + Nuevo Producto
                        </Button>

                    </div>

                    {operationMessage.text && (
                        <div
                            className={
                                `operation-message ${operationMessage.type}`
                            }
                        >
                            {operationMessage.text}
                        </div>
                    )}

                    {error && (
                        <div className="error-message">
                            {error}
                        </div>
                    )}

                    <ProductTable
                        products={products}
                        onEdit={handleEditProduct}
                        onDelete={handleDeleteClick}
                        isLoading={loading}
                    />

                </div>

                {/* Modal crear / editar */}

                <Modal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    title={
                        editingProduct
                            ? "Editar Producto"
                            : "Nuevo Producto"
                    }
                >

                    <ProductForm
                        product={editingProduct}
                        onSubmit={handleFormSubmit}
                        onCancel={handleCloseModal}
                        isLoading={formLoading}
                    />

                </Modal>

                {/* Modal eliminar */}

                <Modal
                    isOpen={!!deleteConfirm}
                    onClose={handleCancelDelete}
                    title="Confirmar Eliminación"
                >

                    <div className="delete-confirm-content">

                        <p>
                            ¿Estás seguro de que deseas eliminar
                            el producto "
                            {deleteConfirm?.nombre}
                            "?
                        </p>

                        <p className="warning-text">
                            Esta acción no se puede deshacer.
                        </p>

                        <div className="delete-confirm-actions">

                            <Button
                                variant="secondary"
                                onClick={handleCancelDelete}
                            >
                                Cancelar
                            </Button>

                            <Button
                                onClick={() =>
                                    handleDeleteProduct(
                                        deleteConfirm
                                    )
                                }
                            >
                                Eliminar
                            </Button>

                        </div>

                    </div>

                </Modal>

            </motion.section>

        </MainLayout>
    );
}