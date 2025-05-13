import {
  AiOutlineMenu,
  AiOutlineShoppingCart,
  AiOutlineSearch,
} from 'react-icons/ai';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const avatarImg =
    'https://i.pinimg.com/736x/cd/4b/d9/cd4bd9b0ea2807611ba3a67c331bff0b.jpg';
  const logo = '/image/tradenest.webp';

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
  return (
    <div className="fixed w-full bg-gradient-to-r from-[#4B0082] to-[#008080] z-10 shadow-lg text-white">
      <div className="py-3 border-b border-gray-300">
        <Container>
          <div className="flex justify-between items-center gap-4 flex-wrap">
            {/* Logo */}
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="w-12 h-12 rounded-full border-2 border-white shadow-md"
              />
            </Link>

            {/* Search Bar + Icon */}
            <div className="flex-grow max-w-md relative">
              <input
                type="text"
                value={searchTerm}
                onChange={handleChange}
                placeholder="Search products..."
                className="w-full px-4 py-2 rounded-md text-black focus:outline-none focus:ring focus:ring-indigo-300 pr-10"
              />
              <button
                onClick={() => handleSearch(searchTerm)}
                className="absolute right-2 top-2.5 text-gray-600 hover:text-indigo-600"
              >
                <AiOutlineSearch size={20} />
              </button>

              {/* Dropdown */}
              {showDropdown && results.length > 0 && (
                <ul className="absolute z-10 w-full bg-white text-black border border-gray-300 mt-1 rounded-md shadow-md max-h-60 overflow-y-auto">
                  {results.map(item => (
                    <Link to={`/medicine/${item._id}`} key={item._id}>
                      <li
                        onClick={() => handleSelect(item)}
                        className="px-4 py-2 hover:bg-indigo-100 cursor-pointer flex gap-5 items-center"
                      >
                        <img
                          className="w-12"
                          src={item.image}
                          alt={item.name}
                        />
                        <div>
                          <p> {item.name}</p>
                          <p>{item.price}</p>
                        </div>
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              {/* Cart */}
              <Link to="/cart" className="relative hover:scale-105 transition">
                <AiOutlineShoppingCart size={24} />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                  0
                </span>
              </Link>

              {/* Profile Dropdown */}
              <div className="relative">
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 border flex items-center gap-2 rounded-full cursor-pointer hover:shadow-md transition border-white"
                >
                  <AiOutlineMenu />
                  <img
                    className="rounded-full border-2 border-white"
                    referrerPolicy="no-referrer"
                    src={user?.photoURL || avatarImg}
                    alt="profile"
                    height="30"
                    width="30"
                  />
                </div>

                {isOpen && (
                  <div className="absolute right-0 top-12 w-[200px] bg-[#fffff1] text-black rounded-xl shadow-md text-sm overflow-hidden">
                    <div className="flex flex-col cursor-pointer">
                      <Link
                        to="/"
                        className="px-4 py-3 hover:bg-neutral-200 font-semibold"
                      >
                        Home
                      </Link>
                      {user ? (
                        <>
                          <Link
                            to="/dashboard"
                            className="px-4 py-3 hover:bg-neutral-200 font-semibold"
                          >
                            Dashboard
                          </Link>
                          <Link
                            to="/dashboard/update-profile"
                            className="px-4 py-3 hover:bg-neutral-200 font-semibold"
                          >
                            Update Profile
                          </Link>
                          <Link
                            to="/"
                            onClick={logOut}
                            className="px-4 py-3 hover:bg-neutral-200 font-semibold"
                          >
                            Logout
                          </Link>
                        </>
                      ) : (
                        <>
                          <Link
                            to="/login"
                            className="px-4 py-3 hover:bg-neutral-200 font-semibold"
                          >
                            Login
                          </Link>
                          <Link
                            to="/signup"
                            className="px-4 py-3 hover:bg-neutral-200 font-semibold"
                          >
                            Sign Up
                          </Link>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
