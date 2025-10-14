// ...existing code...
import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-black via-gray-900 to-black text-gray-300 py-10 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:justify-between space-y-8 lg:space-y-0">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-4">
              <FaFacebook className="text-gray-400 hover:text-white transition-colors" size={20}/>
              <FaInstagram className="text-gray-400 hover:text-white transition-colors" size={20}/>
              <FaYoutube className="text-gray-400 hover:text-white transition-colors" size={20}/>
            </div>
            <p className="text-sm text-gray-500">Questions? Call 1-800-000-0000</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm">
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Audio Description</li>
              <li className="hover:text-white cursor-pointer">Investor Relations</li>
              <li className="hover:text-white cursor-pointer">Legal Notice</li>
            </ul>

            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">Jobs</li>
              <li className="hover:text-white cursor-pointer">Cookie Preferences</li>
            </ul>

            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Gift Cards</li>
              <li className="hover:text-white cursor-pointer">Terms of Use</li>
              <li className="hover:text-white cursor-pointer">Corporate Information</li>
            </ul>

            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Media Center</li>
              <li className="hover:text-white cursor-pointer">Privacy</li>
              <li className="hover:text-white cursor-pointer">Contact Us</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-gray-500">Service Code</p>
          <p className="text-sm text-gray-500">&copy; 1997-2025 Netflix, Inc.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
// ...existing code...