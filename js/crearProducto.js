import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("form");
const respuestaDiv = document.querySelector(".respuesta");

async function crear_producto(evento) {
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    try {
        
        const result = await Swal.fire({
            title: 'Producto Agregado',
            text: 'El producto se ha agregado correctamente.',
            icon: 'success',
            showConfirmButton: true,
            confirmButtonText: 'Aceptar'
        });
        if (result.isConfirmed) {
            const producto = await conexionAPI.crear_producto(nombre, precio, imagen);
            window.location.href = "../index.html";
        }
    } catch (error) {
        alert(error);
    }
}

formulario.addEventListener('submit', evento => {
    evento.preventDefault();
    console.log('Se hizo clic en el botón de enviar');
    console.log('Formulario seleccionado:', formulario);

    crear_producto(evento);
});
