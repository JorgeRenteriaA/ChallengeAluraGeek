import { eliminar_producto } from "./conexionAPI.js";
export default async function eliminarProducto(idProducto) {
    try {
        const result = await Swal.fire({
            title: 'Eliminar Producto',
            text: '¿Estás seguro de que quieres eliminar este producto?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        });

        if (result.isConfirmed) {
            await eliminar_producto(idProducto);
            await Swal.fire({
                title: 'Producto Eliminado',
                text: 'El producto ha sido eliminado correctamente.',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            });
            window.location.href = "../index.html";
        }
    } catch (error) {
        alert(error);
    }
}