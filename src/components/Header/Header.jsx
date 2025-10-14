import React from 'react'
import logo from "../../assets/images/logo-COGC8jhl.png"
import { FaSearch } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { MdAccountBox } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md";
function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-black bg-opacity-90 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3">
        <div>
          <ul className="hidden lg:flex items-center space-x-6 text-sm text-gray-200">
            <li className="text-xl sm:text-2xl font-extrabold text-red-600 tracking-wide">
              <img src={logo} alt="Netflix" className="h-8 sm:h-10 object-contain" />
            </li>
            <li className="hover:text-white transition-colors cursor-pointer">Home</li>
            <li className="hover:text-white transition-colors cursor-pointer">TV Shows</li>
            <li className="hover:text-white transition-colors cursor-pointer">Movies</li>
            <li className="hover:text-white transition-colors cursor-pointer">Latest</li>
            <li className="hover:text-white transition-colors cursor-pointer">My List</li>
            <li className="hover:text-white transition-colors cursor-pointer">Browse by Languages</li>
          </ul>
          {/* Mobile: show logo only */}
          <div className="lg:hidden">
            <img src={logo} alt="Netflix" className="h-8 sm:h-10 object-contain" />
          </div>
        </div>

        <div>
          <ul className="flex items-center space-x-4 text-gray-200">
            <li>
              <button aria-label="Search" className="p-1 rounded hover:bg-white/10 transition">
                <FaSearch size={18} />
              </button>
            </li>
            <li>
              <button aria-label="Notifications" className="p-1 rounded hover:bg-white/10 transition">
                <IoIosNotifications size={20} />
              </button>
            </li>
            <li>
              <button aria-label="Account" className="p-1 rounded hover:bg-white/10 transition">
                <MdAccountBox size={22} />
              </button>
            </li>
            <li>
              <button aria-label="Menu" className="p-1 rounded hover:bg-white/10 transition">
                <MdOutlineArrowDropDown size={20} />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header