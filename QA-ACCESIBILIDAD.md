# QA y Accesibilidad (WCAG 2.1 AAA)

## Alcance

Revisado en:

- index.html
- pages/abrir-cuenta-form.html
- pages/abrir-cuenta-form-2.html
- pages/abrir-cuenta-form-3.html
- js/main.js
- js/validar-cuit.js
- js/camera.js
- styles/styles.css
- styles/header.css
- styles/formulario/styles.css

## Mejoras aplicadas

- Se agrego skip link para saltar al contenido principal.
- Se reforzaron landmarks semanticos (header/nav/main).
- Se mejoro foco visible para interaccion con teclado.
- Se aumento contraste en mensajes de error.
- Se agrego role=alert y aria-live en errores por campo.
- Se sincronizo aria-invalid desde JavaScript segun el estado de validacion.
- Se hizo accesible el disparador de camara usando boton real.

## Verificaciones QA sugeridas

1. Navegar completamente con teclado sin usar mouse.
2. Confirmar anuncio de errores con lector de pantalla.
3. Revisar contraste de texto normal y mensajes de error.
4. Verificar que el skip link sea visible al tabular.
5. Validar que el flujo de 3 pasos mantenga datos en localStorage.

## Nota

Estas mejoras alinean el proyecto con criterios AAA relevantes de percepcion, operabilidad y comprension.
La conformidad AAA completa requiere auditoria formal integral (contenido, contexto de uso y pruebas asistivas en multiples combinaciones de navegador y lector).

## Evidencia tecnica verificada

Fecha de verificacion: 2026-07-08

Resultados:

- Sin errores de analisis estatico en HTML, CSS y JS de los archivos modificados.
- Skip link presente en index y en los 3 pasos del formulario.
- Role contentinfo presente en pies de pagina.
- Mensajes de error con role=alert y aria-live=polite en formulario principal.
- aria-invalid actualizado dinamicamente desde JS.
- Estilos de error vinculados a aria-invalid en CSS.
- Stream de camara detenido tras captura de foto.

Referencias de evidencia en codigo:

- index.html: skip-link, role=banner, role=main, role=contentinfo.
- pages/abrir-cuenta-form.html: role=alert, aria-live, aria-invalid inicial.
- js/main.js: setAttribute("aria-invalid", ...).
- styles/formulario/styles.css: selector [aria-invalid="true"].
- js/camera.js: stop de tracks con getTracks().forEach(...).
