# 🎓 EduWeb Mobiile - Plataforma Educativa

**EduWeb Mobile** es una plataforma educativa moderna y robusta, desarrollada para ofrecer una buena experiencia de aprendizaje. Incorpora un sistema de certificaciones digitales, gráficas interactivas para el seguimiento del progreso del estudiante y una interfaz intuitiva que facilita la creación y gestión de usuarios.

![Course Screenshot](/docs/screenshots/profile.png)

## 📑 Tabla de Contenido

- [🚀 Stack Tecnológico](#-stack-tecnológico)
- [📚 Características Principales](#-características-principales)
- [🏗️ Arquitectura](#-arquitectura)
- [⚙️ Instalación y Desarrollo](#️-instalación-y-desarrollo)
- [🗂️ Estructura del Proyecto](#-estructura-del-proyecto)
- [🤝 Contribución](#-contribución)
- [🔄 Flujos Funcionales](#-flujos-funcionales)
- [📞 Contacto](#-contacto)

---

## 🚀 Stack Tecnológico

### Frontend

- **Expo 52**
- **React 18**
- **Tailwind CSS v3**
- **react-native-chart-kit**
- **Valibot**

---

## 📚 Características Principales

### 🔐 Autenticación y Usuarios

- Sistema de autenticación basado en tokens
- Perfiles de usuario personalizables

![Auth Screenshot](/docs/screenshots/auth.png)

### 🏅 Certificados

- Generación y validación de certificados digitales

![Certificates Screenshot](/docs/screenshots/validate.png)

### 📊 Análisis y Reportes

- Dashboard interactivo con gráficos
- Estadísticas detalladas del progreso del usuario
- Visualización de datos con **Chart.js**

![Progress Screenshot](/docs/screenshots/progress.png)

---

## 🏗️ Arquitectura

![Arquitectura](/docs/arquitecture.png)

- La aplicación cliente (Expo con React Native) se comunica con una **API REST** construida con **Next.js**
- La API maneja la lógica de negocio y se conecta a una base de datos **MySQL** mediante el ORM **Sequelize**

---

## ⚙️ Instalación y Desarrollo

### 🧩 Requisitos Previos

- Tener el backend de Next.js configurado y ejecutándose correctamente

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

- Registro e inicio de sesión
- Visualización de cursos disponibles
- Descarga de certificados
- Edición de perfil de usuario

---

## 📞 Contacto

Para soporte, dudas o sugerencias, puedes comunicarte a través de:

- **Correo electrónico**: andres52885241@gmail.com  
- **Teléfono**: +57 320 9202177
