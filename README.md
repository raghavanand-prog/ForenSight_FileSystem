# 🛡️ ForenSight - Digital Forensics File System Inspector

A Full Stack Digital Forensics application developed using **React**, **Express.js**, and **Node.js Core Modules**. The project demonstrates file system operations, REST APIs, and system information retrieval through a modern web interface.

---

## 📌 Features

### 🖥️ System Information
- View Hostname
- Platform Information
- CPU Architecture
- CPU Cores
- Total Memory
- Free Memory
- System Uptime

### 📄 Evidence Report Management
- Create Evidence Report
- Read Evidence Report
- Append Investigation Notes
- Delete Evidence Report

### 📂 File Information
- View File Name
- File Extension
- Directory Path
- File Size
- Created Date
- Modified Date
- Rename Evidence Report

---

## 🚀 Technologies Used

### Frontend
- React.js
- React Router DOM
- Axios
- Tailwind CSS
- Vite

### Backend
- Node.js
- Express.js
- Express Router

### Node.js Core Modules
- fs (File System)
- path
- os

---

## 📡 REST API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | / | Backend Status |
| GET | /system | System Information |
| GET | /report | Read Evidence Report |
| POST | /report | Create Evidence Report |
| PUT | /report | Append Investigation Notes |
| DELETE | /report | Delete Evidence Report |
| GET | /file-info | File Information |
| GET | /files | List Report Files |
| PUT | /rename-report | Rename Report File |

---

## 📁 Project Structure

```
ForenSight_FileSystem
│
├── backend
│   ├── reports
│   ├── routes
│   │   ├── fileRoutes.js
│   │   ├── reportRoutes.js
│   │   └── systemRoutes.js
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── src
│   │   ├── api
│   │   ├── components
│   │   ├── pages
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/raghavanand-prog/ForenSight_FileSystem.git
```

### Backend

```bash
cd backend
npm install
npm start
```

Server runs at:

```
http://localhost:3000
```

---

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Application runs at:

```
http://localhost:5173
```

---

## 📸 Application Modules

- 🏠 Home
- 🖥️ System Scan
- 📄 Evidence Report
- 📂 File Information
- ℹ️ About

---

## 🎯 Learning Outcomes

This project demonstrates:

- React Components
- React Router
- Axios API Calls
- Express.js Server
- Express Router
- REST API Design
- File System Operations
- Path Module
- Operating System Module
- CRUD Operations
- Full Stack Integration

---

## 👨‍💻 Developer

**Raghav Anand**

GitHub: https://github.com/raghavanand-prog

---

## 📄 License

This project is developed for academic learning purposes.