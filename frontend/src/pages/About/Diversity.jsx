import React from 'react'

const About5 = () => {
  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">About Page 5</h1>
        <p className="text-lg text-gray-700 mb-6">
          This is the fifth about page content. You can include leadership team information or company culture details here.
        </p>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-blue-800 font-semibold">JD</span>
              </div>
              <h3 className="font-semibold">John Doe</h3>
              <p className="text-sm text-gray-600">CEO & Founder</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-blue-800 font-semibold">JS</span>
              </div>
              <h3 className="font-semibold">Jane Smith</h3>
              <p className="text-sm text-gray-600">CTO</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-blue-800 font-semibold">MJ</span>
              </div>
              <h3 className="font-semibold">Mike Johnson</h3>
              <p className="text-sm text-gray-600">COO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About5