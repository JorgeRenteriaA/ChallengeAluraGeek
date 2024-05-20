import {
    conexionAPI,
    eliminar_producto
} from "./conexionAPI.js";
import eliminarProducto from "./eliminarProducto.js";
const lista = document.querySelector('[data-lista]');

export default function crearCard(nombre, precio, imagen, id) {
    const producto = document.createElement("div");
    producto.className = "card";

    const contenido = `
        <img src="${imagen}" class="card-img" />
        <div class="card-container--info">
            <p class="card-container-text">${nombre}</p>
            <div class="card-container--value">
                <p class="card-container--value-text">$ ${precio}</p>
                <button type="" class="eliminar-producto" id="${id}">
                <input type="text" value="${id}" hidden>
                <img src="img/Vector.png" class="card-container--value-img"/>
                </button>
                
            </div>
        </div>`
    producto.innerHTML = contenido;
    const btneliminar = producto.querySelector(".eliminar-producto")
    btneliminar.addEventListener("click", async() => {
        const id = btneliminar.id;
        await eliminarProducto(id);   
    });
    return producto;
}

async function listar_productos() {
    try {
        const listaAPI = await conexionAPI.listar_productos();
        listaAPI.forEach(productos => lista.appendChild(crearCard(productos.nombre, productos.precio, productos.imagen, productos.id)));
    } catch (error) {
        console.error(error);
        lista.innerHTML = '<h2 class="mensaje__titulo">Ha ocurrido un problema con la conexión :(</h2>';
    }
}

listar_productos();