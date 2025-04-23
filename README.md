# 🎓 EduWeb Mobile - Plataforma Educativa

[English Version](README.md)

[Versión para Navegadores](https://github.com/AndresGutierrezHurtado/eduweb)

EduWeb es una plataforma educativa en línea diseñada para facilitar la creación, gestión y consumo de contenido académico. Su enfoque se centra en una experiencia intuitiva para estudiantes y profesores, con herramientas como certificaciones digitales, seguimiento del progreso, exámenes interactivos y visualizaciones gráficas.

![Course Screenshot](/docs/screenshots/profile.png)

---

## 📑 Tabla de Contenido

-   [Stack Tecnológico](#-stack-tecnológico)
-   [Características Principales](#-características-principales)
-   [Arquitectura](#️-arquitectura)
-   [Instalación y Desarrollo](#️-instalación-y-desarrollo)
-   [Estructura del Proyecto](#️-estructura-del-proyecto)
-   [Contribución](#-contribución)
-   [Flujos Funcionales](#-flujos-funcionales)
-   [Contacto](#-contacto)

---

## 📚 Características Principales

### 🔐 Autenticación

-   Inicio de sesión seguro mediante autenticación basada en tokens
-   Integración con proveedores externos (Google, GitHub)

![Profile Screenshot](/docs/screenshots/auth.png)

### 👤 Sistema de Perfiles

-   Perfiles personalizables por el usuario
-   Visualización de información personal y preferencias
-   Listado completo de inscripciones a cursos por usuario

![Profile Screenshot](/docs/screenshots/profile.png)

### 🏅 Generación de Certificados

-   Generación automática de certificados digitales al completar un curso
-   Diseño profesional y datos personalizados (nombre, curso, fecha)

![Certificates Screenshot](/docs/screenshots/validate.png)

### ✅ Validación de Certificados

-   Validación en línea mediante código único o escaneo de QR
-   Verificación pública de la autenticidad del certificado emitido

![Validation Screenshot](/docs/screenshots/validate.png)

### 📊 Análisis y Reportes

-   Dashboard interactivo con gráficos estadísticos
-   Seguimiento detallado del progreso del usuario
-   Visualización de datos con **Chart.js**

![Progress Screenshot](/docs/screenshots/progress.png)

---

## 🚀 Stack Tecnológico

### Frontend

-   **Expo 52**
-   **React 18**
-   **Tailwind CSS v3**
-   **react-native-chart-kit**
-   **Valibot**

---

## 🏗️ Arquitectura

![Arquitectura](/docs/arquitecture.png)

-   La aplicación cliente (Expo con React Native) se comunica con una **API REST** construida con **Next.js**
-   La API maneja la lógica de negocio y se conecta a una base de datos **MySQL** mediante el ORM **Sequelize**

---

## ⚙️ Instalación y Desarrollo

### 🧩 Requisitos Previos

-   Tener el backend de Next.js configurado y ejecutándose correctamente

### 🛠️ Pasos de Instalación

1. Descarga y descomprime el proyecto:

2. Instala las dependencias:

```bash
npm install
```

3. Copia el archivo de entorno y configura las variables necesarias:

```bash
cp .env.example .env
```

4. Ejecuta las migraciones de Sequelize:

```bash
npm start
```

---

## 🗂️ Estructura del Proyecto

```
eduweb/
│   app/                # Enrutamiento principal de Expo
│   components/         # Componentes reutilizables
│   hooks/              # Hooks personalizados
│   assets/             # Recursos estáticos (imágenes, íconos, etc.)
```

---

## 🤝 Contribución

¿Quieres colaborar? ¡Gracias! Sigue estos pasos:

1. Haz un fork del repositorio
2. Crea una nueva rama:
    ```bash
    git checkout -b feature/nueva-funcionalidad
    ```
3. Realiza tus cambios y haz commit:
    ```bash
    git commit -m "Agrega nueva funcionalidad"
    ```
4. Sube tus cambios:
    ```bash
    git push origin feature/nueva-funcionalidad
    ```
5. Abre un **Pull Request**

---

## 🔄 Flujos Funcionales

### 👨‍🎓 Usuario

-   Registro e inicio de sesión
-   Visualización de cursos disponibles
-   Descarga de certificados
-   Edición de perfil de usuario

---

## 📞 Contacto

Para soporte, dudas o sugerencias, puedes comunicarte a través de:

-   **Correo electrónico**: andres52885241@gmail.com
-   **Teléfono**: +57 320 9202177
