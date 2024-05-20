import {
    tiposError,
    mensajes
} from "./customError.js";
const camposFormulario = document.querySelectorAll('[required]');

camposFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificarCampo(campo));
    campo.addEventListener('invalid', evento => evento.preventDefault());
});

function verificarCampo(campo) {
    let mensaje = "";
    campo.setCustomValidity("");
    const mensajeError = campo.parentNode.querySelector('.mensaje-error');

    tiposError.forEach(error => {
        if (campo.validity[error]) {
            mensaje = mensajes[campo.name][error];
        }
    });

    if (campo.name === "nombre") {
        validarNombre(campo);
    } else if (campo.name === "precio") {
        validarPrecio(campo);
    } else if (campo.name === "imagen") {
        validarURLImagen(campo);
    }

    mensajeError.textContent = mensaje;
}



function validarNombre(campo) {
    const nombre = campo.value;
    if (nombre.lenght == "") {
        campo.setCustomValidity("El nombre no puede estar vacio");
    } else {
        //console.log("Nombre valido");
    }
}


function validarPrecio(campo) {
    const precio = campo.value;
    if (precio.lenght == "") {
        campo.setCustomValidity("El nombre no puede estar vacio");
    } else {
        //console.log("Precio valido");
    }
}



// Función para validar la URL de la imagen
function validarURLImagen(campo) {
    const imagen = campo.value;
    if (imagen.lenght == "") {
        campo.setCustomValidity("La imagen no puede estar vacio");
    } else {
        //console.log("Precio valido");
    }
}