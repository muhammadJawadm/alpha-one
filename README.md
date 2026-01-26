# Alpha One App

A professional full-stack web application built with React, Vite, and Tailwind CSS.

## 🚀 Features

- ✅ Authentication system (login/logout)
- 📊 Dashboard with statistics
- 👤 User profile management
- ⚙️ Settings page
- 🎨 Beautiful UI with Tailwind CSS v4
- 🔐 Protected routes
- 📱 Fully responsive design

## 📁 Project Structure

```
src/
├── assets/          # Static assets (images, icons)
├── components/      # Reusable components
│   ├── common/      # Common UI components (Button, Input, Card, Loading)
│   └── layout/      # Layout components (Navbar, Sidebar)
├── constants/       # Application constants
├── context/         # React context (AuthContext)
├── hooks/          # Custom React hooks
├── layouts/        # Page layouts (AuthLayout, DashboardLayout)
├── pages/          # Application pages (Login, Dashboard, Profile, Settings, NotFound)
├── routes/         # Routing configuration
├── services/       # API services
└── utils/          # Utility functions
```

## 🛠️ Technologies

- **React 19** - UI framework
- **Vite** - Build tool
- **React Router v6** - Routing
- **Tailwind CSS v4** - Styling
- **Context API** - State management

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Install React Router DOM (if not already installed):
```bash
npm install react-router-dom
```

3. Start the development server:
```bash
npm run dev
```

## 🔑 Demo Credentials

Use any email and password (minimum 6 characters) to login.

Example:
- Email: demo@example.com
- Password: password123

## 📄 Available Pages

- `/login` - Login page
- `/dashboard` - Main dashboard
- `/profile` - User profile
- `/settings` - Application settings

## 🎨 Components

### Common Components
- **Button** - Customizable button with variants (primary, secondary, danger, success, outline)
- **Input** - Form input with validation and error handling
- **Card** - Container component with optional title and actions
- **Loading** - Loading spinner component

### Layout Components
- **Navbar** - Top navigation bar with user info
- **Sidebar** - Side navigation menu

## 🔐 Authentication

The app uses a Context-based authentication system:
- User data stored in localStorage
- Protected routes redirect to login if not authenticated
- Public routes redirect to dashboard if already authenticated

## 🚀 Build for Production

```bash
npm run build
```

## 📝 License

MIT

