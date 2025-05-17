import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ShoppingCart, Home } from 'lucide-react';
import { motion } from 'framer-motion';

const BrowseBuyInfoPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isBuyNow = location.pathname === '/buy-now';

  if (isBuyNow) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-10 rounded-2xl shadow-xl max-w-xl text-center"
        >
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            You're Almost There!
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Please proceed to the checkout page and complete your payment using
            your Visa card.
          </p>

          <button
            onClick={() => navigate('/')}
            className="border border-blue-600 text-blue-600 hover:bg-blue-100 flex gap-2 items-center px-6 py-2 text-lg rounded-xl transition mx-auto"
          >
            <Home className="h-5 w-5" />
            Home
          </button>
        </motion.div>
      </div>
    );
  }

  // Normal Browse & Buy Info View
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-50 py-12 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-xl rounded-2xl p-8 md:p-12 max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">
          How to Browse & Buy
        </h1>

        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <div>
            <h2 className="text-2xl font-semibold mb-2">1️⃣ Sign Up</h2>
            <p>
              Create an account by clicking on the <strong>“Register”</strong>{' '}
              button in the top navigation bar. Fill in your name, email,
              password, and verify your email to get started.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">2️⃣ Browse Products</h2>
            <p>
              After logging in, go to the <strong>“All Products”</strong> or{' '}
              <strong>“Shop”</strong> section. Use filters to search by
              category, price, or rating. Click any product to see full details.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              3️⃣ Buy with Visa Card
            </h2>
            <p>
              Once you've selected a product, click <strong>“Buy Now”</strong>.
              On the checkout page, enter your delivery details and choose{' '}
              <strong>Visa</strong> as your payment method. Enter your Visa card
              details securely and confirm the purchase. You will receive an
              order confirmation instantly.
            </p>
          </div>
        </div>

        <div className="mt-10 flex justify-center gap-4">
          <button
            onClick={() => navigate('/buy-now')}
            className="bg-blue-600 text-white hover:bg-blue-700 flex gap-2 items-center px-6 py-2 text-lg rounded-xl transition"
          >
            <ShoppingCart className="h-5 w-5" />
            Buy Now
          </button>

          <button
            onClick={() => navigate('/')}
            className="border border-blue-600 text-blue-600 hover:bg-blue-100 flex gap-2 items-center px-6 py-2 text-lg rounded-xl transition"
          >
            <Home className="h-5 w-5" />
            Home
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default BrowseBuyInfoPage;
