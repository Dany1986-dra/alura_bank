# AluraBank | Validacion de Formularios

Proyecto front-end estatico para practicar validacion de formularios con JavaScript en un flujo de apertura de cuenta.

## Vista general

Este repositorio implementa:

- Validaciones HTML5 y validaciones personalizadas en JavaScript.
- Errores por campo con salida accesible para lectores de pantalla.
- Validacion de CUIL/CUIT y mayoria de edad.
- Flujo multi-paso con persistencia en localStorage.
- Mejora de landmarks, foco visible y navegacion por teclado.

## Tecnologias

| Tecnologia | Uso |
| --- | --- |
| HTML5 | Estructura semantica y formularios |
| CSS3 | Layout, estilos y estados de accesibilidad |
| JavaScript (ES Modules) | Validacion, eventos y navegacion |

## Estructura

```text
alura-bank-main/
|-- index.html
|-- pages/
|   |-- abrir-cuenta-form.html
|   |-- abrir-cuenta-form-2.html
|   `-- abrir-cuenta-form-3.html
|-- js/
|   |-- main.js
|   |-- customErrors.js
|   |-- validar-cuit.js
|   |-- validar-edad.js
|   `-- camera.js
|-- styles/
|   |-- styles.css
|   |-- header.css
|   |-- footer.css
|   `-- formulario/styles.css
|-- VALIDACION-README.md
|-- TOOLTIPS-README.md
|-- PLAN-PRUEBAS-AAA.md
`-- QA-ACCESIBILIDAD.md ver
```

## Flujo funcional

1. En el formulario principal se valida cada campo en blur.
2. Si hay error, se muestra mensaje por campo y se marca aria-invalid.
3. Al enviar, se guarda el registro en localStorage y se pasa al paso 2.
4. En paso 2 se captura foto, se agrega al registro y se pasa al paso 3.
5. Paso 3 confirma el alta.

## Accesibilidad y QA

Se aplicaron mejoras para acercar el proyecto a WCAG 2.1 nivel AAA sin cambiar la logica de negocio:

- Landmarks semanticos (banner, nav, main).
- Skip link al contenido principal.
- Foco visible consistente para teclado.
- Mejora de contraste para mensajes de error.
- Mensajes con role=alert y aria-live=polite.
- Estados aria-invalid actualizados por JS.
- Activacion de camara accesible con boton real.

Detalles tecnicos en:

- VALIDACION-README.md
- TOOLTIPS-README.md
- PLAN-PRUEBAS-AAA.md
- QA-ACCESIBILIDAD.md

## Ejecucion local

1. Abrir index.html en navegador.
2. O usar Live Server para mejor experiencia de desarrollo.

## Creditos

Proyecto educativo basado en ejercicios de Alura Latam.
