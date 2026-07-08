// ========== Validación de la mayoría de edad ==========
export default function esMayorDeEdad(campo){
    const fechaNacimiento = new Date(campo.value);
    
    if(!validarEdad(fechaNacimiento)){
      campo.setCustomValidity("Debes ser mayor de edad para registrarte.");
    }else{
      campo.setCustomValidity("");
    }
};

// ========== Funciones auxiliares ==========
// ========== Verificación de la mayoría de edad ==========
function validarEdad(fecha) {
  if (Number.isNaN(fecha.getTime())) {
    return false;
  }

  let fechaActual = new Date();
  let MayorEdad = new Date(
    fecha.getUTCFullYear() + 18,
    fecha.getUTCMonth(),
    fecha.getUTCDate()
  );
  return fechaActual >= MayorEdad;
}