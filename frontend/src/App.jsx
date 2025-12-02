
import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ContactPage from "./pages/ContactPage";
import Layout from "./components/Layout";

// Services pages imports
import Consulting from "./pages/services/Consulting";
import CloudSolution from "./pages/services/CloudSolutions";
import SoftwareEngineering from "./pages/services/SoftwareEngineering";
import MobileApplications from "./pages/services/MobileApplications";

// About pages imports
import Overview from "./pages/About/Overview";
import WhyUS from "./pages/About/WhyUs"; 
import QualityPolicy from "./pages/About/QualityPolicy";
import HowCanWeHelp from "./pages/About/HowCanWeHelp";

// Dashboard pages imports 
import UserDashboard from "./dashboards/User/UserDashboard";
import AdminDashboard from "./dashboards/Admin/AdminDashboard";
import AdminUserDetail from "./dashboards/Admin/AdminUserDetail";


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        
        {/* About Routes */}
        <Route path="/about/overview" element={<Overview />} />
        <Route path="/about/why-us" element={<WhyUS />} />
        <Route path="/about/quality-policy" element={<QualityPolicy />} />
        <Route path="/about/how-can-we-help" element={<HowCanWeHelp />} />
      
        
        {/* Services Routes */}
        <Route path="/services/consulting" element={<Consulting />} />
        <Route path="/services/cloud-solution" element={<CloudSolution />} />
        <Route path="/services/software-engineering" element={<SoftwareEngineering />} />
        <Route path="/services/mobile-applications" element={<MobileApplications />} />

        {/* Dashboard Routes  */}
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/user/:id" element={<AdminUserDetail />} />

      </Routes>
    </Layout>
  );
}

export default App;