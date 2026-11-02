# 🏥 Hospital Ramos Mejía — Portal Institucional y Guía al Paciente

[![Vite](https://img.shields.io/badge/Bundler-Vite%208-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/ES6%2B-JavaScript%20Modules-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-Semantic%20%26%20Schema.org-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://schema.org/Hospital)
[![CSS3](https://img.shields.io/badge/CSS3-Modern%20Design%20System-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![Netlify](https://img.shields.io/badge/Deploy-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://www.netlify.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

Portal web institucional moderno, dinámico y accesible para el **Hospital General de Agudos Dr. José María Ramos Mejía**, dependiente del Ministerio de Salud del Gobierno de la Ciudad Autónoma de Buenos Aires (GCABA).

Este desarrollo centraliza los servicios asistenciales, la guía de trámites y turnos para el paciente, el buscador de más de 60 especialidades con planos de ubicación, el directorio telefónico de internos, las actividades de docencia e investigación universitaria (UBA / CODEI) y el recorrido histórico-patrimonial del hospital.

---

## 📑 Tabla de Contenidos

1. [Características Principales](#-características-principales)
2. [Estructura del Proyecto](#-estructura-del-proyecto)
3. [Tecnologías Utilizadas](#-tecnologías-utilizadas)
4. [Instalación y Uso Local](#-instalación-y-uso-local)
5. [Scripts Disponibles](#-scripts-disponibles)
6. [Módulos Destacados](#-módulos-destacados)
7. [SEO y Datos Estructurados](#-seo-y-datos-estructurados)
8. [Despliegue](#-despliegue)
9. [Información Institucional](#-información-institucional)
10. [Licencia](#-licencia)

---

## ✨ Características Principales

- 🚑 **Barra Permanente de Urgencias y Emergencias:**
  - Información de Guardia Médica 24hs (Gral. Urquiza 609).
  - Conexión directa con SAME 107, conmutador central (4127-0200) e Instagram Oficial del hospital.
  - Canales de turnos: Línea 147 (CABA), 0800-999-2727 (PBA) y chatbot BOTI.
- 🩺 **Buscador y Filtrado de 60+ Especialidades Médicas:**
  - Búsqueda en tiempo real por nombre, servicio, ubicación o jefatura.
  - Filtros por categorías (Médica, Quirúrgica, Diagnóstico y Tratamiento, Apoyo y Rehabilitación).
  - Paginación adaptativa (4 resultados en móviles, 12 en escritorio).
  - Ficha interactiva por servicio con planos arquitectónicos (`.gif`) de ubicación por pabellón/piso.
- 👨‍⚕️ **Equipo de Conducción y Autoridades:**
  - Estructura directiva institucional actualizada (Dirección Médica, Subdirección, Gestión Administrativa y Operativa).
- 📰 **Actualidad Institucional y Noticias:**
  - Novedades, convocatorias y mejoras edilicias calculadas dinámicamente según el año en curso.
- 📋 **Guía Integral al Paciente:**
  - Requisitos de atención, canales para solicitar turnos, internación, derechos del paciente y servicio de hemoterapia / donación de sangre.
- 📚 **Docencia, Investigación y Residencias (UBA / CODEI):**
  - Información sobre la Unidad Docente Hospitalaria (UDH), residencias y concurrencias médicas.
  - Comité de Ética en Investigación (CEI) y Comité de Bioética Clínica.
- 📞 **Directorio Telefónico con Protección Anti-Spam:**
  - Tabla interactiva de internos telefónicos y correos electrónicos.
  - Cifrado en Base64 de las casillas de email para evitar bots indexadores y spam, con copiado en un clic y enlace directo.
- 🏛️ **Recorrido Visual e Histórico:**
  - Galería fotográfica con visor modal Lightbox en alta resolución.
- ⚡ **Actualización Dinámica de Estadísticas:**
  - Cálculo automático de años de trayectoria institucional (desde su fundación en 1868) y datos de camas, consultas anuales y egresos.

---

## 📁 Estructura del Proyecto

```text
hospital-ramos-mejia/
├── index.html              # Estructura semántica principal y metatags SEO/SEM
├── main.js                 # Lógica interactiva de interfaz (Navbar, Filtros, Modales, Lightbox)
├── style.css               # Sistema de diseño, variables CSS, layouts y componentes
├── netlify.toml            # Configuración de build y redirecciones SPA para Netlify
├── package.json            # Metadatos del proyecto y dependencias de Vite
│
├── src/
│   ├── hospital-data.js    # Base de datos JSON de especialidades, autoridades, internos y noticias
│   └── ...
│
└── public/
    ├── de/                 # Planos arquitectónicos de especialidades y servicios
    ├── fot/                # Fotografías históricas e institucionales para la galería
    ├── servicios/          # Páginas detalladas de servicios médicos individuales
    ├── hero.jpg            # Fotografía principal de fachada
    ├── logo.png / .svg     # Escudo e isotipo institucional
    └── favicon.svg         # Favicon vectorizado oficial
```

---

## 🛠️ Tecnologías Utilizadas

- **HTML5 Semántico:** Estructura optimizada para accesibilidad, lectores de pantalla y buscadores.
- **CSS3 Moderno:** Variables nativas (`custom properties`), diseño adaptable (*Flexbox* y *CSS Grid*), efectos *glassmorphism*, micro-animaciones fluidas y tipografías Google Fonts (**Outfit** e **Inter**).
- **JavaScript Moderno (ES6+ Modules):** Arquitectura modular desacoplada de datos (`hospital-data.js`) e interactividad (`main.js`).
- **Vite 8:** Entorno de desarrollo ultrarrápido y empaquetador para producción.
- **Schema.org & JSON-LD:** Metadatos estructurados específicos para entidades hospitalarias y geolocalización en Balvanera (Comuna 3).

---

## 🚀 Instalación y Uso Local

### Prerrequisitos
- [Node.js](https://nodejs.org/) (versión 18 o superior recomendada).
- Gestor de paquetes `npm` (incluido con Node.js).

### Pasos

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/Az3r0th6/hospital-ramos-mejia.git
   cd hospital-ramos-mejia
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo local:**
   ```bash
   npm run dev
   ```
   Abre tu navegador en la URL indicada en la terminal (usualmente `http://localhost:5173`).

---

## 📜 Scripts Disponibles

En el archivo [package.json](file:///c:/Users/tinch/OneDrive/Escritorio/Hospital%20Ramos%20Mejia/package.json) se definen los siguientes scripts:

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo local con recarga en caliente (*HMR*). |
| `npm run build` | Compila y optimiza todos los archivos estáticos en la carpeta `dist/`. |
| `npm run preview` | Previsualiza localmente el bundle generado para producción. |
| `npm run deploy` | Compila la aplicación y realiza el despliegue directo a Netlify Production. |

---

## 🧩 Módulos Destacados

### 1. Base de Datos Centralizada (`src/hospital-data.js`)
Todos los datos dinámicos (especialidades, números de teléfono, jefaturas, notas de actualidad, integrantes del comité de docencia y números de internos) se gestionan desde un único archivo, permitiendo actualizaciones rápidas sin necesidad de alterar el maquetado HTML.

### 2. Protección de Correos Electrónicos
Para prevenir el raspado automático (*scraping*) por motores de spam, las direcciones de correo institucional se almacenan codificadas y se descifran exclusivamente mediante interacción del usuario, ofreciendo copiado automático y apertura del cliente de correo nativo.

---

## 🌐 SEO y Datos Estructurados

El portal cuenta con optimización completa para motores de búsqueda (Google, Bing) y plataformas sociales:
- **Metatags Open Graph & Twitter Cards:** Previsualizaciones atractivas al compartir enlaces institucionales.
- **Geo-Tags:** Coordenadas geográficas exactas (`latitude: -34.61864`, `longitude: -58.41113`) en el barrio de Balvanera.
- **JSON-LD Schema.org:** Definición formal de la institución como `Hospital`, especificando líneas de emergencia, horarios 24 horas y especialidades médicas.

---

## ☁️ Despliegue

El proyecto está configurado para desplegarse de manera continua en [Netlify](https://www.netlify.com/) utilizando el archivo [netlify.toml](file:///c:/Users/tinch/OneDrive/Escritorio/Hospital%20Ramos%20Mejia/netlify.toml):

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 📍 Información Institucional

- **Institución:** Hospital General de Agudos Dr. José María Ramos Mejía
- **Dirección:** General Urquiza 609, Balvanera, CABA (C1221ADC)
- **Conmutador Central:** (+54) 11 4127-0200
- **Guardia Médica:** Urgencias las 24 horas (todos los días)
- **SAME:** 107
- **Turnos Telefónicos:** Línea 147 (CABA) / 0800-999-2727 (PBA) / BOTI WhatsApp: +54 9 11 5050-0147

---

## 📄 Licencia

Este proyecto se distribuye bajo la licencia **MIT**. Para más detalles, consulte el archivo `LICENSE` si aplica.
