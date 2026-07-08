// ========== Validación de formulario ==========
import validarCuit from "./validar-cuit.js";
import esMayorDeEdad from "./validar-edad.js";
import { tipoDeErrores, mensajes } from "./customErrors.js";

// ========== Selección de campos requeridos ==========
const camposDeFormulario = document.querySelectorAll("[required]");
const campoCuil = document.querySelector("#cuil");
const formulario = document.querySelector("[data-formulario]");

// ========== Evento blur para validar campos ==========
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const listaRespuestas = {
    nombre: evento.target.elements["nombre"].value,
    email: evento.target.elements["email"].value,
    identificacion: evento.target.elements["identificacion"].value,
    cuil: evento.target.elements["cuil"].value,
    fecha_nacimiento: evento.target.elements["fecha_nacimiento"].value,
  };
  localStorage.setItem("registro", JSON.stringify(listaRespuestas));

  window.location.href = "./abrir-cuenta-form-2.html";
});

camposDeFormulario.forEach((campo) => {
  campo.addEventListener("blur", () => verificarCampo(campo));
  campo.addEventListener("invalid", (evento) => {
    evento.preventDefault();
  });
});

// ========== Evento click para revisar el CUIL en consola ==========
campoCuil.addEventListener("click", () => validarCuit(campoCuil));

// ========== Verificación de un campo específico ==========
function verificarCampo(campo) {
  let mensaje = "";
  const mensajeError = campo.parentNode.querySelector(".mensaje-error");
  campo.setCustomValidity("");

  if (campo.name == "cuil") {
    validarCuit(campo);
  }

  if (campo.name == "fecha_nacimiento" && campo.value !== "") {
    esMayorDeEdad(campo);
  }

  // ========== Verificación de errores de validación ==========
  tipoDeErrores.forEach((error) => {
    if (campo.validity[error]) {
      mensaje = mensajes[campo.name][error];
    }
  });

  mensajeError.textContent = mensaje;

  const hayError = mensaje !== "";
  campo.setAttribute("aria-invalid", hayError ? "true" : "false");
  campo.classList.toggle("campo__completo--error", hayError);
}
