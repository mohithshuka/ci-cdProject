# CI/CD Project — Full Stack Node.js with Docker & GitHub Actions

> A production-ready full stack application with a complete CI/CD pipeline — automatically builds, containerizes and validates every code change using GitHub Actions and Docker.

![CI Pipeline](https://github.com/mohithshuka/ci-cdProject/actions/workflows/main.yml/badge.svg)
![Node.js](https://img.shields.io/badge/Node.js-18-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-Backend-000000?logo=express&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?logo=docker&logoColor=white)
![Docker Compose](https://img.shields.io/badge/Docker--Compose-Orchestrated-2496ED?logo=docker&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-Automated-2088FF?logo=github-actions&logoColor=white)
![HTML](https://img.shields.io/badge/HTML-Frontend-E34F26?logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Language-F7DF1E?logo=javascript&logoColor=black)

---

## What This Project Does

Every time code is pushed to `main`:

```
git push → GitHub Actions triggers → dependencies install → Docker image builds → app is ready
```

**No manual builds. No manual deployments. Everything is automated.**

---

## Live Demo Architecture

```
┌─────────────────────────────────────────────────────┐
│                   Developer                          │
│                      │                               │
│                 git push                             │
│                      │                               │
│                      ▼                               │
│           GitHub Repository                          │
│                      │                               │
│            triggers automatically                    │
│                      │                               │
│                      ▼                               │
│    ┌─────────────────────────────────────┐           │
│    │     GitHub Actions CI Pipeline       │           │
│    │                                      │           │
│    │  1. Checkout code                    │           │
│    │  2. Setup Node.js environment        │           │
│    │  3. Install dependencies (npm ci)    │           │
│    │  4. Build Docker image               │           │
│    │  5. Verify build success             │           │
│    └─────────────────────────────────────┘           │
│                      │                               │
│                      ▼                               │
│    ┌─────────────────────────────────────┐           │
│    │         Docker Container             │           │
│    │                                      │           │
│    │  ┌──────────────┐ ┌──────────────┐  │           │
│    │  │   Backend    │ │   Frontend   │  │           │
│    │  │  (Node.js +  │ │  (HTML UI)   │  │           │
│    │  │   Express)   │ │              │  │           │
│    │  │  port: 3000  │ │              │  │           │
│    │  └──────────────┘ └──────────────┘  │           │
│    └─────────────────────────────────────┘           │
└─────────────────────────────────────────────────────┘
```

---

## Project Structure

```
ci-cdProject/
├── .github/
│   └── workflows/
│       └── main.yml          # GitHub Actions CI pipeline
├── backend/
│   ├── app.js                # Node.js + Express server
│   ├── package.json          # Dependencies
│   └── package-lock.json
├── frontend/
│   └── index.html            # Frontend UI
├── Dockerfile                # Container build config
├── docker-compose.yml        # Multi-container orchestration
├── .gitignore
└── README.md
```

---

## Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Backend | Node.js + Express | REST API server |
| Frontend | HTML | User interface |
| Containerization | Docker | Portable app packaging |
| Orchestration | Docker Compose | Multi-service management |
| CI Pipeline | GitHub Actions | Auto build on every push |
| Version Control | Git + GitHub | Source code management |

---

## Getting Started

### Prerequisites

```bash
node --version    # v14 or higher
docker --version  # any version
git --version     # any version
```

### 1. Clone the repository

```bash
git clone https://github.com/mohithshuka/ci-cdProject.git
cd ci-cdProject
```

### 2. Run locally without Docker

```bash
cd backend
npm install
node app.js
```

Open in browser: `http://localhost:3000`

### 3. Run with Docker

```bash
# Build the image
docker build -t cicd-app .

# Run the container
docker run -p 3000:3000 cicd-app
```

Open in browser: `http://localhost:3000`

### 4. Run with Docker Compose

```bash
docker-compose up
```

Open in browser: `http://localhost:3000`

To stop:

```bash
docker-compose down
```

---

## CI/CD Pipeline

The GitHub Actions workflow runs automatically on every push to `main`:

```yaml
# .github/workflows/main.yml

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - Checkout code
      - Setup Node.js
      - Install dependencies
      - Build Docker image
```

### Pipeline Status

| Step | Description | Status |
|------|-------------|--------|
| Checkout | Pull latest code | Automated |
| Node Setup | Configure Node.js env | Automated |
| Install | `npm install` dependencies | Automated |
| Docker Build | Build production image | Automated |

Every green checkmark on GitHub means the app builds successfully and is ready to deploy.

---

## Docker Configuration

### Dockerfile

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY backend/package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "backend/app.js"]
```

### Docker Compose

```yaml
services:
  app:
    build: .
    ports:
      - "3000:3000"
```

---

## Roadmap

- [ ] Push Docker images to Docker Hub or GHCR
- [ ] Add automated Jest test suite
- [ ] Deploy to AWS EC2 or Railway
- [ ] Kubernetes deployment with HPA auto-scaling
- [ ] Prometheus + Grafana monitoring stack
- [ ] ArgoCD GitOps continuous delivery

---

## Key Learnings

- GitHub Actions triggers automatically on `git push` — no manual steps needed
- Docker ensures the app runs identically on every machine
- Docker Compose simplifies running multi-service applications locally
- CI pipelines catch broken builds before they reach production
- Separating `backend/` and `frontend/` keeps the codebase clean and scalable

---

## Author

**Mohith Shuka**
GitHub: [@mohithshuka](https://github.com/mohithshuka)

---

## License

MIT

---

> If you found this project useful, consider giving it a star!
