# Bomberos 2025

# 🚒 Primera Compañía de Bomberos de Temuco - Web 2025 (Proyecto Académico)

[![Estado del Proyecto](https://img.shields.io/badge/Estado-En%20Desarrollo-yellow.svg)](https://github.com/SausageFrog/bomberos-2025/actions)
[![Licencia](https://img.shields.io/badge/Licencia-MIT-blue.svg)](LICENSE)

## ✨ Resumen Ejecutivo

Este proyecto consiste en el desarrollo de una **Single Page Application (SPA)** responsiva y optimizada bajo la metodología **Mobile-First** para la Primera Compañía de Bomberos de Temuco. El objetivo central es la integración de servicios digitales para fortalecer la conexión comunitaria, la transparencia operativa y la sostenibilidad financiera de la institución mediante herramientas web modernas.

## 🛠️ Stack Tecnológico

| Componente | Tecnología Clave | Propósito |
| :--- | :--- | :--- |
| **Arquitectura** | Single Page Application (SPA) | Experiencia de usuario fluida y dinámica sin recargas. |
| **Estilo/Diseño** | HTML5, CSS3 (Flexbox/Grid) | Estructura semántica y diseño responsivo adaptable. |
| **Lógica** | JavaScript (ES6+) | Gestión de la interacción del usuario, API y DOM. |
| **Integraciones** | Broadcastify API & WebPay | Streaming de audio en tiempo real y pasarela de pagos. |

## 🎯 Funcionalidades Implementadas

La plataforma aborda tres áreas funcionales críticas para la modernización institucional:

1.  **Módulo de Audio en Vivo (Radio):** Integración de un reproductor embebido de baja latencia conectado a la API de **Broadcastify**, permitiendo a la comunidad escuchar la frecuencia de despacho en tiempo real.
2.  **Sistema de Donaciones (Crowdfunding):** Interfaz segura para la captación de recursos, ofreciendo modalidades de **suscripción mensual** y **donaciones únicas**, integradas mediante estándares PCI DSS.
3.  **Directorio Interactivo del Cuerpo:** Visualización tipo grilla de todas las compañías de Temuco, presentando identidad visual (logos) y **enrutamiento directo** a sus sitios web oficiales para fomentar la colaboración.

## 🚀 Instalación y Despliegue

Para ejecutar el entorno de desarrollo local, asegúrese de tener **Node.js** instalado y siga los siguientes comandos:

```bash
# 1. Clonar el repositorio
git clone [https://github.com/SausageFrog/bomberos-2025.git](https://github.com/SausageFrog/bomberos-2025.git)

# 2. Navegar al directorio del proyecto
cd bomberos-2025

# 3. Instalar dependencias del proyecto
npm install

# 4. Iniciar el servidor de desarrollo local
npm run dev
