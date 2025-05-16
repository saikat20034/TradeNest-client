import React from 'react';
import { Link } from 'react-router-dom';

const PostYourItem = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-green-50 to-green-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg p-8 md:p-12">
        {/* Header with Navigation */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl font-bold text-gray-900">Post Your Item</h2>
          <div className="flex gap-4">
            <Link
              to="/"
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
              Home
            </Link>
            <Link
              to="/login"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <p>
            Welcome to our campus marketplace platform! Here, students can
            effortlessly sell or donate items like gadgets, books, and
            accessories to others within the university.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800">
            📌 How to Post Your Items:
          </h3>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>1. Sign Up or Log In:</strong> To get started, you need to{' '}
              <Link to="/signup" className="text-green-600 underline">
                create an account
              </Link>{' '}
              or{' '}
              <Link to="/login" className="text-green-600 underline">
                log in
              </Link>{' '}
              if you already have one.
            </li>
            <li>
              <strong>2. Become a Seller:</strong> From your dashboard, request
              to become a seller. Your application will be reviewed by the
              admin.
            </li>
            <li>
              <strong>3. Admin Approval:</strong> Once your seller request is
              approved by the admin, you’ll gain access to the seller panel.
            </li>
            <li>
              <strong>4. Post Your Items:</strong> Head over to the{' '}
              <span className="font-semibold">“Add Products”</span> section in
              your seller dashboard and fill out the details to post your item.
            </li>
            <li>
              <strong>5. Start Selling:</strong> Your item will be visible to
              potential buyers once it's published!
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800">
            💡 Tips for Better Sales:
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use clear and high-quality images.</li>
            <li>Write detailed and honest product descriptions.</li>
            <li>Set a fair and competitive price.</li>
            <li>Respond promptly to buyer queries.</li>
          </ul>

          <p className="mt-4">
            Ready to start your journey as a campus seller?{' '}
            <Link to="/login" className="text-blue-600 underline">
              Log in
            </Link>{' '}
            now and explore your dashboard.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PostYourItem;
