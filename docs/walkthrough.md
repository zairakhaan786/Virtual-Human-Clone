# Project Walkthrough: Virtual Human Clone (India Edition)

## Overview
This document thoroughly outlines the system architecture and flow of the Virtual Human Clone platform designed for the Indian retail fashion ecosystem.

## 1. Architecture Setup
The platform is structured using a standard **MERN Stack** (MongoDB, Express, React, Node.js). 

### Backend
- **Express Server (`backend/server.js`)**: The main entry point, applying CORS and routing to specific API endpoints.
- **Mongoose Models (`backend/models/`)**: 
  - `User.js` tracks authentication and body profile (height, weight, body type in Indian metrics).
  - `Product.js` holds the Indian clothing catalog spanning from Daily Wear to Luxury Wear.
- **Authentication**: JWT is used to secure the `/api/profile` and `/api/recommendations` endpoints.

### Frontend
- **React.js (`frontend/`)**: Bootstrapped via Vite for blazing-fast HMR.
- **Tailwind CSS**: Used extensively for rapid, modern "glassmorphism" mobile-first UI components.
- **React Router**: Controls access between `/` (Login), `/dashboard`, `/scan`, and `/recommendations`.

## 2. Platform Usage Flow
1. **Login/Signup View**: A clean authentication screen tailored with an Indian-focused greeting.
2. **Smart Dashboard**: Once logged in, the user sees their Smart Analytics. The application hits the `/api/analytics` endpoint to render a Recharts line graph tracking ₹ budget versus ₹ actual spending, and shows live trends (e.g. "Festive Kurta Sets").
3. **Body Scanning**: The `/scan` page mimics a camera interface, uploading simulated bio-metrics to the backend to assign a Body Type and Indian Size.
4. **AI Recommendations**: Navigating to `/recommendations` displays customized outfit cards. The pricing is formatted purely in INR (₹). AI specific alerts notify the user about budget-friendly local alternatives.

## 3. APIs
- `POST /api/auth/register` - Creates a new user.
- `GET /api/profile` - Fetches body scan configurations.
- `GET /api/recommendations` - Returns array of `Product` documents matching the user's budget.
- `GET /api/analytics` - Returns JSON aggregate data for Recharts.
