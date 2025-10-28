# MiMiniApp

---
LINK DE LA APP [ENTRAR A LA APP](https://lsnoglos.github.io/mini-app-angular/home) <---
---
---
This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.7.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

---

## Características Principales

* **100% Standalone Components:** Toda la aplicación está construida sin `NgModules`.
* **Sistema de Rutas:**
    * `/home`: Muestra la lista de contactos guardados.
    * `/contacto`: Muestra el formulario para registrar.
* **Formulario Reactivo Tipado:** Utiliza `FormGroup` y `FormControl` tipados para máxima seguridad y autocompletado en plantillas.
* **Validación Avanzada:** Implementa `Validators.required`, `minLength`, `email`, `pattern` y `requiredTrue`.
* **Mensajes de Error Dinámicos:** Los errores solo se muestran si el campo ha sido "tocado" (`dirty` o `touched`), usando la sintaxis moderna `@if`.
* **Persistencia de Datos:** Los envíos válidos se guardan en el `localStorage` del navegador.

## Requisitos del Formulario

El formulario (`/contacto`) cumple con las siguientes reglas de negocio:

* **Nombre completo:** Obligatorio, mínimo 3 caracteres.
* **Email:** Obligatorio, formato de email válido.
* **Teléfono:** **Opcional**. Si se ingresa, debe tener exactamente 13 dígitos.
* **Mensaje:** Obligatorio, mínimo 50 caracteres.
* **Aceptar términos:** Obligatorio (checkbox).

## Stack de Tecnologías

* **[Angular](https://angular.io/) (v20+)**
* **[TypeScript](https://www.typescriptlang.org/)**
* **Angular Reactive Forms**
* **CSS**
