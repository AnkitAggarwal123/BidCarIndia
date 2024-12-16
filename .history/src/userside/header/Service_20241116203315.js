import React from 'react';

// Service Page Component
const Service = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <div className="relative h-64 mb-12">
        <img 
          src="/api/placeholder/1200/400"
          alt="Car service center"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">Our Services</h1>
        </div>
      </div>

      {/* Services Introduction */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Comprehensive Auction Services</h2>
        <p className="text-gray-600 mb-6">
          At Bid Cars India, we provide end-to-end auction services designed to make your 
          vehicle buying and selling experience seamless and profitable. Our New Delhi-based 
          team ensures every transaction is handled with utmost professionalism.
        </p>
      </div>

      {/* Service Features Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {/* Online Bidding */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-3">Online Bidding Platform</h3>
          <p className="text-gray-600">
            State-of-the-art digital auction platform with real-time bidding and automated notifications.
          </p>
        </div>

        {/* Vehicle Inspection */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-3">Vehicle Inspection</h3>
          <p className="text-gray-600">
            Detailed inspection and verification of all vehicles by certified professionals.
          </p>
        </div>

        {/* Documentation */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-3">Documentation Support</h3>
          <p className="text-gray-600">
            Complete assistance with paperwork and legal documentation for smooth transfers.
          </p>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gray-50 p-8 rounded-lg mb-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Process</h3>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: "1", title: "Registration", desc: "Sign up and verify your account" },
            { step: "2", title: "Inspection", desc: "Vehicle verification and documentation" },
            { step: "3", title: "Auction", desc: "Participate in live online bidding" },
            { step: "4", title: "Transfer", desc: "Complete purchase and ownership transfer" }
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="w-10 h-10 bg-red-600 rounded-full text-white flex items-center justify-center mx-auto mb-4">
                {item.step}
              </div>
              <h4 className="font-bold mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
