const API_URL = import.meta.env.VITE_API_URL;

export const getAllOrders = async (accessToken) => {

    const response = await fetch(
        `${API_URL}/api/v1/pedidos`,
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }
    );

    if (!response.ok) {
        throw new Error(
            `Error obteniendo pedidos: ${response.status}`
        );
    }

    return response.json();
};


export const updateOrderStatus = async (
    accessToken,
    pedidoId,
    estado
) => {

    const response = await fetch(
        `${API_URL}/api/v1/pedidos/${pedidoId}/estado`,
        {
            method: "PUT",

            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },

            body: JSON.stringify({
                estado,
            }),
        }
    );

    if (!response.ok) {
        throw new Error(
            `Error actualizando pedido: ${response.status}`
        );
    }

    return response.json();
};