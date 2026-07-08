# AGENTS

This repository is a static frontend project for an AluraBank account registration form. It uses HTML, CSS, and JavaScript without a build system or package manager.

## What an AI coding agent should know

- Primary focus: `pages/abrir-cuenta-form.html` and its validation behavior.
- JavaScript entry point: `js/main.js` imports `js/validar-cuit.js` as an ES module.
- Validation is wired through HTML form semantics and `blur` event listeners on `[required]` fields.
- `js/validar-cuit.js` performs CUIT/CUIT validation and returns error messages.
- There is no framework, no bundler, and no automated test suite in this folder.
- For UI behavior and help text, reference `VALIDACION-README.md` and `TOOLTIPS-README.md`.

## Key files

- `pages/abrir-cuenta-form.html` — form markup, field structure, and `type="module"` script include.
- `js/main.js` — form field selection and event wiring.
- `js/validar-cuit.js` — CUIT validation logic.
- `styles/styles.css` — global styling.
- `styles/formulario/styles.css` — form and field-specific presentation.
- `README.md` — project description and tech stack.
- `VALIDACION-README.md` — validation system documentation.
- `TOOLTIPS-README.md` — tooltip/help popup documentation.

## Practical guidance for edits

- Preserve existing HTML field and `fieldset` structure when updating validation or accessibility.
- Keep field error output in the existing `<span class="mensaje-error"></span>` elements.
- Only modify script references in HTML if the new code paths remain compatible with browser module loading.
- Prefer small, incremental changes because the project is a learning exercise and a static front-end demo.

## Notes for agents

- Do not assume a backend API; this is a client-side static form project.
- When the user asks about repo-wide conventions, focus on the `alura-bank-main` folder and its static pages.
- If the user mentions the separate `JS/` folder, treat it as a different workspace area and ask for clarification before editing it.
