# Documentación del Sitio Web de Bomberos

Estándares, estructura y guías de estilo para el desarrollo de la pagina. Mantener un código coherente, escalable y fácil de mantener.

## 1. Estilo Visual

### Paleta de Colores

    Fondo general: #ffffff; 
    Primario: #030213; /*Titulos, encabezados*/
    Secundario: #f2f2f8; /*Fondos suaves, seecciones claras*/
    Tarjetas cuando el fondo sea secundario: #ffffff;
    Texto: #252525; /*Texto*/
    Bordes: rgba(0, 0, 0, 0.1); /*Bordes de tarjetas y/o divisores suaves*/
    Radio de bordes: 10px/0.625rem; /*Borde de tarjetas, botones.*/

### Layout y Espaciado (Reglas de Estilado)

* **Bordes Redondeados:**
  * Estándar (Tarjetas, botones): 0.625rem / 10px
* **Padding:**
  * Padding principal de secciones: 4rem.
* **Márgenes:**
  * Margen entre tarjetas: 1rem.
  * Margen entre secciones: 2rem.

## 2. Guías de Código y Estándares

### Formato HTML

El HTML debe ser limpio, accesible y semántico.

* **Semántica:** Usar etiquetas HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<aside>`)

* **Estructura:** El código debe estar correctamente indentado y ser legible.

* **Accesibilidad:** Incluir "alt", inputs tengan "label", "aria-labelby" para identificar secciones,placeholders.

* **Uso de `<div>`:** Reservar `<div>` y `<span>` **exclusivamente** para propósitos de *layout* (Contenedores Flexbox/Grid) o estilado, y **solo si no existe** una etiqueta semántica que describa el contenido.

* **Titulos, subtitulos, subsubtitulos:** Usar h1, h2, h3...h5 en orden. El h1 esta reservado para el titulo de la pagina. Cada seccion distinta empieza con el titulo en h2.

### Formato CSS

CSS mantenible, escalable y predecible.

* **Unidades de Medida:**
  * **Unidades Relativas (rem):** Usar "rem" para **todas** las propiedades de tamaño y espaciado (tipografía, `margin`, `padding`, `width`, `height`). Para escalado proporcional y accesible.
  "px" solo para bordes finos (ej. "border: 1px solid...") donde no se desea que escale. Se puede usar "%" o "vw/vh" para layouts fluidos.

## 3. Lenguajes
  
  HTML5, CSS3, JavaScript (ES6+)

## 4. Flujo de Trabajo y Contribución (Git)

Para asegurar la calidad del código y la estabilidad de la rama principal (`main`), todo cambio debe pasar por el siguiente proceso.

### 1. Desarrollo en Ramas (Branches)

* **Jamás trabajar directo en `main`:** La rama `main` (o `master`) es la versión "oficial" y siempre debe estar funcional.
* **Crear ramas nuevas:** Todo trabajo, sin importar lo pequeño, se hace en una rama nueva.
* **Nomenclatura de Ramas:** Prefijos claros para identificar el propósito, identico al de la anterior pagina:
* `feature/nombre-de-la-feature` (Ej: `feature/navbar-responsive`)
* `fix/nombre-del-bug` (Ej: `fix/error-formulario-contacto`)
* `docs/descripcion-cambio` (Ej: `docs/agregar-guias-de-pr`)

### 2. Probar ANTES del Pull Request

El propósito de un PR es mostrar un trabajo *terminado y funcional* para que alguien con permisos de contribucion lo revise y lo apruebe, no es un lugar para "ver si funciona" en la rama principal.

#### Prueba Obligatoria

Antes de crear el PR, debes confirmar localmente (en tu máquina) los siguientes puntos:

1. **Revisar que corre sin errores**
    * Revisar si la pagina corre perfectamente. Revisar `npm run dev` o abrir el `index.html`.
    * Revisar la consola en las herramientas de desarrollador del navegador (Preferible navegador basado en chromium)

2. **Revisar estos puntos:**
    * Revisar que los nuevos cambios no rompan algo que *antes* sí funcionaba.
    * Prueba en modo *responsive* (móvil y escritorio).

**Si todo esta bien, crea el Pull Request.**

### 3. Creación del Pull Request (PR)

* **Título Claro:** Debe ser descriptivo (Ej: "Fix: Corrige error de validación en formulario de postulación").
* **Descripción Breve:** Explica *qué* hiciste y, si es necesario, *cómo* probarlo.
