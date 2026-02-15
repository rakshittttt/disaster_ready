# 🌪️ Disaster Ready – Smart Disaster Assistance Platform

![Disaster Ready Banner](https://img.shields.io/badge/Disaster%20Ready-Emergency%20Assistance-red?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)
![Made With](https://img.shields.io/badge/Made%20With-JavaScript-yellow?style=for-the-badge)
![Platform](https://img.shields.io/badge/Platform-Web%20App-blue?style=for-the-badge)

---

## 📌 About the Project

**Disaster Ready** is a smart disaster assistance platform designed to provide **early warnings**, **emergency SOS communication**, and **rescue coordination** during natural disasters.

It focuses on solving a major problem:  
👉 *During disasters, people fail to get timely alerts, cannot contact help due to network issues, and rescue coordination becomes slow.*

This platform aims to provide **fast support, offline helplines, location sharing, and community updates** in one place.

---

## 🚀 Key Features

### 🔔 Early Disaster Alerts
✅ Location-based disaster alerts  
✅ Probabilistic warnings (preparedness-focused, not exact predictions)  
✅ Uses weather/public datasets  

---

### 🧍 User Registration System
Users register by entering:

- City  
- Phone Number  
- Two emergency contacts:
  - **Emergency Contact 1 (Same City)**
  - **Emergency Contact 2 (Outside City)**

User classification is also collected:
- Normal Adult  
- Pregnant Woman  
- Elderly  
- Disabled  

---

### 🔴 Emergency Mode (SOS System)
In emergency situations, users can enable **Emergency Mode** which provides:

✅ "I Need Help" button  
✅ "I'm Safe" button  
✅ Nearby active helpline numbers  
✅ Location sharing for rescue support  

---

### 📍 Auto Silent Emergency Alert
If the user enters Emergency Mode OR does not respond for a fixed time:

📩 The app automatically sends alert messages to emergency contacts including:

- User’s last known location  
- Time of last activity  
- Emergency status  

---

### 📶 Offline Helpline Support
During disasters internet often fails.  
So Disaster Ready provides:

✅ Offline access to saved emergency contacts  
✅ Offline helpline numbers (police, ambulance, disaster response)  

---

### 🧑‍🤝‍🧑 Community Updates (Reddit-style System)
Users can join location-based communities and share real-time updates like:

- "MG Road is blocked"
- "Flood water rising near bridge"
- "Shelter open at school ground"
- "Avoid this area"

This helps people make better decisions quickly.

---

## 🛠️ Tech Stack

| Technology | Use |
|----------|-----|
| HTML / CSS | UI Design |
| JavaScript | Functionality |
| Node.js | Backend |
| Express.js | Server APIs |
| MongoDB / Firebase | Database (optional) |
| OpenWeather API | Weather & alert data |
| Geolocation API | Location-based services |

---

## 📂 Project Structure

```bash
Disaster-Ready/
│
├── client/                  # Frontend
│   ├── src/
│   ├── public/
│   ├── index.html
│   └── package.json
│
├── server/                  # Backend
│   ├── routes/
│   ├── controllers/
│   ├── storage/
│   ├── index.ts
│   └── package.json
│
├── README.md
└── .gitignore
```bash
```

⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/rakshittttt/disaster_ready/tree/main
cd disaster-ready

2️⃣ Run Frontend (Client)
cd client
npm install
npm run dev

3️⃣ Run Backend (Server)

Open a new terminal:

cd server
npm install
npm run dev


🔑 Environment Variables Setup

Create .env file inside the backend folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string
OPENWEATHER_API_KEY=your_openweather_api_key
JWT_SECRET=your_secret_key

🖼️ Screenshots

📌 Registration page:

<img width="369" height="708" alt="image" src="https://github.com/user-attachments/assets/3248b3c5-8fd4-4c9e-b692-fade83bedfb7" />


📌 Alert page:

<img width="374" height="708" alt="image" src="https://github.com/user-attachments/assets/1d052bf3-dde4-41b3-bbcd-fa5ecd548c47" />


📌Community:

<img width="368" height="703" alt="image" src="https://github.com/user-attachments/assets/f1b3c665-6026-41a7-808d-e38eb782fcf0" />


📌Safety check-list:

<img width="384" height="708" alt="image" src="https://github.com/user-attachments/assets/bd8280e0-a5cd-431c-b61e-3ee8300dfcb5" />





🎯 Future Improvements

🚀 Planned upgrades for Disaster Ready:

AI-based disaster risk prediction model

Push notification alerts for real-time warning

Integration with government disaster response systems

Shelter/relief camp live tracking

Volunteer rescue coordination module

Voice-based SOS system for disabled users

🏆 Why This Project Matters?

Natural disasters can happen anytime.
People often face:

❌ No early warning
❌ No communication due to network failure
❌ Slow rescue coordination
❌ No awareness about blocked routes / safe shelters

✅ Disaster Ready solves this by combining alerts, SOS, offline support, and community updates in one platform.

👨‍💻 Contributors

💡 Team Members:
Priya
Rakshit Rana 
Payal 
Arsh 
Navpreet kaur 

📜 License

This project is built for educational and hackathon purposes.
Free to use and modify.
