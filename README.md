Anas Barbershop – Full-Stack Web Application

A modern, responsive barbershop website built using React.js, Node.js, Express, and a local JSON database.
The site represents Anas Barbershop, a men-only barber shop located in Bekaa, Lebanon, and follows a professional blue–white–red barber theme.

The project includes a full frontend (React) and backend (Node/Express), API communication, dynamic pages, and deployment on Netlify.
_Project Description:

This project is a complete barbershop website that demonstrates:

Modern web design principles using React.js

Responsive UI/UX across desktop, tablet, and mobile

A backend API that provides services and handles contact form submissions

A dynamic page that fetches data from the backend (/services/:id)

Usage of Git version control and deployment of the frontend using Netlify

This fulfills all required course objectives, including frontend development, responsive design, version control, and deployment.

Setup Instructions
1. Clone the repository:
   git clone https://github.com/Anosass/Anas-Barbershop-web
cd Anas-Barbershop-web
_Backend Setup (Node.js + Express):
_Open terminal:
cd backend
npm install
npm run dev
_Backend runs at:
http://localhost:5000
Endpoints:

GET /api/services – Return all services

GET /api/services/:id – Return one service

POST /api/contact – Save contact form submission

_Frontend Setup (React.js + Bootstrap):
_Open terminal:
cd frontend
npm install
npm start
Frontend runs at:
http://localhost:3000
The frontend communicates with the backend using REST API calls.

_Deployment (Frontend):
The frontend is deployed on Netlify at:
https://chic-elf-dafd71.netlify.app


Images:
_HOME PAGE:
<img width="1314" height="625" alt="image" src="https://github.com/user-attachments/assets/7559cb4c-387d-4af7-9e2e-c51d9c1ff52a" />
<img width="1294" height="613" alt="image" src="https://github.com/user-attachments/assets/381f5883-3fa7-4d6a-b0b0-f3ae0ba4b992" />
<img width="1297" height="604" alt="image" src="https://github.com/user-attachments/assets/4a057afa-0f0e-45b9-ae5e-f5ac3c6cc4ef" />

_Services Page:
<img width="1285" height="604" alt="image" src="https://github.com/user-attachments/assets/2ad8b902-4817-432b-98f2-94a43d1e51a4" />
<img width="1297" height="623" alt="image" src="https://github.com/user-attachments/assets/9eb9592a-ca72-4af0-ba9a-6eef8e14745b" />

_Dynamic Service Details Page:
<img width="1223" height="562" alt="image" src="https://github.com/user-attachments/assets/de84f32f-9226-4deb-ac48-6c5ed4a24ac7" />
<img width="1253" height="587" alt="image" src="https://github.com/user-attachments/assets/b42be035-82f9-4cca-81b8-69a4fb5fea6d" />
<img width="1234" height="533" alt="image" src="https://github.com/user-attachments/assets/0e8fdf6d-046d-445f-8744-99e60ff3bccb" />
<img width="1281" height="623" alt="image" src="https://github.com/user-attachments/assets/6855fe3e-e9d8-4c62-8571-ab360cd33352" />
<img width="1268" height="631" alt="image" src="https://github.com/user-attachments/assets/56d35e79-2309-4aeb-87db-8ffe62e625b5" />

_Contact Page:
<img width="1303" height="631" alt="image" src="https://github.com/user-attachments/assets/aeac3587-61b1-4e1b-8a03-939beed85c21" />

_Author:
Anas

Lebanon – Bekaa
Email: anasassi@gmail.com

_Project Structure:

anas-barbershop/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── database/db.json
│   ├── server.js
│   └── package.json
│
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── styles/
    │   ├── App.js
    │   ├── index.js
    │   └── config.js
    └── package.json












