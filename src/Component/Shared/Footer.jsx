import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="w-full">
      <footer className="footer footer-center mt-10 mb-5 text-white rounded-md p-10 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500">
        {/* Navigation Links */}
        <nav className="grid grid-flow-col gap-6 text-lg font-semibold">
          <Link
            to="/about-us"
            className="link link-hover hover:text-yellow-300"
          >
            About Us
          </Link>
          <a href="/contact" className="link link-hover hover:text-yellow-300">
            Contact
          </a>
          <a href="/jobs" className="link link-hover hover:text-yellow-300">
            Jobs
          </a>
          <a
            href="/press-kit"
            className="link link-hover hover:text-yellow-300"
          >
            Press Kit
          </a>
          <a
            href="/privacy-policy"
            className="link link-hover hover:text-yellow-300"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-of-service"
            className="link link-hover hover:text-yellow-300"
          >
            Terms of Service
          </a>
        </nav>

        {/* Contact Information */}
        <div className="mt-4 text-center text-sm">
          <p>
            <strong>TradeNest HQ</strong>
          </p>
          <p>123 Market Street, Dhaka, Bangladesh</p>
          <p>
            Email:{' '}
            <a href="mailto:support@tradenest.com" className="text-yellow-300">
              support@tradenest.com
            </a>
          </p>
          <p>
            Phone:{' '}
            <a href="tel:+8801234567890" className="text-yellow-300">
              +880 123 456 7890
            </a>
          </p>
        </div>

        {/* Social Media Icons */}
        <nav className="flex gap-6 mt-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300"
          >
            {/* Twitter SVG */}
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300"
          >
            {/* YouTube SVG */}
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300"
          >
            {/* Facebook SVG */}
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300"
          >
            {/* LinkedIn SVG */}
          </a>
        </nav>

        {/* Copyright Notice */}
        <aside className="mt-6 text-center">
          <p className="text-sm">
            Copyright © {new Date().getFullYear()} - All rights reserved by{' '}
            <strong className="text-yellow-300">TradeNest</strong>
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
