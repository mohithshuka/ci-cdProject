#  CI/CD Pipeline with Node.js, Docker, and GitHub Actions

This project demonstrates a **complete CI/CD pipeline** for a Node.js application using **Docker** and **GitHub Actions**.
The pipeline automatically builds and validates the application whenever code is pushed to the repository.

The goal of this project is to show how modern DevOps practices can automate software integration and containerization.

---

##  Project Overview

This repository contains a simple Node.js application that serves a frontend webpage.
The application is containerized using Docker and integrated with a CI pipeline using GitHub Actions.

Whenever a developer pushes code to the `main` branch:

1. GitHub Actions triggers the CI workflow
2. Dependencies are installed
3. The Docker image is built automatically
4. The pipeline verifies the build process

This ensures that every change to the repository is automatically tested and built.

---

##  Project Architecture

```
Developer Push
      │
      ▼
GitHub Repository
      │
      ▼
GitHub Actions CI Pipeline
      │
      ▼
Install Dependencies
      │
      ▼
Build Docker Image
      │
      ▼
Application Ready for Deployment
```

---

## 📂 Project Structure

```
ci-cdProject
│
├── .github
│   └── workflows
│        └── main.yml        # CI/CD pipeline configuration
│
├── backend
│   ├── app.js               # Node.js server
│   ├── package.json
│   └── package-lock.json
│
├── frontend
│   └── index.html           # Simple frontend UI
│
├── Dockerfile               # Docker image configuration
├── docker-compose.yml       # Container orchestration
├── .gitignore
└── README.md
```

---

## ⚙️ Technologies Used

* Node.js
* Docker
* Docker Compose
* GitHub Actions
* Express.js
* HTML

---

## 🔧 How to Run the Project Locally

### 1️⃣ Clone the Repository

```
git clone https://github.com/mohithshuka/ci-cdProject.git
cd ci-cdProject
```

### 2️⃣ Install Dependencies

```
cd backend
npm install
```

### 3️⃣ Run the Application

```
node app.js
```

Open in browser:

```
http://localhost:3000
```

---

## 🐳 Running with Docker

Build Docker image:

```
docker build -t cicd-app .
```

Run container:

```
docker run -p 3000:3000 cicd-app
```

---

##  CI Pipeline Workflow

The CI workflow runs automatically when code is pushed to the `main` branch.

Pipeline steps:

1. Checkout repository
2. Setup Node.js environment
3. Install dependencies
4. Build Docker image

Workflow file:

```
.github/workflows/main.yml
```

---

##  Future Improvements

Possible improvements for this project:

* Push Docker images to Docker Hub
* Automatic deployment to AWS EC2
* Kubernetes deployment
* Monitoring with Prometheus & Grafana
* Add automated testing

---

## 🎯 Learning Objectives

This project demonstrates:

* CI/CD pipeline setup
* Docker containerization
* GitHub Actions automation
* DevOps workflow integration

---

##  Author

**Mohith Shuka**

GitHub:
https://github.com/mohithshuka

---

⭐ If you found this project useful, consider giving it a star!
