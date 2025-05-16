import { useState } from 'react';
import { motion } from 'framer-motion';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = e => {
    e.preventDefault();
    if (!email) {
      setMessage('Please enter your email.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage('Please enter a valid email.');
      return;
    }
    setMessage('🎉 Thank you for subscribing!');
    setEmail('');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <section className="mt-10 px-6">
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-100 text-black text-center py-12 rounded-md shadow-lg">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          📩 Subscribe to Our Newsletter
        </motion.h2>
        <p className="text-lg text-gray-800 mb-6">
          Stay updated with our latest news, offers, and exclusive content!
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubscribe}
          className="relative flex flex-col sm:flex-row items-center justify-center max-w-2xl mx-auto"
        >
          <motion.input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full sm:w-80 px-5 py-3 text-gray-800 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all duration-300"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.button
            type="submit"
            className="mt-4 sm:mt-0 sm:ml-4 bg-white text-indigo-600 font-semibold px-6 py-3 rounded-md shadow-md hover:bg-gray-100 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Subscribe 🚀
          </motion.button>
        </form>

        {/* Message Display */}
        {message && (
          <motion.p
            className="mt-4 text-lg font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {message}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default NewsletterSection;
