import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQSection = () => {
  const faqs = [
    {
      q: '📢 How do I sell a product?',
      a: "Click on 'Post an Ad,' fill in the product details, set a fair price, and submit. Your product will be listed for other students to see.",
    },
    {
      q: '💰 Is this platform free?',
      a: 'Yes! Our platform is completely free to use. There are no hidden charges for posting or buying products.',
    },
    {
      q: '🎓 Who can use this platform?',
      a: 'Only students from your university with a verified student ID can create an account and trade items securely.',
    },
    {
      q: '🔒 Is my data safe?',
      a: 'Absolutely! We use industry-standard encryption and secure authentication to protect your personal data.',
    },
    {
      q: '📦 What types of products can I sell?',
      a: 'You can sell books, electronics, gadgets, accessories, and other items that are allowed under university policies.',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">
          🤔 Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-200 mt-3">
          Everything you need to know about using our platform!
        </p>
        <div className="mt-8 space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='rounded-md'>
      <motion.div
        layout
        className="p-5 bg-white rounded-lg shadow-md transition-all duration-300 cursor-pointer hover:shadow-xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div layout className="flex items-center justify-between">
          <h3 className="font-semibold text-lg text-gray-800">{faq.q}</h3>
          {isOpen ? (
            <ChevronUp size={24} className="text-indigo-600" />
          ) : (
            <ChevronDown size={24} className="text-indigo-600" />
          )}
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-2 text-gray-600 text-sm"
            >
              {faq.a}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default FAQSection;
