


import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ContactPage from "./pages/ContactPage";
import Layout from "./components/Layout";
import Consulting from "./pages/services/Consulting";
import CloudSolution from "./pages/services/CloudSolutions";
import SoftwareEngineering from "./pages/services/SoftwareEngineering";
import MobileApplications from "./pages/services/MobileApplications";



function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services/consulting" element={<Consulting />} />
        <Route path="/services/cloud-solution" element={<CloudSolution />} />
        <Route path="/services/software-engineering" element={<SoftwareEngineering />} />
        <Route path="/services/mobile-applications" element={<MobileApplications />} />
      </Routes>
    </Layout>
  );
}

export default App;