import { Link } from 'react-router-dom';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 flex items-center justify-center p-6">
      <div className="max-w-3xl bg-white shadow-lg rounded-md p-8 transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
          📞 Contact Us
        </h1>
        <p className="text-lg text-gray-600 mt-4 text-center italic">
          Have any questions? We’re here to help! Reach out to us and we’ll get
          back to you as soon as possible.
        </p>
        <div className="mt-6 space-y-4">
          <p className="text-xl text-gray-800 font-semibold flex items-center gap-2">
            📍 <strong>Our Address:</strong> 123 Market Street, Dhaka,
            Bangladesh
          </p>
          <p className="text-xl text-gray-800 font-semibold flex items-center gap-2">
            📧 <strong>Email:</strong>{' '}
            <a
              href="mailto:support@tradenest.com"
              className="text-yellow-400 hover:text-yellow-500"
            >
              support@tradenest.com
            </a>
          </p>
          <p className="text-xl text-gray-800 font-semibold flex items-center gap-2">
            📞 <strong>Phone:</strong>{' '}
            <a
              href="tel:+8801234567890"
              className="text-yellow-400 hover:text-yellow-500"
            >
              +880 123 456 7890
            </a>
          </p>
        </div>

        {/* Contact Form */}
        <div className="mt-8">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="text-gray-800 font-semibold">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-gray-800 font-semibold">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-gray-800 font-semibold">
                Your Message
              </label>
              <textarea
                id="message"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                rows="4"
                placeholder="Write your message here"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 rounded-full shadow-md hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 transform transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Back to Home Button */}
        <div className="mt-8 text-center">
          <Link
            to="/"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-2 px-6 rounded-full shadow-md hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 transform transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
