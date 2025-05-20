import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="max-w-3xl bg-white shadow-lg rounded-md p-8 transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600">
          📖 About Us
        </h1>
        <p className="text-lg text-gray-600 mt-4 text-center italic">
          Welcome to our student marketplace! Our platform is designed to help
          university students buy and sell products easily and securely.
        </p>
        <div className="mt-6 space-y-4">
          <p className="text-xl text-gray-800 font-semibold flex items-center gap-2">
            🎯 <strong>Our Mission:</strong> To create a trusted and
            user-friendly marketplace for students.
          </p>
          <p className="text-xl text-gray-800 font-semibold flex items-center gap-2">
            🛒 <strong>What We Offer:</strong> A simple and secure platform for
            selling and buying gadgets, books, and accessories.
          </p>
          <p className="text-xl text-gray-800 font-semibold flex items-center gap-2">
            🔒 <strong>Secure Transactions:</strong> Verified student accounts
            to prevent scams.
          </p>
        </div>
        {/* Back to Home Button */}
        <div className="mt-8 text-center">
          <Link
            to="/"
            className="bg-gradient-to-r from-teal-400 to-blue-500 text-white py-2 px-6 rounded-full shadow-md hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 transform transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
