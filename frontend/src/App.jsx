


/*import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

import ContactPage from "./pages/ContactPage";
import Layout from "./components/Layout";
import "./App.css";


import About1 from "./pages/About/About1";
import About2 from "./pages/About/About2";
import About3 from "./pages/About/About4";
import About4 from "./pages/About/About3";
import About5 from "./pages/About/About5";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about/about-1" element={<About1 />} />
        <Route path="/about/about-2" element={<About2 />} />
        <Route path="/about/about-3" element={<About3 />} />
        <Route path="/about/about-4" element={<About4 />} />
        <Route path="/about/about-5" element={<About5 />} />
      </Routes>
    </Layout>
  );
}

export default App;*/
/*
import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ContactPage from "./pages/ContactPage";
import Layout from "./components/Layout";
import "./App.css";

 // Update import names to be more descriptive
 import Overview from "./pages/About/Overview";
 import WhyUs from "./pages/About/WhyUs";
 import QualityPolicy from "./pages/About/QualityPolicy";
 import HowCanWeHelp from "./pages/About/HowCanWeHelp";
 import Diversity from "./pages/About/Diversity";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Update route paths to match new menu names *
        <Route path="/about/overview" element={<Overview />} />
        <Route path="/about/why-us" element={<WhyUs />} />
        <Route path="/about/quality-policy" element={<QualityPolicy />} />
        <Route path="/about/how-can-we-help" element={<HowCanWeHelp />} />
        <Route path="/about/diversity" element={<Diversity />} />
      </Routes>
    </Layout>
  );
}

export default App;*/
import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ContactPage from "./pages/ContactPage";
import Layout from "./components/Layout";
import "./App.css";

// Update imports to match new component names
import Overview from "./pages/About/Overview";
import WhyUs from "./pages/About/WhyUs"; // 
import QualityPolicy from "./pages/About/QualityPolicy";
import HowCanWeHelp from "./pages/About/HowCanWeHelp";
import Diversity from "./pages/About/Diversity";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Updated routes to match new structure */}
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