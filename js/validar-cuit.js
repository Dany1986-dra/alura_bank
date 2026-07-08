// ========== Validación de CUIT ==========
export default function validarCuit(campo) {
  // Normalizamos el valor dejando solo dígitos.
  const cuil = campo.value.replace(/\D/g, "").trim();

  if (cuil.length !== 11) {
    campo.setCustomValidity("CUIT/CUIL debe contener 11 digitos.");
    return;
  }

  if (tieneCaracteresRepetidos(cuil)) {
    console.log("El CUIT no puede contener caracteres repetidos.");
    campo.setCustomValidity("El CUIT no puede contener caracteres repetidos.");

  } else if (validarPrimerosDigitos(cuil) && validarDigitoVerificador(cuil)) {
    console.log("El CUIT es valido.");
    
  } else {
    console.log("El CUIT no es valido.");
    campo.setCustomValidity("CUIT/CUIL inválido o no existe.");
  }
}

// ========== Verificación de caracteres repetidos ==========
function tieneCaracteresRepetidos(cuil) {
  const numerosRepetidos = [
    "00000000000",
    "11111111111",
    "22222222222",
    "33333333333",
    "44444444444",
    "55555555555",
    "66666666666",
    "77777777777",
    "88888888888",
    "99999999999",
  ];

  return numerosRepetidos.includes(cuil);
}

function validarPrimerosDigitos(cuil) {
  let primerosDigitos = cuil.slice(0, 2);
  console.log("Los dos primeros dígitos del CUIT son: " + primerosDigitos);

  let digitosValidos = ["20", "23", "27", "30", "33", "34"];
  return digitosValidos.includes(primerosDigitos);
}

function validarDigitoVerificador(cuil) {
  let acumulador = 0;
  let factores = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];

  for (let i = 0; i < 10; i++) {
    acumulador += parseInt(cuil.charAt(i), 10) * factores[i];
  }

  let validadorTeorico = 11 - (acumulador % 11);

  if (validadorTeorico === 11) {
    validadorTeorico = 0;
  } else if (validadorTeorico === 10) {
    validadorTeorico = 9;
  }

  const digitoVerificador = parseInt(cuil.charAt(10), 10);

  return digitoVerificador === validadorTeorico;
}
