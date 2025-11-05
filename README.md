Coffee Shop App

A full-stack coffee shop system built with React Native (Expo) for the frontend and Node.js + Express + MongoDB for the backend.
This app lets users explore a coffee menu, view details, and connect to a backend database hosted on MongoDB Atlas.

 Features

Full Menu View – Displays coffee and pastry items from the MongoDB database

 Navigation – Simple and smooth stack navigation between screens

 Backend API – Built with Express.js and connected to MongoDB Atlas

RESTful Routes – Supports GET and POST for menu management

Persistent Data – Menu data stored in the cloud via MongoDB Atlas

Environment Variables – Secure connection using .env file

Tech Stack

Frontend

React Native (Expo)

React Navigation

Backend

Node.js

Express.js

Mongoose

MongoDB Atlas

Project Structure
coffee-shop-app/
│
├── coffee_shop/                 # Main project folder
│   ├── backend/                 # Express server & routes
│   │   ├── server.js
│   │   ├── models/
│   │   ├── routes/
│   │   └── .env
│   │
│   └── frontend/                # React Native app
│       ├── App.js
│       └── src/
│           └── screens/
│               └── HomeScreen.js
│
└── README.md

Setup Instructions
Backend Setup
cd coffee_shop/backend
npm install
node server.js


Make sure you set your MongoDB URI in .env:

MONGO_URI=mongodb+srv://youruser:yourpassword@cluster.mongodb.net/?appName=coffeeshop

Frontend Setup
cd coffee_shop/frontend
npm install
npm start


or if using Expo:

npx expo start

API Endpoints
Method	Endpoint	Description
GET	/menu	Fetch all coffee items
POST	/menu	Add new coffee items
Preview

(Add screenshots of your app UI here)
You can drag and drop images into this README on GitHub to upload them.

Author

Maaz Bin Jameel Khattak
