import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';
import { motion } from 'framer-motion';

const CompleteOrderPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 py-12 px-6 md:px-20 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-2xl rounded-2xl p-8 md:p-12 max-w-4xl w-full"
      >
        <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">
          ✅ Complete Your Order
        </h1>

        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              🛒 Seamless Ordering Process
            </h2>
            <p>
              Once you choose your desired product and click{' '}
              <strong>“Buy Now”</strong>, you'll be guided through a secure and
              user-friendly checkout process. Fill in your shipping details,
              confirm your items, and proceed to payment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              🔒 Safe & Secure Transactions
            </h2>
            <p>
              Your payment is protected using industry-standard encryption.
              Whether you pay via{' '}
              <strong>Visa, MasterCard, or mobile banking</strong>, we ensure
              your sensitive information remains secure and confidential at
              every step.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              🧾 Authentic & Verified Products
            </h2>
            <p>
              All products listed in our store are{' '}
              <strong>genuine, verified by sellers</strong>, and reviewed by
              real users. We value trust and quality — your satisfaction is our
              top priority.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              🚚 Fast Delivery & Updates
            </h2>
            <p>
              After completing your order, you’ll receive a confirmation email
              and live tracking updates. Our partners ensure quick and safe
              delivery directly to your doorstep.
            </p>
          </section>
        </div>

        <div className="mt-10 flex justify-center">
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

export default CompleteOrderPage;
