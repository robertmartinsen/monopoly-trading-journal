import React from "react";
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
import ForgotPasswordPage from "@/pages/auth/Reset";
import PrivateRoute from "@/components/PrivateRoute";
import { useAuth } from "@/hooks/useAuth";

const App: React.FC = () => {
  const { user } = useAuth(); 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout user={user} />}>
          <Route index element={<Home />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="reset" element={<ForgotPasswordPage />} />
          <Route
            path="dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="journal"
            element={
              <PrivateRoute>
                <JournalPage />
              </PrivateRoute>
            }
          />
          <Route
            path="news"
            element={
              <PrivateRoute>
                <NewsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="calendar"
            element={
              <PrivateRoute>
                <CalendarPage />
              </PrivateRoute>
            }
          />
          <Route
            path="market"
            element={
              <PrivateRoute>
                <MarketPage />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
