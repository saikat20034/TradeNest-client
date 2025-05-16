import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Logo component updated to use your URL
const Logo = () => (
  <div className="flex justify-center mb-6">
    <img
      src="https://i.postimg.cc/tCc4w7NG/tradenest.webp"
      alt="TradeNest Logo"
      className="w-12 h-12 rounded-full "
      loading="lazy"
    />
  </div>
);

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <footer
      className="w-full mt-10 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 rounded-t-lg px-6 sm:px-12 py-12"
      data-aos="fade-up"
    >
      <Logo />

      {/* Navigation Links */}
      <nav
        className="grid grid-flow-col gap-8 justify-center text-lg font-semibold mb-8"
        aria-label="Footer navigation"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <Link to="/about-us" className="hover:text-yellow-400 transition">
          About Us
        </Link>
        <Link to="/contact" className="hover:text-yellow-400 transition">
          Contact
        </Link>
        <Link to="/jobs" className="hover:text-yellow-400 transition">
          Jobs
        </Link>
        <Link to="/press-kit" className="hover:text-yellow-400 transition">
          Press Kit
        </Link>
        <Link to="/privacy-policy" className="hover:text-yellow-400 transition">
          Privacy Policy
        </Link>
        <Link to="/terms-of-service" className="hover:text-yellow-400 transition">
          Terms of Service
        </Link>
      </nav>

      {/* Contact Information */}
      <section
        className="max-w-md mx-auto text-center space-y-1 text-sm"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <p className="font-semibold text-yellow-400">TradeNest HQ</p>
        <address className="not-italic">
          MBSTU Campus, Dhaka, Bangladesh
        </address>
        <p>
          Email:{' '}
          <a
            href="mailto:support@tradenest.com"
            className="text-yellow-400 hover:underline"
          >
            support@tradenest.com
          </a>
        </p>
        <p>
          Phone:{' '}
          <a
            href="tel:+8801234567890"
            className="text-yellow-400 hover:underline"
          >
            +880 123 456 7890
          </a>
        </p>
      </section>

      {/* Social Media Icons */}
      <nav
        className="flex justify-center gap-8 mt-8 text-yellow-400"
        aria-label="Social media links"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="hover:text-yellow-300 transition"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className="hover:text-yellow-300 transition"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M19.8 7.2s-.2-1.4-1-2c-.9-.9-1.9-.9-2.4-1C13.4 4 12 4 12 4s-1.4 0-2.4.2c-.5 0-1.5.1-2.4 1-.8.6-1 2-1 2S6 9 6 10v1c0 1 .1 2.7.1 2.7s.1 1.4 1 2c.9.9 2.1.9 2.6 1 1 .1 4.4.1 4.4.1s1.4 0 2.4-.2c.5 0 1.5-.1 2.4-1 .8-.6 1-2 1-2s.1-1.8.1-2.7v-1c0-1-.1-2.7-.1-2.7zM10 14.6v-5l4 2.5-4 2.5z" />
          </svg>
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:text-yellow-300 transition"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M18 2h-3a6 6 0 00-6 6v3H6v4h3v8h4v-8h3l1-4h-4V8a1 1 0 011-1h3z" />
          </svg>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-yellow-300 transition"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M4 4h4v16H4V4zm6 0h4v2.3a5.4 5.4 0 015 5.5V20h-4v-7a1 1 0 00-1-1 1 1 0 00-1 1v7h-4V4z" />
          </svg>
        </a>
      </nav>

      {/* Copyright Notice */}
      <aside
        className="mt-12 text-center text-sm text-gray-500"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <p>&copy; {new Date().getFullYear()} TradeNest. All rights reserved.</p>
      </aside>
    </footer>
  );
};

export default Footer;
