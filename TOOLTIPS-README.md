# Ayudas de Formulario y Tooltips

## Estado actual

Actualmente el proyecto no utiliza un sistema de pop-up tooltip con JavaScript dedicado.

En su lugar se usa ayuda textual fija y mensajes de error accesibles por campo.

## Implementacion activa

- Texto de apoyo general del formulario (campos obligatorios).
- Mensajes de error por campo con role=alert y aria-live=polite.
- aria-describedby para asociar cada input con su error.

## Recomendacion para siguiente iteracion

Si se desea recuperar tooltips flotantes sin romper accesibilidad:

1. Usar un boton o icono de ayuda por campo.
2. Asociar panel con aria-controls y aria-expanded.
3. Cerrar con Escape y al perder foco.
4. Mantener alternativa de ayuda visible en texto para cumplir UX inclusiva.

## Nota de QA

No se considera fallo que no exista popup tooltip mientras exista:

- Ayuda equivalente visible.
- Mensajes claros de error.
- Navegacion completa por teclado.
