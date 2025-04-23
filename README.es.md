# 🎓 EduWeb Mobile - Plataforma Educativa

[English Version](README.md)

[Versión para Navegadores](https://github.com/AndresGutierrezHurtado/eduweb)

**EduWeb** es una plataforma educativa en línea diseñada para facilitar la creación, gestión y consumo de contenido académico. Su enfoque está en brindar una experiencia intuitiva tanto para estudiantes como para docentes, con herramientas como certificados digitales, seguimiento de progreso, exámenes interactivos y visualizaciones gráficas.

![Captura del Curso](/docs/screenshots/profile.png)

---

## 📑 Tabla de Contenidos

-   [Características Principales](#-características-principales)
-   [Stack Tecnológico](#-stack-tecnológico)
-   [Arquitectura](#️-arquitectura)
-   [Flujos Funcionales](#-flujos-funcionales)
-   [Estructura del Proyecto](#️-estructura-del-proyecto)
-   [Instalación y Desarrollo](#️-instalación-y-desarrollo)
-   [Contribuciones](#-contribuciones)
-   [Contacto](#-contacto)

---

## 📚 Características Principales

### 🔐 Autenticación

-   Inicio de sesión seguro utilizando autenticación basada en tokens
-   Integración con proveedores externos (Google, GitHub)

![Captura Autenticación](/docs/screenshots/auth.png)

### 👤 Sistema de Perfiles

-   Perfiles de usuario personalizables
-   Visualización de información personal y preferencias
-   Lista completa de cursos inscritos por usuario

![Captura Perfil](/docs/screenshots/profile.png)

### 🏅 Generación de Certificados

-   Generación automática de certificados digitales al completar un curso
-   Diseño profesional con datos personalizados (nombre, curso, fecha)

![Captura Certificados](/docs/screenshots/validate.png)

### ✅ Validación de Certificados

-   Validación en línea mediante código único o escaneo QR
-   Verificación pública de la autenticidad del certificado emitido

![Captura Validación](/docs/screenshots/validate.png)

### 📊 Analíticas e Informes

-   Panel interactivo con gráficos estadísticos
-   Seguimiento detallado del progreso del usuario
-   Visualización de datos con **react-native-chart-kit**

![Captura Progreso](/docs/screenshots/progress.png)

---

## 🚀 Stack Tecnológico

### Frontend

-   **Expo 52**
-   **React 18**
-   **Tailwind CSS v3**
-   **react-native-chart-kit**
-   **Valibot**

### Backend

-   **Next.js 15 (App Router)**
-   **MySQL**
-   **Sequelize ORM**
-   **JWT (JSON Web Tokens)**

---

## 🏗️ Arquitectura

![Arquitectura](/docs/arquitecture.png)

-   La aplicación cliente (Expo con React Native) se comunica con una **API REST** construida con **Next.js**
-   La API maneja la lógica de negocio y se conecta a una base de datos **MySQL** usando **Sequelize**

---

## 🔄 Flujos Funcionales

### 👨‍🎓 Flujo del Usuario

-   **Registrarse e iniciar sesión** de forma segura utilizando autenticación basada en tokens
-   **Explorar e inscribirse** en los cursos disponibles
-   **Seguir el progreso** e interactuar con el contenido del curso
-   **Generar y descargar** certificados digitales al finalizar un curso
-   **Editar y personalizar** la información y preferencias del perfil personal

---

## 🗂️ Estructura del Proyecto

```
eduweb/
├── app/                # Enrutamiento principal y punto de entrada para la aplicación Expo
│
├── assets/             # Recursos estáticos (imágenes, íconos, fuentes, etc.)
├── components/         # Componentes UI reutilizables (botones, formularios, etc.)
├── contexts/           # Contextos de React para manejo de estado global
├── docs/               # Documentación del proyecto (capturas, instrucciones, etc.)
├── hooks/              # Hooks personalizados de React (para lógica de negocio o reutilizable)
└── utils/              # Funciones utilitarias (helpers, formateadores, etc.)
```

---

## ⚙️ Instalación y Desarrollo

### 🧩 Requisitos Previos

-   Asegúrate de que el backend con Next.js esté correctamente configurado y ejecutándose

### 🛠️ Pasos de Instalación

1. Clonar el repositorio:

    ```bash
    git clone https://github.com/AndresGutierrezHurtado/eduweb.git
    ```

2. Instalar dependencias:

    ```bash
    npm install
    ```

3. Copiar el archivo de entorno y configurar las variables requeridas:

    ```bash
    cp .env.example .env
    ```

4. Actualizar el `ipconfig` en las variables de entorno con tu configuración local.

5. Iniciar la aplicación:

    ```bash
    npm start
    ```

6. Abrir la aplicación en tu navegador en `http://localhost:8081` escribiendo `w` en la terminal:

---

## 🤝 Contribuciones

¿Quieres contribuir? ¡Gracias! Sigue estos pasos:

1. Haz un fork del repositorio

2. Crea una nueva rama:

    ```bash
    git checkout -b feature/nueva-funcionalidad
    ```

3. Realiza tus cambios y haz commit:

    ```bash
    git commit -m "Agregar nueva funcionalidad"
    ```

4. Sube tus cambios:

    ```bash
    git push origin feature/nueva-funcionalidad
    ```

5. Abre un **Pull Request**

---

## 📞 Contacto

Para preguntas, soporte o colaboración, por favor contacta:

-   Andrés Gutiérrez Hurtado
-   Email: [andres52885241@gmail.com](mailto:andres52885241@gmail.com)
-   LinkedIn: [Andrés Gutiérrez](https://www.linkedin.com/in/andr%C3%A9s-guti%C3%A9rrez-hurtado-25946728b/)
-   GitHub: [@AndresGutierrezHurtado](https://github.com/AndresGutierrezHurtado)
-   Portafolio: [Link portafolio](https://andres-portfolio-b4dv.onrender.com)
