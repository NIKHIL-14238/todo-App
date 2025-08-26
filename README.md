# 📝 Todo App  

[![Made with React](https://img.shields.io/badge/Made%20with-React-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)  
[![Backend Express](https://img.shields.io/badge/Backend-Express.js-000000?logo=express&logoColor=white)](https://expressjs.com/)  
[![Database MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)  
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com/)  
[![Deployed on Render](https://img.shields.io/badge/Backend%20Hosted%20on-Render-46E3B7?logo=render&logoColor=white)](https://render.com/)  

A simple and user-friendly **Todo Application** built with the **MERN stack** (MongoDB, Express, React, Node.js).  
This app allows users to add, view, and mark their tasks as completed.  

🔗 **Live Demo:** [Todo App](https://todo-app-rosy-gamma-61.vercel.app)  

---

## 🚀 Features  
- ✍️ Create a new todo with **title** and **description**  
- 👀 View all existing todos  
- ✅ Mark a todo as completed  
- ⚡ Simple and responsive UI  

---

## 🛠️ Tech Stack  
- **Frontend:** React, CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Deployment:** Vercel (Frontend), Render (Backend)  

---

## 📸 Screenshots  
![Todo App Screenshot](https://github.com/user-attachments/assets/b43c33dc-3716-49ff-a298-31a06a234d0a)  

---

## ⚙️ Installation & Setup  

Run the following commands step by step 👇  

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/todo-App.git
cd todo-App

# 2. Install dependencies for backend
cd backend
npm install

# 3. Install dependencies for frontend
cd ../frontend
npm install

# 4. Create environment variables (inside backend folder)
echo "MONGO_URI=your_mongodb_connection_string" >> ../backend/.env
echo "PORT=5000" >> ../backend/.env

# 5. Start backend server
cd ../backend
npm start

# 6. Open a new terminal and start frontend
cd ../frontend
npm start
