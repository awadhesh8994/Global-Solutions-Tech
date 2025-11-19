/*import React from "react";

import LandingPage from "./pages/LandingPage";

import Layout from "./components/Layout";

function App() {
  return (
  <Layout>
  <LandingPage />
  </Layout>
);
}

export default App;
*/
// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ContactPage from "./pages/ContactPage";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        
      </Routes>
    </Layout>
  );
}

export default App;

