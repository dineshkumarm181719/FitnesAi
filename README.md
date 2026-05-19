# FitGenie AI 🧬💪

Your smart AI-powered fitness companion that provides personalized diet plans, workout routines, BMI tracking, and intelligent health recommendations.

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwind-css)
![Gemini AI](https://img.shields.io/badge/Gemini-AI-4285F4?logo=google)

## ✨ Features

- **BMI Calculator** — Instant BMI calculation with visual gauge and history tracking
- **AI Diet Planner** — Personalized meal plans based on goals and dietary preferences
- **AI Workout Planner** — Custom workout routines with exercises, sets, reps, and rest times
- **Progress Analytics** — Track weight, calories, BMI, and workout completion with charts
- **AI Chat Assistant** — 24/7 fitness chatbot for diet tips, workout advice, and motivation
- **Health Trackers** — Water intake, step counter, and sleep tracking
- **Dark/Light Mode** — Beautiful glassmorphism UI with theme toggle
- **Responsive Design** — Works perfectly on mobile, tablet, and desktop

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd fitgenie-ai

# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
# Edit .env.local with your API keys (optional for demo mode)

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `GEMINI_API_KEY` | Optional | Google Gemini API key for AI features |
| `MONGODB_URI` | Optional | MongoDB connection string |
| `NEXTAUTH_SECRET` | Optional | NextAuth.js secret for authentication |

> **Note:** The app works in demo mode without any API keys. AI features will use curated demo responses.

## 📁 Project Structure

```
src/
├── app/
│   ├── page.js              # Landing page
│   ├── login/               # Login page
│   ├── register/            # Registration page
│   ├── dashboard/           # Dashboard layout + pages
│   │   ├── page.js          # Main dashboard
│   │   ├── bmi/             # BMI Calculator
│   │   ├── diet/            # AI Diet Planner
│   │   ├── workout/         # AI Workout Planner
│   │   ├── progress/        # Progress Analytics
│   │   ├── chat/            # AI Chatbot
│   │   ├── profile/         # User Profile
│   │   └── settings/        # Settings
│   └── api/ai/              # AI API routes
├── components/
│   ├── ui/                  # Reusable UI components
│   └── layout/              # Sidebar, Topbar, ThemeToggle
├── context/                 # React Context providers
└── lib/                     # Utilities and constants
```

## 🛠 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS v4
- **Charts:** Recharts
- **AI:** Google Gemini API
- **Icons:** Lucide React
- **Font:** Inter (Google Fonts)

## 📄 License

MIT License — feel free to use this project for any purpose.
