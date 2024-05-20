const API_URL = "https://fake-api-storage-teal.vercel.app";

async function listar_productos() {
    try {
        const conexion = await fetch(`${API_URL}/productos`, {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        });

        const conexionConvertida = await conexion.json();
        return conexionConvertida;
    } catch (error) {
        console.error('Error al realizar la solicitud:', error);
        throw error; // Relanza el error para que pueda ser capturado en el código que llama a esta función
    }
}

async function crear_producto(nombre, precio, imagen) {
    console.log("Creando producto...");
    console.log("Datos recibidos:", nombre, precio, imagen);
    const conexion = await fetch(`${API_URL}/productos`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nombre: nombre,
            precio: precio,
            imagen: imagen
        })
    })
    if (!conexion.ok) {
        throw new Error("No fue posible enviar el video");
    }
    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}

async function buscar_producto(referencia) {
    const conexion = await fetch(`${API_URL}/productos?q=${referencia}`)
    const conexionConvertida = conexion.json();

    return conexionConvertida;
}


export async function eliminar_producto(idProducto) {
    try {
        const conexion = await fetch(`${API_URL}/productos/${idProducto}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            }
        });

        if (!conexion.ok) {
            throw new Error("No fue posible eliminar el producto");
        }

        const respuesta = await conexion.json();
        return respuesta;
    } catch (error) {
        console.error('Error al realizar la solicitud:', error);
        throw error;
    }
}



export const conexionAPI = {
    listar_productos, crear_producto, buscar_producto, eliminar_producto
}