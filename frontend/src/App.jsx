
import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ContactPage from "./pages/ContactPage";
import Layout from "./components/Layout";
import "./App.css";

// Update imports to match new component names
import Overview from "./pages/About/Overview";
import WhyUs from "./pages/About/WhyUS"; 
import QualityPolicy from "./pages/About/QualityPolicy";
import HowCanWeHelp from "./pages/About/HowCanWeHelp";
import Diversity from "./pages/About/Diversity";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactPage />} />
       <Route path="/about/overview" element={<Overview />} />
        <Route path="/about/why-us" element={<WhyUs />} />
        <Route path="/about/quality-policy" element={<QualityPolicy />} />
        <Route path="/about/how-can-we-help" element={<HowCanWeHelp />} />
        <Route path="/about/diversity" element={<Diversity />} />
      </Routes>
    </Layout>
  );
}

export default App;