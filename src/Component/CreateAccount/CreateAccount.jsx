import React from 'react';
import { useNavigate } from 'react-router-dom';

const CreateAccount = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-100 to-indigo-200 flex items-center justify-center px-6 py-12">
      <div className="max-w-7xl w-full bg-white rounded-3xl shadow-xl flex flex-col md:flex-row overflow-hidden">
        {/* Left Side - Text Content */}
        <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
            Create Your Account
          </h1>

          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Join our vibrant community to unlock exclusive benefits for buyers
            and sellers:
          </p>

          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-3 text-lg">
            <li>
              <strong>Post and Sell Items Easily:</strong> Upload your products
              quickly with images and detailed descriptions.
            </li>
            <li>
              <strong>Explore Thousands of Products:</strong> Find exactly what
              you’re looking for with our intuitive search and filter features.
            </li>
            <li>
              <strong>Safe & Secure Transactions:</strong> We use encrypted
              payments and verified user profiles to protect your purchases.
            </li>
            <li>
              <strong>Personalized Experience:</strong> Save favorites, track
              orders, and manage your profile all in one place.
            </li>
          </ul>

          <p className="text-gray-600 mb-10 leading-relaxed">
            It only takes a minute to create your account and start enjoying all
            these features and more.
          </p>

          <div className='flex '>
            <button
              onClick={() => navigate('/signup')}
              className="self-start mx-5 bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 text-white font-semibold px-10 py-4 rounded-lg shadow-lg transition duration-300 ease-in-out focus:outline-none"
              aria-label="Navigate to Sign Up page"
            >
              Sign Up Now
            </button>
            <button
              onClick={() => navigate('/')}
              className="self-start bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 text-white font-semibold px-10 py-4 rounded-lg shadow-lg transition duration-300 ease-in-out focus:outline-none"
              aria-label="Navigate to Sign Up page"
            >
              Home
            </button>
          </div>
        </div>

        {/* Right Side - Illustration */}
        <div className="md:w-1/2 bg-indigo-50 flex items-center justify-center p-10">
          {/* Replace this div with an actual SVG/image as needed */}
          <div className="w-full max-w-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              fill="none"
              className="w-full h-auto"
              aria-hidden="true"
            >
              <rect width="64" height="64" rx="12" fill="#4F46E5" />
              <path
                d="M32 12v40M12 32h40"
                stroke="#E0E7FF"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="mt-6 text-indigo-700 font-semibold text-center text-lg">
              Your journey to easy buying & selling starts here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateAccount;
