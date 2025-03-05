import { AiOutlineMenu, AiOutlineShoppingCart } from 'react-icons/ai';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';
import useAuth from '../../Hooks/useAuth';

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const avatarImg =
    'https://i.pinimg.com/736x/cd/4b/d9/cd4bd9b0ea2807611ba3a67c331bff0b.jpg';
  const logo = '/public/image/tradenest.webp';

  return (
    <div className="fixed w-11/12 bg-gradient-to-r from-[#4B0082] to-[#008080] z-10 shadow-lg text-white">
      <div className="py-3 border-b-[1px] border-gray-300">
        <Container>
          <div className="flex justify-between items-center gap-3 md:gap-0">
            {/* Logo */}
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="w-12 h-12 rounded-full border-2 border-white shadow-md"
              />
            </Link>

            {/* Right Side: Menu, Cart, and Profile */}
            <div className="flex items-center gap-6">
              {/* Cart Icon */}
              <Link
                to="/cart"
                className="relative text-white hover:text-yellow-300 transition"
              >
                <AiOutlineShoppingCart size={24} />
                <span className="absolute top-[-8px] right-[-8px] bg-red-500 text-white rounded-full px-2 text-xs">
                  0 {/* Replace with dynamic cart count */}
                </span>
              </Link>

              {/* Language Dropdown */}
              <select className="p-2 border rounded-md text-black">
                <option value="en">English</option>
                <option value="bn">বাংলা</option>
                {/* Add more languages as needed */}
              </select>

              {/* Profile Dropdown */}
              <div className="relative">
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 border flex items-center gap-2 rounded-full cursor-pointer hover:shadow-md transition border-white text-white"
                >
                  <AiOutlineMenu />
                  <img
                    className="rounded-full border-2 border-white"
                    referrerPolicy="no-referrer"
                    src={user && user.photoURL ? user.photoURL : avatarImg}
                    alt="profile"
                    height="30"
                    width="30"
                  />
                </div>

                {/* Dropdown Menu */}
                {isOpen && (
                  <div className="absolute rounded-xl shadow-md w-[200px] bg-white overflow-hidden right-0 top-12 text-sm text-black">
                    <div className="flex flex-col cursor-pointer">
                      <Link
                        to="/"
                        className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                      >
                        Home
                      </Link>

                      {user ? (
                        <>
                          <Link
                            to="/dashboard"
                            className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                          >
                            Dashboard
                          </Link>
                          <Link
                            to="/dashboard/update-profile"
                            className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                          >
                            Update Profile
                          </Link>
                          <div
                            onClick={logOut}
                            className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer"
                          >
                            Logout
                          </div>
                        </>
                      ) : (
                        <>
                          <Link
                            to="/login"
                            className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                          >
                            Login
                          </Link>
                          <Link
                            to="/signup"
                            className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
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
