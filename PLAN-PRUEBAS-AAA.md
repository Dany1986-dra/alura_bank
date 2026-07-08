# Plan de Pruebas Manuales AAA y QA

## Objetivo

Verificar accesibilidad, navegacion por teclado, validacion y consistencia del flujo de alta sin alterar la logica del sitio.

## Alcance

- index.html
- pages/abrir-cuenta-form.html
- pages/abrir-cuenta-form-2.html
- pages/abrir-cuenta-form-3.html

## Entorno sugerido

- Navegadores: Edge, Chrome, Firefox.
- Resoluciones: desktop (1366x768) y movil (390x844).
- Lector de pantalla: NVDA o Narrador de Windows.

## Casos de prueba

### A11Y-001 Skip link

- Paso: presionar Tab al abrir la pagina.
- Esperado: aparece enlace "Saltar al contenido principal" y mueve el foco al main.

### A11Y-002 Foco visible

- Paso: recorrer enlaces, botones e inputs con Tab/Shift+Tab.
- Esperado: siempre hay indicador visible de foco.

### A11Y-003 Landmarks semanticos

- Paso: inspeccionar estructura con lector o herramienta de accesibilidad.
- Esperado: banner, navegacion, main y contentinfo disponibles.

### A11Y-004 Errores anunciados

- Paso: generar errores en formulario principal (campos vacios o invalidos).
- Esperado: mensaje asociado por campo y anuncio por aria-live/alert.

### A11Y-005 Relacion input-error

- Paso: revisar cada input del formulario principal.
- Esperado: aria-describedby apunta al error correspondiente.

### QA-001 CUIL longitud invalida

- Paso: ingresar menos de 11 digitos.
- Esperado: mensaje de longitud invalida o CUIL invalido.

### QA-002 CUIL digito verificador invalido

- Paso: ingresar CUIL con DV incorrecto.
- Esperado: mensaje de CUIL/CUIT invalido.

### QA-003 Edad minima

- Paso: ingresar fecha de nacimiento menor de 18 anos.
- Esperado: mensaje de restriccion de edad.

### QA-004 Flujo de 3 pasos

- Paso: completar flujo y avanzar hasta confirmacion.
- Esperado: se conserva registro en localStorage y se llega a paso 3.

### QA-005 Camara y privacidad

- Paso: abrir camara, tomar foto.
- Esperado: se captura imagen y el stream se detiene luego de la captura.

## Criterio de aprobacion

- 100% de casos A11Y en estado OK.
- 100% de casos QA criticos (QA-001 a QA-005) en estado OK.
- Sin errores de consola bloqueantes en flujo principal.

## Registro de ejecucion

Usar esta tabla al ejecutar:

| ID | Estado (OK/FAIL) | Evidencia | Observacion |
| --- | --- | --- | --- |
| A11Y-001 | | | |
| A11Y-002 | | | |
| A11Y-003 | | | |
| A11Y-004 | | | |
| A11Y-005 | | | |
| QA-001 | | | |
| QA-002 | | | |
| QA-003 | | | |
| QA-004 | | | |
| QA-005 | | | |
