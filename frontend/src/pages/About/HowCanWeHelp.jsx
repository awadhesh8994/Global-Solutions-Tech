import React from 'react'

const About3 = () => {
  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">About Page 3</h1>
        <p className="text-lg text-gray-700 mb-6">
          This is the third about page content. You can showcase your company's values and culture here.
        </p>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Values</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Integrity and honesty in all dealings</li>
            <li>Customer-centric approach</li>
            <li>Innovation and continuous improvement</li>
            <li>Teamwork and collaboration</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About3