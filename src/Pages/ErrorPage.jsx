import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../Component/Shared/Button';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="bg-white bg-opacity-20 backdrop-blur-lg shadow-lg rounded-lg p-8 max-w-lg text-center"
      >
        {/* Animated SVG */}
        <motion.div
          initial={{ y: -10 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-24 h-24 mx-auto text-red-500"
          >
            <path d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>
        </motion.div>

        <h1 className="text-4xl font-bold mt-4 text-gray-100">
          Oops! Page Not Found
        </h1>
        <p className="text-gray-300 mt-2">
          The page you are looking for might have been removed or is temporarily
          unavailable.
        </p>

        <div className="flex justify-center mt-6 space-x-4">
          {/* Go Back Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(-1)}
            className="px-6 py-2 text-sm font-semibold text-white bg-gray-700 rounded-lg shadow-lg hover:bg-gray-600"
          >
            🔙 Go Back
          </motion.button>

          {/* Take Me Home Button */}
          <Button label={'🏠 Take Me Home'} onClick={() => navigate('/')} />
        </div>
      </motion.div>
    </section>
  );
};

export default ErrorPage;
