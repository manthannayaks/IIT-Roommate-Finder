import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar = ({ darkMode, toggleDarkMode }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`fixed w-full z-50 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="text-xl font-bold text-iitj-primary dark:text-iitj-accent">IITJ Roommate Finder</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link
                to="/"
                className="hover:text-iitj-secondary px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/create-profile"
                className="hover:text-iitj-secondary px-3 py-2 rounded-md text-sm font-medium"
              >
                Create Profile
              </Link>
              <Link
                to="/find-roommates"
                className="hover:text-iitj-secondary px-3 py-2 rounded-md text-sm font-medium"
              >
                Find Roommates
              </Link>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 mr-2"
            >
              {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
            </button>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-iitj-secondary"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/create-profile"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-iitj-secondary"
              onClick={toggleMenu}
            >
              Create Profile
            </Link>
            <Link
              to="/find-roommates"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-iitj-secondary"
              onClick={toggleMenu}
            >
              Find Roommates
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 