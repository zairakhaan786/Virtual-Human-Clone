# Virtual Human Clone – AI Fashion & Smart Retail Platform (India-Focused) 🌍🇮🇳

> **"This project uses INR as base currency and supports real-time global currency conversion."**

## 🔷 Objective
Virtual Human Clone is a complete full-stack web application designed for the **Indian fashion market**. 
It simulates a Virtual Human Clone shopping assistant which analyzes user body types, tracks purchase behavior, and provides AI-based fashion insights including luxury vs daily wear trends using **INR (₹)** pricing and **Indian brands** (Myntra, Ajio, Zara India, FabIndia).

## 🔷 Key Features
- **👤 User Authentication**: Secure JWT-based Login and Profile creation.
- **📷 Body Scan Module**: AI-simulated body analysis detecting body type (ectomorph, mesomorph) and Indian sizing (M, L, XL).
- **👗 Fashion Recommendation Engine**: Suggests outfits based on a specific ₹500 – ₹50,000 budget, occasion (casual, Diwali party, office), and local brand preferences.
- **📊 Smart Analytics Dashboard**: Built with Recharts, it tracks most viewed brands, budget vs spending, and regional trending outfits.
- **🧠 AI Smart Suggestions**: Intelligent price-aware insights ("You usually buy under ₹2000, try these options").
- **🪞 Virtual Try-On**: Basic simulation interface for overlaying clothing.

## 🔷 Tech Stack
- **Frontend**: React.js, Tailwind CSS, Recharts, Lucide Icons, Vite
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)

## 📁 Repository Structure
```
/frontend    # React + Tailwind CSS web application
/backend     # Node.js + Express API server
/docs        # System walkthrough and design documentation
/screenshots # Preview images of the UI pages
```

## 🚀 Installation & Setup
### Prerequisites
- Node.js (v18+)
- MongoDB Atlas URL or Local MongoDB server

### Backend Setup
1. `cd backend`
2. `npm install`
3. Create a `.env` file with `MONGO_URI` and `JWT_SECRET`
4. `npm run dev` (Runs on port 5000)

### Frontend Setup
1. `cd frontend`
2. `npm install`
3. `npm run dev` (Runs on port 5173)

## ☁️ Deployment
- **Frontend**: Designed for instant deployment on [Vercel](https://vercel.com/) or Netlify.
- **Backend**: Designed for modern PAAS like [Render](https://render.com/) or AWS.

## 🤝 Extra Features Implemented
- **Indian Festival Focus**: Specialized styling flags for Diwali and Weddings.
- **Exclusive INR ₹ Localization**: Strict adherence to Indian Rupees across dashboards and recommendations.
