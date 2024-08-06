import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-auto mb-4 md:mb-0">
          <h3 className="text-lg font-bold">Bid Cars India</h3>
          <p>Contact: +91 8882451292</p>
          <p>Email: auction@bidcarsindia.com</p>
        </div>
        <div className="w-full md:w-auto">
          <h3 className="text-lg font-bold">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">Facebook</a>
            <a href="#" className="hover:text-gray-400">Twitter</a>
            <a href="#" className="hover:text-gray-400">Instagram</a>
            <a href="#" className="hover:text-gray-400">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer