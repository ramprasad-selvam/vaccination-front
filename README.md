# 💉 Vaccine and Immunization Tracking System (POC)

This project is a full-stack application designed to track and manage vaccinations for patients. It allows healthcare providers to record and view vaccination history, and patients to monitor their own records.

---

## 🧩 System Architecture Overview

### 🔧 Tech Stack

**Frontend**  
- React.js + Vite  
- Redux Toolkit  
- TailwindCSS  
- Material UI (MUI)

**Backend**  
- Node.js + Express.js  

**Database**  
- MongoDB (via Mongoose)  

**Authentication & Security**  
- JWT (Login/Auth middleware)  
- Bcrypt (Password hashing)

---

## 📁 MongoDB Collections Schema

### 1. `users`
```json
{
  _id: ObjectId,
  username: String,
  email: String,
  password: String, // hashed with bcrypt
  role: String, // 'provider' | 'patient',
  createdAt: Date,
  updatedAt: Date
}
