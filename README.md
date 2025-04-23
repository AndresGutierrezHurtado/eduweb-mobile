# 🎓 EduWeb Mobile - Educational Platform

[Versión en Español](README.es.md)

[Web Version](https://github.com/AndresGutierrezHurtado/eduweb)

EduWeb is an online educational platform designed to facilitate the creation, management, and consumption of academic content. Its focus is on providing an intuitive experience for students and teachers, with tools such as digital certificates, progress tracking, interactive exams, and graphical visualizations.

![Course Screenshot](/docs/screenshots/profile.png)

---

## 📑 Table of Contents

-   [Main Features](#-main-features)
-   [Tech Stack](#-tech-stack)
-   [Architecture](#️-architecture)
-   [Functional Flows](#-functional-flows)
-   [Project Structure](#️-project-structure)
-   [Installation & Development](#️-installation--development)
-   [Contributing](#-contributing)
-   [Contact](#-contact)

---

## 📚 Main Features

### 🔐 Authentication

-   Secure login using token-based authentication
-   Integration with external providers (Google, GitHub)

![Auth Screenshot](/docs/screenshots/auth.png)

### 👤 Profile System

-   Customizable user profiles
-   View personal information and preferences
-   Full list of enrolled courses per user

![Profile Screenshot](/docs/screenshots/profile.png)

### 🏅 Certificate Generation

-   Automatic digital certificate generation upon course completion
-   Professional design with personalized data (name, course, date)

![Certificates Screenshot](/docs/screenshots/validate.png)

### ✅ Certificate Validation

-   Online validation via unique code or QR scan
-   Public verification of the authenticity of the issued certificate

![Validation Screenshot](/docs/screenshots/validate.png)

### 📊 Analytics and Reports

-   Interactive dashboard with statistical charts
-   Detailed user progress tracking
-   Data visualization with **react-native-chart-kit**

![Progress Screenshot](/docs/screenshots/progress.png)

---

## 🚀 Tech Stack

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

## 🏗️ Architecture

![Architecture](/docs/arquitecture.png)

-   The client app (Expo with React Native) communicates with a **REST API** built using **Next.js**
-   The API handles business logic and connects to a **MySQL** database using the **Sequelize** ORM

---

## 🔄 Functional Flows

### 👨‍🎓 User Flow

-   **Register and log in** securely using token-based authentication
-   **Browse and enroll** in available courses
-   **Track progress** and interact with course content
-   **Generate and download** digital certificates upon course completion
-   **Edit and customize** personal profile information and preferences

---

## 🗂️ Project Structure

```
eduweb/
├── app/                # Main routing and entry point for the Expo application
│
├── assets/             # Static resources (images, icons, fonts, etc.)
├── components/         # Reusable UI components (buttons, forms, etc.)
├── contexts/           # React Contexts for global state management
├── docs/               # Project documentation (screenshots, usage instructions, etc.)
├── hooks/              # Custom React hooks (for business logic or reusable logic)
└── utils/              # Utility functions (helpers, formatters, etc.)
```

---

## ⚙️ Installation & Development

### 🧩 Prerequisites

-   Ensure the Next.js backend is properly configured and running

### 🛠️ Installation Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/AndresGutierrezHurtado/eduweb.git
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Copy the environment file and configure required variables:

    ```bash
    cp .env.example .env
    ```

4. Update the `ipconfig` in the environment variables to match your local setup.

5. Start the application:

    ```bash
    npm start
    ```

6. Open the application in your browser in `http://localhost:8081` typing `w` in the terminal:

---

## 🤝 Contributing

Want to contribute? Thank you! Follow these steps:

1. Fork the repository

2. Create a new branch:

    ```bash
    git checkout -b feature/new-feature
    ```

3. Make your changes and commit:

    ```bash
    git commit -m "Add new feature"
    ```

4. Push your changes:

    ```bash
    git push origin feature/new-feature
    ```

5. Open a **Pull Request**

---

## 📞 Contact

For questions, support, or collaboration, please contact:

-   Andrés Gutiérrez Hurtado
-   Email: [andres52885241@gmail.com](mailto:andres52885241@gmail.com)
-   LinkedIn: [Andrés Gutiérrez](https://www.linkedin.com/in/andr%C3%A9s-guti%C3%A9rrez-hurtado-25946728b/)
-   GitHub: [@AndresGutierrezHurtado](https://github.com/AndresGutierrezHurtado)
-   Portfolio: [Link portfolio](https://andres-portfolio-b4dv.onrender.com)