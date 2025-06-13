# Anchor Bytes Personal Website

This project consists of:
- A **React frontend** with explaination of company
- A **Node.js backend API** that receives form data and saves it to a local file

---

## 📁 Project Structure

project-root/<br />
├── backend/ # Node.js server<br />
│ └── server.js<br />
├── frontend/ # React frontend<br />
│ ├── public/<br />
│ ├── src/<br />
│ └── package.json<br />
├── README.md<br />



---

## 🚀 Setup Instructions

### 1️⃣ Backend (Node.js)

#### ✅ Requirements
- Node.js installed (https://nodejs.org)

#### 📦 Install Dependencies

    cd back
    npm install


▶️ Run the Server

    node server.js

The server runs on: http://localhost:3000
All submitted contact messages will be saved to backend/messages.txt

2️⃣Frontend (React)
✅ Requirements

Node.js installed

npm or yarn

📦Install Dependencies

    cd frontend-test
    npm install

▶️ Run the App

    npm start

The app will be available at: http://localhost:3001 (or another port if 3000 is used)

⚙️ Notes
The React form sends a POST request to the Node.js server at http://localhost:3000/contact

Make sure the backend is running before submitting the form

CORS is enabled on the backend to allow requests from the frontend





