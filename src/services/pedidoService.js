const API_URL = import.meta.env.VITE_API_URL;

export const getCart = async (accessToken) => {
    const response = await fetch(
        `${API_URL}/api/v1/pedidos/carrito`,
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }
    );

    if (!response.ok) {
        throw new Error(`Error obteniendo carrito: ${response.status}`);
    }

    return response.json();
};


export const addProductToCart = async (
    accessToken,
    productoId,
    cantidad = 1
) => {
    const response = await fetch(
        `${API_URL}/api/v1/pedidos/carrito/productos`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({
                productoId,
                cantidad,
            }),
        }
    );

    if (!response.ok) {
        throw new Error(
            `Error agregando producto: ${response.status}`
        );
    }

    return response.json();
};



export const updateCartProduct = async (
    accessToken,
    productoId,
    cantidad
) => {
    const response = await fetch(
        `${API_URL}/api/v1/pedidos/carrito/productos/${productoId}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({
                cantidad,
            }),
        }
    );

    if (!response.ok) {
        throw new Error(
            `Error actualizando producto: ${response.status}`
        );
    }

    return response.json();
};

export const removeCartProduct = async (
    accessToken,
    productoId
) => {
    const response = await fetch(
        `${API_URL}/api/v1/pedidos/carrito/productos/${productoId}`,
        {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }
    );

    if (!response.ok) {
        throw new Error(
            `Error eliminando producto: ${response.status}`
        );
    }

    return response.json();
};

export const buyCart = async (accessToken) => {
    const response = await fetch(
        `${API_URL}/api/v1/pedidos/carrito/comprar`,
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }
    );

    if (!response.ok) {
        throw new Error(
            `Error realizando compra: ${response.status}`
        );
    }

    return response.json();

    

};