# 🚧 Smart Road Damage Reporting System - Backend

## 📌 Project Description
This is the backend for the Smart Road Damage Reporting System.
It allows citizens to report road damages and enables authorities to manage and prioritize them.

---

## 🚀 Features
- Email OTP Authentication
- JWT-based Login System
- Role-based Users (Citizen, Admin, Department)
- Complaint Management (Upcoming)
- Upvote System (Upcoming)

---

## 🛠️ Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Nodemailer (OTP Email)

---

## 📂 Folder Structure

smart-road-backend/
│
├── config/
├── controllers/
├── models/
├── routes/
├── .env
├── server.js
└── package.json


---

## ⚙️ Setup Instructions

1. Clone the repository
2. Install dependencies:

npm install


3. Create a `.env` file and add:

MONGO_URI=your_mongodb_connection_string
EMAIL_USER=your_email
EMAIL_PASS=your_app_password
JWT_SECRET=your_secret_key
PORT=5000


4. Start the server:

npx nodemon server.js


Server runs on:
http://localhost:5000


---

## 👨‍💻 Developed By
Dhanish Aadhithya
