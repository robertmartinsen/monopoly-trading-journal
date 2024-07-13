import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import LoginPage from "@/pages/auth/login/Login";
import SignupPage from "@/pages/auth/signup/Signup";
import Home from "@/pages/home/Home";
import JournalPage from "@/pages/dashboard/journal/JournalPage";
import NewsPage from "@/pages/dashboard/news/NewsPage";
import CalendarPage from "@/pages/dashboard/calendar/CalendarPage";
import MarketPage from "@/pages/dashboard/market/MarketPage";
import Dashboard from "@/pages/dashboard/Dashboard";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import ForgotPasswordPage from "@/pages/auth/ResetPassword";

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout user={user} />}>
          <Route index element={<Home />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="reset" element= {<ForgotPasswordPage />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="journal" element={<JournalPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="calendar" element={<CalendarPage />} />
          <Route path="market" element={<MarketPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

