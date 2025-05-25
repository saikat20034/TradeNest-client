import { useState } from 'react';
import { GrLogout } from 'react-icons/gr';
import { FcSettings } from 'react-icons/fc';
import { AiOutlineBars } from 'react-icons/ai';
import MenuItem from './Menu/MenuItem';
import AdminMenu from './Menu/AdminMenu';
import { Link } from 'react-router-dom';
import SellerMenu from './Menu/SellerMenu';
import CustomerMenu from './Menu/CustomerMenu';
import useAuth from '../../../Hooks/useAuth';
import useRole from '../../../Hooks/useRole';

const Sidebar = () => {
  const { logOut } = useAuth();
  const [isActive, setActive] = useState(false);
  const [role, isLoading] = useRole();

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  const logo = 'https://i.postimg.cc/CKcBjJHX/home-button-9073032.png';

  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-[#001010] text-white flex justify-between md:hidden">
        <div className="block cursor-pointer p-4 font-bold">
          <Link to="/">
            <img src="" alt="logo" width="100" height="100" />
          </Link>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-[#001010] text-white w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0 transition duration-200 ease-in-out`}
      >
        <div>
          <div className="w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-lime-100 mx-auto">
            <div className="relative group">
              <Link to="/">
                <img
                  src={logo}
                  alt="logo"
                  width="50"
                  height="100"
                  className="transition duration-300"
                />
              </Link>
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-white text-black text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg z-20">
                Home
              </div>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              {/*  Menu Items */}
              {role === 'customer' && <CustomerMenu />}
              {role === 'seller' && <SellerMenu />}
              {role === 'admin' && <AdminMenu />}
            </nav>
          </div>
        </div>

        <div>
          <hr />

          <MenuItem
            icon={FcSettings}
            label="Profile"
            address="/dashboard/profile"
          />
          <Link
            to="/"
            onClick={logOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-white hover:bg-gray-300 hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />
            <span className="mx-4 font-medium">Logout</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
