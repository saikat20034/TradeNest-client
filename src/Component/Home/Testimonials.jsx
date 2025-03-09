import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Ali Hossain',
      review: 'Amazing platform! Sold my old laptop in just 2 days.',
      role: 'Final Year Student',
      image: 'https://i.pravatar.cc/100?img=1',
    },
    {
      name: 'Sadia Rahman',
      review: 'Bought books at half price. Great deals!',
      role: 'Sophomore',
      image: 'https://i.pravatar.cc/100?img=2',
    },
    {
      name: 'Rahim Uddin',
      review: 'Great for students. Very easy to use!',
      role: 'Computer Science Major',
      image: 'https://i.pravatar.cc/100?img=3',
    },
    {
      name: 'Jasmine Akter',
      review: 'Highly recommended! Found the best deals here.',
      role: 'Economics Student',
      image: 'https://i.pravatar.cc/100?img=4',
    },
    {
      name: 'Tanvir Ahmed',
      review: 'The best platform to trade used gadgets within campus!',
      role: 'Engineering Student',
      image: 'https://i.pravatar.cc/100?img=5',
    },
    {
      name: 'Mariam Jahan',
      review: 'Secure and fast transactions. Absolutely love it!',
      role: 'Medical Student',
      image: 'https://i.pravatar.cc/100?img=6',
    },
    {
      name: 'Noman Islam',
      review: 'This website helped me earn money by selling old books.',
      role: 'Literature Student',
      image: 'https://i.pravatar.cc/100?img=7',
    },
    {
      name: 'Farhana Sultana',
      review: 'Got a smartphone at a great price. Very happy!',
      role: 'Business Graduate',
      image: 'https://i.pravatar.cc/100?img=8',
    },
  ];

  return (
    <section className="py-16 mt-10 mb-10 rounded-md bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mt-10">🌟 What Students Say</h2>
        <p className="mt-3 text-lg text-gray-200">
          Hear from students who used our platform to buy & sell products
          easily!
        </p>

        {/* Horizontal Scrollable Reviews */}
        <div className="relative overflow-hidden mt-10 mb-10">
          <motion.div
            className="flex space-x-6"
            initial={{ x: '100%' }}
            animate={{ x: '-100%' }}
            transition={{ repeat: Infinity, duration: 40, ease: 'linear' }} // Smooth 0s scroll
          >
            {testimonials.concat(testimonials).map((user, index) => (
              <div
                key={index}
                className="min-w-[300px] p-6 bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg"
              >
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-16 h-16 mx-auto rounded-full border-4 border-white"
                />
                <p className="mt-4 text-lg font-medium text-gray-200">
                  "{user.review}"
                </p>
                <h4 className="mt-4 text-xl font-semibold">{user.name}</h4>
                <p className="text-gray-300 text-sm">{user.role}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
