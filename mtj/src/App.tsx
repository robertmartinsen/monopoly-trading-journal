import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import DashboardPage from "@/pages/dashboard/DashboardPage";
import JournalPage from "@/pages/journal/JournalPage.tsx";
import NewsPage from "./pages/news/NewsPage";
import CalendarPage from "./pages/calendar/CalendarPage";
import MarketPage from "./pages/market/MarketPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DashboardPage />} />
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
