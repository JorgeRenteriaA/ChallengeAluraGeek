import { conexionAPI } from "./conexionAPI.js";
import crearCard from "./mostrarProductos.js";

async function buscar_producto(evento){
    evento.preventDefault();
    const datosDeBusqueda=document.querySelector("[data-busqueda]").value;
    const busqueda= await conexionAPI.buscar_producto(datosDeBusqueda);

    const listaDeBusqueda=document.querySelector("[data-lista]");
    listaDeBusqueda.replaceChildren();

    busqueda.forEach(elemento => listaDeBusqueda.
        appendChild(crearCard(elemento.nombre,elemento.precio,elemento.imagen, elemento.id)));

    if(busqueda.length==0){
        listaDeBusqueda.innerHTML=`<h2 class="mensaje__titulo">No encontramos videos para ese filtro ${datosDeBusqueda}</h2>`;
    } 
}

const botonBusqueda=document.querySelector("[data-boton-busqueda]");

botonBusqueda.addEventListener("click",evento=>buscar_producto(evento));

const inputEle = document.getElementById('buscar');
inputEle.addEventListener('keyup', function(e){
  var key = e.which || e.keyCode;
  if (key == 13) { 
    buscar_producto(e)
  }
});