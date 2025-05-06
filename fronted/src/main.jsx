import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import AboutPages from "./Pages/AboutPages.jsx";
import ContactPages from "./Pages/ContactPages.jsx";

import TopNavbar from "./Components/TopNavbar.jsx";
import BottomNavbar from "./Components/BottomNavbar.jsx";
import Footer from "./Components/Footer.jsx";
import JoinUsPages from "./Pages/JoinUsPages.jsx";
import BlogReadPages from "./Pages/BlogReadPages.jsx";
import DashboardPages from "./Pages/DashboardPages.jsx";
import LoginPages from "./Pages/LoginPages.jsx";
import RegisterPage from "./Pages/RegisterPage.jsx";
import BlogReadPage from "./Pages/BlogReadPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <TopNavbar />
      <BottomNavbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutPages />} />
        <Route path="/Contact" element={<ContactPages />} />
        <Route path="/dashboard" element={<DashboardPages />} />
        <Route path="/blog/:id" element={<BlogReadPages />} />
        <Route path="/Join-us" element={<JoinUsPages />} />
        <Route path="/login" element={<LoginPages />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/blog-read/:id" element={<BlogReadPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </StrictMode>
);
