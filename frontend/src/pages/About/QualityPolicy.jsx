import React from 'react'

const About4 = () => {
  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">About Page 4</h1>
        <p className="text-lg text-gray-700 mb-6">
          This is the fourth about page content. You can highlight your company's achievements and milestones here.
        </p>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold text-lg">2023</h3>
              <p>Reached 10,000+ satisfied customers</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold text-lg">2022</h3>
              <p>Expanded to international markets</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About4