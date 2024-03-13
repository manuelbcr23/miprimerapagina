// alert("Hola este es mi Javascript");
// let nombre = "Manuel";
// nombre = "Martha";

// var nombre1 = "Manuel";

// const nombre2 = "Manuel";
// nombre2 = "Jacinto";

// console.log(nombre)
// console.log(nombre1)
// console.log(nombre2)

// SELECCIONAR ELEMENTOS

// Let contenidoTitulo = "Nombre";

// let titulo = document.querySelector

// --------------Contacto----------------
const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 caracteres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});