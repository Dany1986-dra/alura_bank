# Validacion de Formularios

## Resumen

La validacion actual se ejecuta en cliente y se compone de:

- Reglas nativas HTML5 (required, type, minlength, pattern).
- Reglas personalizadas (CUIL/CUIT y edad minima).
- Mensajeria por campo con salida accesible.

Archivo principal: js/main.js

## Campos validados

- nombre
- email
- identificacion
- cuil
- fecha_nacimiento
- terminos

## Flujo de validacion

1. Se registran listeners blur e invalid en campos required.
2. En blur se ejecuta verificarCampo.
3. Para cuil se invoca js/validar-cuit.js.
4. Para fecha_nacimiento se invoca js/validar-edad.js.
5. Se mapea el primer error detectado con js/customErrors.js.
6. El mensaje se muestra en .mensaje-error del campo.
7. Se actualiza aria-invalid y estilo visual de error.

## Accesibilidad incorporada

- Cada error tiene role=alert y aria-live=polite.
- Cada input referencia su span de error con aria-describedby.
- Los campos inician con aria-invalid=false y cambian a true cuando corresponde.
- El formulario usa novalidate para evitar mensajes nativos inconsistentes.

## Validacion CUIL/CUIT

Archivo: js/validar-cuit.js

Reglas aplicadas:

- Debe tener 11 digitos (se normaliza quitando separadores).
- Se rechazan secuencias repetidas (ejemplo 11111111111).
- Se valida prefijo permitido.
- Se valida digito verificador.

## Validacion de edad

Archivo: js/validar-edad.js

Regla:

- Debe tener 18 anos o mas a la fecha actual.

## QA recomendado

Casos minimos:

- Campo vacio por cada input requerido.
- Email invalido y valido.
- CUIL con longitud invalida.
- CUIL con digito verificador invalido.
- Fecha con menor de edad.
- Checkbox de terminos sin marcar.
- Navegacion solo con teclado (Tab, Shift+Tab, Enter, Espacio).
