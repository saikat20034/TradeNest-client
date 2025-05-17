import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineCamera,
} from 'react-icons/ai';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';
import Webcam from 'react-webcam';

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [showCamera, setShowCamera] = useState(false);
  const webcamRef = useRef(null);

  const avatarImg =
    'https://i.pinimg.com/736x/cd/4b/d9/cd4bd9b0ea2807611ba3a67c331bff0b.jpg';
  const logo = '/image/tradenest.webp';

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/medicines?search=${searchTerm}`
      );
      setResults(response.data);
      setShowDropdown(true);
    } catch (error) {
      console.error('Search error:', error);
    }
  };

  const handleChange = async e => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() !== '') {
      handleSearch(value);
    } else {
      setResults([]);
      setShowDropdown(false);
    }
  };

  const handleSelect = item => {
    setSearchTerm(item.name);
    setShowDropdown(false);
  };

  const captureAndSearch = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    if (imageSrc) {
      try {
        const res = await axios.post('http://localhost:5000/api/image-search', {
          image: imageSrc,
        });
        setResults(res.data);
        setShowDropdown(true);
      } catch (error) {
        console.error('AI Image search failed:', error);
      }
    }
    setShowCamera(false);
  };

  return (
    <div className="fixed w-full z-50 bg-gradient-to-r from-blue-50 to-indigo-100 shadow-md">
      <div className="py-2 border-b border-base-300">
        <Container>
          <div className="flex justify-between items-center gap-4 flex-wrap">
            {/* Logo */}
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="w-12 h-12 rounded-full border shadow"
              />
            </Link>

            {/* Center: Search */}
            <div className="flex-grow max-w-md relative hidden md:flex items-center">
              <input
                type="text"
                value={searchTerm}
                onChange={handleChange}
                placeholder="Search products..."
                className="w-full px-4 py-2 rounded-md input input-bordered pr-10"
              />
              <button
                onClick={handleSearch}
                className="absolute right-8 top-2.5 text-gray-600"
              >
                <AiOutlineSearch size={20} />
              </button>
              <button
                onClick={() => setShowCamera(true)}
                className="absolute right-0 top-2.5 text-gray-600"
              >
                <AiOutlineCamera size={20} />
              </button>

              {showDropdown && results.length > 0 && (
                <ul className="absolute z-20 w-full bg-base-100 border border-base-300 mt-1 rounded-md shadow max-h-60 overflow-y-auto">
                  {results.map(item => (
                    <Link to={`/medicine/${item._id}`} key={item._id}>
                      <li
                        onClick={() => handleSelect(item)}
                        className="px-4 py-2 hover:bg-base-200 cursor-pointer flex gap-5 items-center"
                      >
                        <img
                          className="w-12"
                          src={item.image}
                          alt={item.name}
                        />
                        <div>
                          <p>{item.name}</p>
                          <p className="text-sm text-gray-500">${item.price}</p>
                        </div>
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              <label className="swap swap-rotate">
                <input
                  type="checkbox"
                  onChange={toggleTheme}
                  checked={theme === 'dark'}
                />
                <svg
                  className="swap-on fill-current w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64 17.64A9 9 0 0112 3v9h9a9 9 0 01-15.36 5.64z" />
                </svg>
                <svg
                  className="swap-off fill-current w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64 13A9 9 0 0111 3a9 9 0 000 18 9 9 0 0010.64-8z" />
                </svg>
              </label>

              {/* Nav Links */}
              <div className="hidden md:flex gap-4 text-sm font-medium">
                <Link to="/" className="hover:text-primary">
                  Home
                </Link>
                <Link to="/about-us" className="hover:text-primary">
                  About
                </Link>
                <Link to="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </div>

              {/* Cart */}
              <Link to="/cart" className="relative hover:scale-105 transition">
                <AiOutlineShoppingCart size={24} />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                  0
                </span>
              </Link>

              {/* Auth Buttons or Profile */}
              {!user ? (
                <div className="flex gap-2">
                  <Link
                    to="/login"
                    className="btn btn-sm btn-outline hover:btn-primary"
                  >
                    Login
                  </Link>
                  <Link to="/signup" className="btn btn-sm btn-primary">
                    Sign Up
                  </Link>
                </div>
              ) : (
                <div className="relative">
                  <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 border flex items-center gap-2 rounded-full cursor-pointer hover:shadow transition"
                  >
                    <img
                      className="rounded-full w-8 h-8 border"
                      src={user?.photoURL || avatarImg}
                      alt="profile"
                    />
                  </div>

                  {isOpen && (
                    <div className="absolute right-0 top-12 w-48 bg-base-100 text-base-content rounded-xl shadow-lg text-sm">
                      <div className="flex flex-col">
                        <Link to="/" className="px-4 py-3 hover:bg-base-200">
                          Home
                        </Link>
                        <Link
                          to="/dashboard"
                          className="px-4 py-3 hover:bg-base-200"
                        >
                          Dashboard
                        </Link>
                        <Link
                          to="/dashboard/update-profile"
                          className="px-4 py-3 hover:bg-base-200"
                        >
                          Update Profile
                        </Link>
                        <button
                          onClick={logOut}
                          className="px-4 py-3 hover:bg-base-200 text-left"
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Search Bar */}
          <div className="block md:hidden mt-3 flex gap-2 items-center">
            <input
              type="text"
              value={searchTerm}
              onChange={handleChange}
              placeholder="Search..."
              className="w-full input input-bordered"
            />
            <button onClick={() => setShowCamera(true)}>
              <AiOutlineCamera size={24} />
            </button>
          </div>
        </Container>
      </div>

      {/* Camera Modal */}
      {showCamera && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-base-100 p-4 rounded-md text-center">
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              className="w-full max-w-sm mx-auto rounded-md"
            />
            <div className="flex justify-center gap-4 mt-4">
              <button className="btn btn-primary" onClick={captureAndSearch}>
                Capture & Search
              </button>
              <button
                className="btn btn-error"
                onClick={() => setShowCamera(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
