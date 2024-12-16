import React from 'react';

// Service Page Component
const Service = () => {
  return (
    <div className="container mx-auto px-6 lg:px-16 py-10">
      {/* Hero Section */}
      <div className="relative h-72 lg:h-96 mb-12">
        <img
          src="/api/placeholder/1200/400"
          alt="Car service center"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-75 flex items-center justify-center">
          <h1 className="text-white text-4xl lg:text-6xl font-extrabold">Our Services</h1>
        </div>
      </div>

      {/* Services Introduction */}
      <div className="mb-16 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
          Comprehensive Auction Services
        </h2>
        <p className="text-gray-600 lg:text-lg">
          At Bid Cars India, we provide end-to-end auction services designed to make your vehicle 
          buying and selling experience seamless and profitable. Our New Delhi-based team ensures 
          every transaction is handled with utmost professionalism.
        </p>
      </div>

      {/* Service Features Grid */}
      <div className="grid md:grid-cols-3 gap-10 mb-16">
        {[
          {
            title: "Online Bidding Platform",
            description: "State-of-the-art digital auction platform with real-time bidding and automated notifications.",
            icon: "M9 5l7 7-7 7"
          },
          {
            title: "Vehicle Inspection",
            description: "Detailed inspection and verification of all vehicles by certified professionals.",
            icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          },
          {
            title: "Documentation Support",
            description: "Complete assistance with paperwork and legal documentation for smooth transfers.",
            icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          }
        ].map((service, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon} />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Process Section */}
      <div className="bg-gray-100 py-12 rounded-lg shadow-inner mb-16">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">Our Process</h3>
        <div className="grid md:grid-cols-4 gap-10">
          {[
            { step: "1", title: "Registration", desc: "Sign up and verify your account" },
            { step: "2", title: "Inspection", desc: "Vehicle verification and documentation" },
            { step: "3", title: "Auction", desc: "Participate in live online bidding" },
            { step: "4", title: "Transfer", desc: "Complete purchase and ownership transfer" }
          ].map((process, index) => (
            <div key={index} className="text-center">
              <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center mx-auto text-white text-lg font-bold mb-4">
                {process.step}
              </div>
              <h4 className="font-bold text-lg text-gray-800 mb-2">{process.title}</h4>
              <p className="text-gray-600">{process.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <button className="bg-red-600 text-white text-lg px-8 py-3 rounded-lg shadow-md hover:bg-red-700 hover:shadow-lg transition">
          Get Started with Our Services
        </button>
      </div>
    </div>
  );
};

export default Service;
