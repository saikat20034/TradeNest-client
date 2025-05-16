import React from 'react';
import {
  FaUserPlus,
  FaUpload,
  FaShoppingCart,
  FaHandshake,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const HowToUse = () => {
  const navigate = useNavigate();

  const steps = [
    {
      icon: <FaUserPlus className="text-5xl text-blue-500" />,
      title: 'Create an Account',
      description:
        'Sign up and set up your profile to start buying and selling.',
      path: '/create-account', // target path for this step
    },
    {
      icon: <FaUpload className="text-5xl text-green-500" />,
      title: 'Post Your Item',
      description:
        'Upload product details, images, and set a price for selling.',
      path: '/post-your-items',
    },
    {
      icon: <FaShoppingCart className="text-5xl text-yellow-500" />,
      title: 'Browse & Buy',
      description:
        'Explore listed products and contact sellers to make purchases.',
      path: '/browse',
    },
    {
      icon: <FaHandshake className="text-5xl text-red-500" />,
      title: 'Complete the order',
      description: 'Complete the order with safe transaction.',
      path: '/complete-order',
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-100 text-center rounded-md shadow-lg">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">How to Use</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Follow these simple steps to start buying and selling on our platform.
        </p>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              onClick={() => navigate(step.path)}
              className="bg-white p-6 rounded-lg shadow-md text-center cursor-pointer hover:shadow-xl transition-shadow duration-300"
              role="button"
              tabIndex={0}
              onKeyPress={e => {
                if (e.key === 'Enter') navigate(step.path);
              }}
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
