import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center bg-blue-50 py-20 px-4">
        <h1 className="text-5xl font-bold text-blue-800 mb-6">
          Welcome to MyWebsite
        </h1>
        <p className="text-gray-700 text-lg mb-8 max-w-xl">
          Discover amazing services and solutions. Start your journey with us today!
        </p>
        <button className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 shadow-lg rounded-lg border border-blue-100">
            <h2 className="text-2xl font-bold text-blue-800 mb-2">Feature One</h2>
            <p className="text-gray-700">Short description about this feature.</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg border border-blue-100">
            <h2 className="text-2xl font-bold text-blue-800 mb-2">Feature Two</h2>
            <p className="text-gray-700">Short description about this feature.</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg border border-blue-100">
            <h2 className="text-2xl font-bold text-blue-800 mb-2">Feature Three</h2>
            <p className="text-gray-700">Short description about this feature.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-100 py-16 text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Ready to Start?</h2>
        <p className="text-gray-700 mb-6">Join us now and explore all the possibilities.</p>
        <button className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition">
          Sign Up
        </button>
      </section>

      <Footer />
    </div>
  );
}

export default LandingPage;
