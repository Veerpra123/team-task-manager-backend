# 🚀 Team Task Manager Backend

Backend API for a team task management system built with Node.js, Express.js, Prisma ORM, and PostgreSQL. The application provides authentication, role-based access control, project management, task assignment, and dashboard analytics.

---

## 🌐 Live API

https://team-task-manager-backend-production-11f7.up.railway.app

---

## 📌 Features

* JWT Authentication & Authorization
* Role-Based Access Control (Admin / Member)
* User Management
* Project Management
* Task Creation & Assignment
* Task Status Tracking
* Dashboard Analytics
* PostgreSQL Database Integration
* Prisma ORM
* RESTful API Architecture

---

## 🛠️ Tech Stack

### Backend

* Node.js
* Express.js

### Database

* PostgreSQL
* Prisma ORM

### Authentication

* JWT (JSON Web Tokens)

### Deployment

* Railway

---

## 📂 Project Structure

```text
src/
│
├── controllers/
│   ├── auth.controller.js
│   ├── dashboard.controller.js
│   ├── project.controller.js
│   └── task.controller.js
│
├── middleware/
│   ├── auth.middleware.js
│   └── role.middleware.js
│
├── routes/
│   ├── auth.routes.js
│   ├── dashboard.routes.js
│   ├── project.routes.js
│   ├── task.routes.js
│   └── user.routes.js
│
├── app.js
└── server.js
```

---

## 🔐 Core Modules

### Authentication

* User Registration
* User Login
* JWT Token Generation

### Projects

* Create Project
* Manage Projects
* Track Project Progress

### Tasks

* Create Tasks
* Assign Tasks
* Update Task Status
* Monitor Completion

### Dashboard

* Total Tasks
* Completed Tasks
* Pending Tasks
* Overdue Tasks

---

## 🏗️ Architecture

```text
Client Application
        ↓
Express REST API
        ↓
Authentication Middleware
        ↓
Controllers
        ↓
Prisma ORM
        ↓
PostgreSQL Database
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Veerpra123/team-task-manager-backend.git
cd team-task-manager-backend
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file:

```env
DATABASE_URL=
JWT_SECRET=
PORT=5000
```

### Prisma Setup

```bash
npx prisma generate
npx prisma db push
```

### Run Server

```bash
npm start
```

---

## 🚀 Future Enhancements

* Email Notifications
* Team Invitations
* Activity Logs
* File Attachments
* Real-Time Updates with Socket.IO
* API Documentation using Swagger

---

## 👨‍💻 Author

**Veer Pratap Yadav**

GitHub: https://github.com/Veerpra123

LinkedIn: https://www.linkedin.com/in/veer-pratap-yadav-a697a025b
