import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Logo = () => (
  <div className="flex justify-center mb-4">
    <img
      src="https://i.postimg.cc/tCc4w7NG/tradenest.webp"
      alt="TradeNest Logo"
      className="w-12 h-12 rounded-full"
      loading="lazy"
    />
  </div>
);

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <footer className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 rounded-t-lg mt-10">
      <div
        className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 py-6"
        data-aos="fade-up"
      >
        <Logo />

        {/* Navigation Links */}
        <nav
          className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-base sm:text-lg font-semibold mb-6"
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
          <Link
            to="/privacy-policy"
            className="hover:text-yellow-400 transition"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms-of-service"
            className="hover:text-yellow-400 transition"
          >
            Terms of Service
          </Link>
        </nav>

        {/* Contact Info */}
        <section
          className="text-center space-y-1 text-sm max-w-md mx-auto"
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

        {/* Social Media */}
        <nav
          className="flex justify-center gap-6 sm:gap-8 mt-6 text-yellow-400"
          aria-label="Social media links"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {[
            {
              href: 'https://twitter.com',
              label: 'Twitter',
              d: 'M23 3a10.9...',
            },
            {
              href: 'https://youtube.com',
              label: 'YouTube',
              d: 'M19.8 7.2s...',
            },
            {
              href: 'https://facebook.com',
              label: 'Facebook',
              d: 'M18 2h-3...',
            },
            {
              href: 'https://linkedin.com',
              label: 'LinkedIn',
              d: 'M4 4h4...',
            },
          ].map(({ href, label, d }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="hover:text-yellow-300 transition"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d={d} />
              </svg>
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <aside
          className="mt-6 text-center text-sm text-gray-500"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <p>
            &copy; {new Date().getFullYear()} TradeNest. All rights reserved.
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
