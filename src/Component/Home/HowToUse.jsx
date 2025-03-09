import React from 'react';
import {
  FaUserPlus,
  FaUpload,
  FaShoppingCart,
  FaHandshake,
} from 'react-icons/fa';

const HowToUse = () => {
  const steps = [
    {
      icon: <FaUserPlus className="text-5xl text-blue-500" />,
      title: 'Create an Account',
      description:
        'Sign up and set up your profile to start buying and selling.',
    },
    {
      icon: <FaUpload className="text-5xl text-green-500" />,
      title: 'Post Your Item',
      description:
        'Upload product details, images, and set a price for selling.',
    },
    {
      icon: <FaShoppingCart className="text-5xl text-yellow-500" />,
      title: 'Browse & Buy',
      description:
        'Explore listed products and contact sellers to make purchases.',
    },
    {
      icon: <FaHandshake className="text-5xl text-red-500" />,
      title: 'Meet & Complete',
      description:
        'Meet the seller in a safe place and complete the transaction.',
    },
  ];

  return (
    <section className="py-12 bg-gray-100 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">How to Use</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Follow these simple steps to start buying and selling on our platform.
        </p>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
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
